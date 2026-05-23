"use client";

import { Bell, Briefcase, FileText, Sparkles, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";

const notifications = [
    {
        icon: Briefcase,
        title: "Nouveau match à 97%",
        description: "Lead Product Designer · Spotify",
        iconColor: "text-indigo-600",
        iconBg: "bg-indigo-50",
    },
    {
        icon: FileText,
        title: "CV optimisé",
        description: "Score ATS amélioré à 94/100",
        iconColor: "text-emerald-600",
        iconBg: "bg-emerald-50",
    },
    {
        icon: Sparkles,
        title: "Lettre générée",
        description: "Adaptée à l'offre Mistral AI",
        iconColor: "text-violet-600",
        iconBg: "bg-violet-50",
    },
    {
        icon: Star,
        title: "Offre prioritaire",
        description: "Top opportunité cette semaine",
        iconColor: "text-amber-500",
        iconBg: "bg-amber-50",
    },
];

function NotificationCard({
                              icon: Icon,
                              title,
                              description,
                              iconColor,
                              iconBg,
                          }: (typeof notifications)[number]) {
    return (
        <div className="flex w-full items-center gap-2.5 rounded-[12px] border border-slate-100 bg-slate-50 px-3 py-2.5">
            <div className={cn("flex h-8 w-8 shrink-0 items-center justify-center rounded-[9px]", iconBg)}>
                <Icon className={cn("h-4 w-4", iconColor)} strokeWidth={1.8} />
            </div>
            <div className="min-w-0 flex-1">
                <p className="truncate text-[11px] font-semibold text-slate-800">{title}</p>
                <p className="truncate text-[10px] font-medium text-slate-400">{description}</p>
            </div>
            <Bell className="h-3.5 w-3.5 shrink-0 text-slate-300" strokeWidth={1.8} />
        </div>
    );
}

export function KarriaNotificationList() {
    return (
        <div className="relative h-[180px] w-full overflow-hidden">
            <AnimatedList delay={1800}>
                {notifications.map((n, i) => (
                    <NotificationCard key={i} {...n} />
                ))}
            </AnimatedList>

            {/* Light-mode fade overlays */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-white to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white to-transparent" />
        </div>
    );
}