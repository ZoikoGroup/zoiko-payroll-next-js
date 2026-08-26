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
};

export type PublicMessageSubmitResponse = {
  session_id: number;
  intent_id: string;
  answer: string;
  sources: PublicSource[];
};

class AssistApiError extends Error {
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

export function submitPublicMessage(sessionId: number, text: string): Promise<PublicMessageSubmitResponse> {
  return request<PublicMessageSubmitResponse>(`/api/assist/public/sessions/${sessionId}/messages`, {
    method: "POST",
    body: JSON.stringify({ text }),
  });
}

export function listPublicMessages(sessionId: number): Promise<PublicMessage[]> {
  return request<PublicMessage[]>(`/api/assist/public/sessions/${sessionId}/messages`);
}
