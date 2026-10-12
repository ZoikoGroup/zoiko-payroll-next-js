/**
 * Client for the Zoiko Payroll Assist public (unauthenticated) API.
 *
 * Talks to the payroll platform backend's /api/assist/public/* endpoints —
 * the same chatbot used inside the authenticated payroll app, restricted to
 * global knowledge-base answers only. Never sends a bearer token; this site
 * has no login of its own.
 *
 * NEXT_PUBLIC_ASSIST_API_BASE_URL must be set for the widget to activate —
 * see isAssistConfigured(). Left unset, the widget renders nothing rather
 * than pointing at a broken URL.
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_ASSIST_API_BASE_URL || "";

export function isAssistConfigured(): boolean {
  return Boolean(API_BASE_URL);
}

export type PublicSession = {
  id: number;
  locale: string;
  created_at: string;
};

export type PublicMessage = {
  id: number;
  role: "user" | "assistant";
  content: string;
  created_at: string;
};

export type PublicSource = {
  title: string;
  authority?: string;
  approved_url?: string;
  url?: string;
  verified_at?: string;
};

// Proposed public contracts from the chatbot wireframe (§11). Fields are
// optional because the endpoints may not be deployed yet; callers treat a
// missing response as the documented safe fallback state.
export type CapabilityValue = boolean | string | { status?: string; verified_at?: string };

export type PublicCountry = {
  code: string;
  name: string;
  launch_status: "live" | "planned" | "unavailable" | string;
  aliases?: string[];
  capabilities?: Record<string, CapabilityValue>;
  verified_at?: string;
  source_url?: string;
  public_launch_date?: string;
};

export type PublicCountriesFeed = {
  countries: PublicCountry[];
  live_count?: number;
  updated_at?: string;
};

export type PublicAssistConfig = {
  links?: Record<string, string>;
  locales?: { code: string; label: string }[];
  max_message_length?: number;
  live_support_available?: boolean;
  roadmap_note?: string;
};

export type HealthStatus = "available" | "degraded" | "unavailable";

export type PublicMessageSubmitResponse = {
  session_id: number;
  intent_id: string;
  answer: string;
  sources: PublicSource[];
};

export class AssistApiError extends Error {
  status?: number;

  constructor(message: string, status?: number) {
    super(message);
    this.name = "AssistApiError";
    this.status = status;
  }
}

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  if (!API_BASE_URL) {
    throw new AssistApiError("Assist is not configured (NEXT_PUBLIC_ASSIST_API_BASE_URL is unset).");
  }
  const res = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
  });
  if (!res.ok) {
    let detail = res.statusText;
    try {
      const data = await res.json();
      detail = data?.message || data?.detail || detail;
    } catch {
      // response body wasn't JSON — fall back to statusText
    }
    throw new AssistApiError(detail, res.status);
  }
  return res.json() as Promise<T>;
}

export function createPublicSession(locale: string = "en"): Promise<PublicSession> {
  return request<PublicSession>("/api/assist/public/sessions", {
    method: "POST",
    body: JSON.stringify({ locale }),
  });
}

// country_code / topic_id are optional context hints (wireframe §11); the
// backend ignores fields it doesn't know yet, so sending them is safe.
export function submitPublicMessage(
  sessionId: number,
  text: string,
  { countryCode, topicId, signal }: { countryCode?: string; topicId?: string; signal?: AbortSignal } = {}
): Promise<PublicMessageSubmitResponse> {
  return request<PublicMessageSubmitResponse>(`/api/assist/public/sessions/${sessionId}/messages`, {
    method: "POST",
    body: JSON.stringify({ text, country_code: countryCode, topic_id: topicId }),
    signal,
  });
}

async function optional<T>(path: string): Promise<T | null> {
  try {
    return await request<T>(path);
  } catch {
    return null;
  }
}

export function getPublicAssistConfig(locale: string = "en"): Promise<PublicAssistConfig | null> {
  return optional<PublicAssistConfig>(`/api/assist/public/config?locale=${encodeURIComponent(locale)}`);
}

export function getPublicPayrollCountries(locale: string = "en"): Promise<PublicCountriesFeed | null> {
  return optional<PublicCountriesFeed>(`/api/assist/public/payroll-countries?locale=${encodeURIComponent(locale)}`);
}

// Prefers the dedicated public health endpoint; until that is deployed,
// falls back to the existing unauthenticated /assist/status. Fails closed.
export async function getPublicAssistHealth(): Promise<HealthStatus> {
  const health = await optional<{ status?: HealthStatus }>("/api/assist/public/health");
  if (health?.status) return health.status;
  const status = await optional<{ status?: string; knowledge_available?: boolean }>("/api/assist/status");
  if (!status || status.status !== "ok") return "unavailable";
  return status.knowledge_available ? "available" : "degraded";
}

export function listPublicMessages(sessionId: number): Promise<PublicMessage[]> {
  return request<PublicMessage[]>(`/api/assist/public/sessions/${sessionId}/messages`);
}
