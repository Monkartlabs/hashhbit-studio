"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Cpu, 
  Sparkles, 
  Terminal, 
  Gauge, 
  ShieldCheck, 
  Zap, 
  Check, 
  Layers 
} from "lucide-react";

export default function TechStackVisualizer() {
  const [activeTech, setActiveTech] = useState(0);

  const techNodes = [
    {
      name: "Next.js 16 & React 19",
      role: "Architecture Core",
      stat: "< 35ms TTFB",
      desc: "Server-side rendering, edge caching, and instantaneous micro-frontends.",
      color: "#4B2E63",
    },
    {
      name: "Tailwind CSS & Modular Design",
      role: "Styling Framework",
      stat: "0 Parent Collisions",
      desc: "Isolated CSS token variables allowing seamless theme and component customizations.",
      color: "#65477F",
    },
    {
      name: "Framer Motion & WebGL Shaders",
      role: "Kinetic Engine",
      stat: "60 FPS Native",
      desc: "Hardware-accelerated physics, spring transitions, and interactive canvas particle meshes.",
      color: "#B69A68",
    },
    {
      name: "Meta & Google Ads API Engine",
      role: "Growth Infrastructure",
      stat: "Real-time Attribution",
      desc: "Algorithmic budget pacing, automated bid adjustments, and server-side tracking.",
      color: "#282126",
    },
    {
      name: "Autonomous AI Agent Workflows",
      role: "Smart Automation",
      stat: "24/7 Autopilot",
      desc: "Automated lead ingestion, intelligent scheduling, and customer data enrichment.",
      color: "#4B2E63",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 relative overflow-hidden bg-[#E8DED2]/40 border-y border-[#B8A6C9]/40">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F3EC] border border-[#B8A6C9]/50 text-xs font-semibold text-[#4B2E63] uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5 text-[#B69A68]" />
            <span>High-Tech Engine Architecture</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#282126] tracking-tight mb-4">
            Built On Modern <span className="text-gradient-purple">Precision Tech</span>
          </h2>
          <p className="text-sm md:text-base text-[#65477F]">
            Zero bloat, isolated Tailwind classes for effortless styling changes, and sub-second execution speeds.
          </p>
        </div>

        {/* Interactive Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {techNodes.map((tech, i) => {
            const isHovered = activeTech === i;
            return (
              <motion.div
                key={tech.name}
                onMouseEnter={() => setActiveTech(i)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isHovered
                    ? "bg-[#F7F3EC] border-[#4B2E63] shadow-lg shadow-[#4B2E63]/10 -translate-y-1.5"
                    : "bg-[#F7F3EC]/70 border-[#D8CEC3] hover:border-[#B8A6C9]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold text-[#65477F] uppercase tracking-wider bg-[#E8DED2] px-2 py-0.5 rounded-md">
                      0{i + 1}
                    </span>
                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                        isHovered
                          ? "bg-[#4B2E63] text-[#F7F3EC]"
                          : "bg-[#D9CEE3]/60 text-[#4B2E63]"
                      }`}
                    >
                      {tech.stat}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base text-[#282126] mb-1">
                    {tech.name}
                  </h3>
                  <span className="text-[11px] font-semibold text-[#B69A68] block mb-3">
                    {tech.role}
                  </span>
                  <p className="text-xs text-[#65477F] leading-relaxed">
                    {tech.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#D8CEC3]/60 flex items-center gap-1.5 text-[11px] font-mono text-[#4B2E63]">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Production Certified</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
