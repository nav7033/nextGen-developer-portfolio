"use client";
import { motion } from "framer-motion";

export default function CodeWindow() {
  const lines = [
    { label: "const", text: " developer =", color: "text-purple-400" },
    { label: "  name:", text: " 'Naveen Kumar Mandal',", color: "text-cyan-300" },
    { label: "  role:", text: " 'Front-End Engineer',", color: "text-cyan-300" },
    { label: "  skills:", text: " ['Next.js', 'TS', 'Tailwind', 'Framer'],", color: "text-amber-300" },
    { label: "  mission:", text: " () => 'Crafting modern experiences'", color: "text-emerald-400" },
    { label: "};", text: "", color: "text-purple-400" }
  ];

  return (
    <div className="w-full max-w-md md:max-w-xl rounded-xl border border-white/10 bg-slate-950/80 p-5 font-mono text-xs md:text-sm shadow-2xl relative overflow-hidden">
      <div className="flex items-center gap-1.5 border-b border-white/5 pb-3 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-amber-500/80" />
        <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
        <span className="text-[10px] text-muted-text ml-4 font-sans tracking-wide">portfolio.config.ts</span>
      </div>
      <div className="space-y-2">
        {lines.map((line, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + idx * 0.15, duration: 0.4 }}
            className="flex"
          >
            <span className="text-slate-600 select-none w-6 pr-2 text-right">{idx + 1}</span>
            <span className={line.color}>{line.label}</span>
            <span className="text-slate-300 ml-1">{line.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}