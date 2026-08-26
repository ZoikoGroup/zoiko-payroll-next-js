import React from 'react';
import { 
  Layers, 
  CreditCard, 
  Rocket, 
  Globe, 
  ShieldCheck, 
  Database, 
  BarChart3, 
  LifeBuoy 
} from 'lucide-react';

interface CategoryItem {
  id: number;
  title: string;
  description: string;
  count: string;
  icon: React.ReactNode;
}

const categories: CategoryItem[] = [
  {
    id: 1,
    title: "Product & Platform",
    description: "What it is, workflow, approvals, records, integrations, Zoiko One.",
    count: "6 questions",
    icon: <Layers className="w-4 h-4 text-sky-600" />
  },
  {
    id: 2,
    title: "Plans & Buying",
    description: "Price, packaging, enterprise, procurement, demo, services.",
    count: "4 questions",
    icon: <CreditCard className="w-4 h-4 text-sky-600" />
  },
  {
    id: 3,
    title: "Implementation & Migration",
    description: "Readiness, data migration, testing, launch, responsibilities.",
    count: "4 questions",
    icon: <Rocket className="w-4 h-4 text-sky-600" />
  },
  {
    id: 4,
    title: "Global Payroll & Jurisdictions",
    description: "Coverage, local requirements, multi-entity, market variation.",
    count: "3 questions",
    icon: <Globe className="w-4 h-4 text-sky-600" />
  },
  {
    id: 5,
    title: "Security, Privacy & Trust",
    description: "Access, data protection, assurance, evidence, procurement.",
    count: "3 questions",
    icon: <ShieldCheck className="w-4 h-4 text-sky-600" />
  },
  {
    id: 6,
    title: "Integrations & Data",
    description: "HRIS/finance/identity/API/data flows.",
    count: "3 questions",
    icon: <Database className="w-4 h-4 text-sky-600" />
  },
  {
    id: 7,
    title: "Reporting & Reconciliation",
    description: "Reports, exports, reconciliations, audit evidence.",
    count: "3 questions",
    icon: <BarChart3 className="w-4 h-4 text-sky-600" />
  },
  {
    id: 8,
    title: "Support, Status & Changes",
    description: "Support, incidents, updates, configuration help, videos.",
    count: "3 questions",
    icon: <LifeBuoy className="w-4 h-4 text-sky-600" />
  }
];

export default function BrowseByCategorySection() {
  return (
    <section className="w-full bg-indigo-50/60 border-t border-slate-200 py-16 px-4 md:px-8 font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-[1200px] mx-auto space-y-10">
        
        {/* Header Block */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-3.5 bg-sky-600 rounded-xs inline-block" />
            <span className="text-sky-600 text-xs font-bold uppercase tracking-wider">
              Browse by category
            </span>
          </div>

          <h2 className="text-sky-950 text-3xl font-extrabold leading-tight">
            Eight categories — never hundreds of equally <br className="hidden sm:inline" />
            weighted questions at once.
          </h2>
        </div>

        {/* 4-Column Responsive Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-sky-300 transition-all group cursor-pointer"
            >
              <div className="space-y-4">
                {/* Icon Box */}
                <div className="w-9 h-9 bg-sky-100 rounded-lg flex items-center justify-center shrink-0">
                  {cat.icon}
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-sky-950 text-sm font-bold group-hover:text-sky-600 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Question Badge */}
              <div className="pt-4">
                <span className="inline-block px-2.5 py-1 bg-sky-100 rounded-full text-sky-800 text-xs font-bold">
                  {cat.count}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
