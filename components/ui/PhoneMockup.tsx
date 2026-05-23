"use client";

import { motion } from "framer-motion";
import {
  Briefcase, ChevronRight, FileText,
  Sparkles, Brain, Home, Search, Bell,
} from "lucide-react";
import { Iphone } from "@/registry/magicui/iphone";
import { cn } from "@/lib/utils";
import { KarriaNotificationList } from "@/components/ui/KarriaNotificationList";

const JOB_MATCHES = [
  { role: "Lead Product Designer", company: "Spotify",    location: "Paris",  score: 97, badge: "TOP", badgeBg: "bg-indigo-600" },
  { role: "Product Designer IA",   company: "Mistral AI", location: "Paris",  score: 94, badge: "IA",  badgeBg: "bg-violet-600" },
  { role: "UX Designer Senior",    company: "Doctolib",   location: "Remote", score: 91, badge: null,  badgeBg: null },
];

const NAV_ITEMS = [
  { icon: Home,     label: "Accueil", active: true  },
  { icon: Search,   label: "Offres",  active: false },
  { icon: FileText, label: "Mon CV",  active: false },
  { icon: Bell,     label: "Alertes", active: false },
];

interface PhoneMockupProps {
  className?: string;
  animate?: boolean;
}

export default function PhoneMockup({ className, animate = true }: PhoneMockupProps) {
  return (
      <motion.div
          className={cn("relative select-none", className)}
          animate={animate ? { y: [0, -10, 0] } : undefined}
          transition={animate ? { duration: 6, repeat: Infinity, ease: "easeInOut" } : undefined}
      >
        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-[-10%] rounded-full bg-indigo-100/50 blur-3xl" />

        <Iphone className="h-[610px] w-[300px] rounded-[3.2rem] border-[8px] border-slate-900">
          <div className="relative flex h-full w-full flex-col overflow-hidden bg-[#F7F8FC]">

            {/* Status bar */}
            <div className="h-11 flex-shrink-0" />

            {/* Content */}
            <div className="flex flex-1 flex-col gap-3 overflow-hidden px-4 pb-2">

              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="mb-0.5 text-[11px] font-medium text-slate-400">Bonjour Marc 👋</p>
                  <h2 className="text-[17px] font-semibold leading-tight tracking-tight text-slate-900">
                    Votre carrière avance
                  </h2>
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-indigo-600">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: "Match",    value: "97%" },
                  { label: "Score CV", value: "94"  },
                  { label: "Offres",   value: "+128" },
                ].map((s) => (
                    <div key={s.label} className="rounded-[14px] border border-slate-200/80 bg-white px-3 py-2.5">
                      <p className="text-[9px] font-semibold uppercase tracking-wide text-slate-400">{s.label}</p>
                      <p className="mt-0.5 text-[20px] font-bold leading-none tracking-tight text-slate-900">{s.value}</p>
                    </div>
                ))}
              </div>

              {/* Match card */}
              <div className="rounded-[18px] bg-indigo-600 p-4">
                <div className="mb-2.5 flex items-start justify-between">
                  <div>
                    <p className="mb-1 text-[9px] font-semibold uppercase tracking-widest text-indigo-200">
                      Meilleur match IA
                    </p>
                    <p className="text-[30px] font-bold leading-none tracking-tight text-white">97%</p>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-white/15">
                    <Brain className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div className="mb-2 flex items-center gap-2">
                  <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/20">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "97%" }}
                        transition={{ duration: 1.4, delay: 0.5, ease: "easeOut" }}
                        className="h-full rounded-full bg-white"
                    />
                  </div>
                  <span className="text-[9px] font-semibold text-indigo-200">97/100</span>
                </div>
                <p className="text-[11px] font-medium text-indigo-100/70">
                  Lead Product Designer · Spotify · Paris
                </p>
              </div>

              {/* Section label */}
              <div className="flex items-center justify-between">
                <p className="text-[12px] font-semibold text-slate-800">Opportunités recommandées</p>
                <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-[9px] font-bold text-indigo-500">IA</span>
              </div>

              {/* Jobs */}
              <div className="flex flex-col gap-1.5">
                {JOB_MATCHES.map((job, i) => (
                    <motion.div
                        key={job.role}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + i * 0.1, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        className="flex items-center gap-2.5 rounded-[14px] border border-slate-200/80 bg-white px-3 py-2.5"
                    >
                      <div className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-[10px] bg-slate-100">
                        <Briefcase className="h-3.5 w-3.5 text-slate-400" strokeWidth={1.8} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5">
                          <p className="truncate text-[11px] font-semibold text-slate-800">{job.role}</p>
                          {job.badge && (
                              <span className={cn("shrink-0 rounded-full px-1.5 py-0.5 text-[8px] font-bold text-white", job.badgeBg)}>
                          {job.badge}
                        </span>
                          )}
                        </div>
                        <p className="text-[10px] font-medium text-slate-400">
                          {job.company} · {job.location} · {job.score}%
                        </p>
                      </div>
                      <ChevronRight className="h-3 w-3 shrink-0 text-slate-300" strokeWidth={2.5} />
                    </motion.div>
                ))}
              </div>

            </div>

            {/* Nav */}
            <div className="flex shrink-0 items-center justify-around border-t border-slate-100 bg-white px-4 py-2.5">
              {NAV_ITEMS.map(({ icon: Icon, label, active }) => (
                  <button key={label} className="flex flex-col items-center gap-0.5" aria-label={label}>
                    <Icon
                        className={cn("h-[18px] w-[18px]", active ? "text-indigo-600" : "text-slate-300")}
                        strokeWidth={active ? 2.2 : 1.8}
                    />
                    <span className={cn("text-[8px] font-semibold tracking-wide", active ? "text-indigo-600" : "text-slate-300")}>
                  {label}
                </span>
                  </button>
              ))}
            </div>

          </div>
        </Iphone>
      </motion.div>
  );
}