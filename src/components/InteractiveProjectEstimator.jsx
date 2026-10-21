"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { 
  Sparkles, 
  Send, 
  CheckCircle2, 
  Layers, 
  DollarSign, 
  Clock, 
  Code2, 
  TrendingUp, 
  Palette, 
  Bot,
  Zap
} from "lucide-react";

export default function InteractiveProjectEstimator() {
  const [selectedServices, setSelectedServices] = useState(["Web Solutions"]);
  const [timeline, setTimeline] = useState("Fast-track (2-4 wks)");
  const [budgetRange, setBudgetRange] = useState("$3k — $7k");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const availableServices = [
    { name: "Web Solutions", icon: Code2 },
    { name: "Digital Marketing", icon: TrendingUp },
    { name: "UI/UX & Brand Design", icon: Palette },
    { name: "AI Automation", icon: Bot },
    { name: "SEO & Growth Engine", icon: Zap },
    { name: "Full Digital Transformation", icon: Layers },
  ];

  const toggleService = (name) => {
    if (selectedServices.includes(name)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== name));
      }
    } else {
      setSelectedServices([...selectedServices, name]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    // Trigger luxury pastel confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ["#4B2E63", "#65477F", "#B8A6C9", "#B69A68", "#D9CEE3"],
      });
    } catch (err) {
      console.log(err);
    }

    setSubmitted(true);
  };

  return (
    <section id="estimator" className="py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8DED2] border border-[#B8A6C9]/50 text-xs font-semibold text-[#4B2E63] uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#B69A68]" />
            <span>Interactive Project Configurator</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#282126] tracking-tight mb-3">
            Initiate Your <span className="text-gradient-purple">Vision</span>
          </h2>
          <p className="text-sm md:text-base text-[#65477F]">
            Configure your exact service requirements in seconds for an instantaneous roadmap proposal.
          </p>
        </div>

        {/* Interactive Estimator Glass Box */}
        <div className="rounded-3xl bg-[#E8DED2]/80 border border-[#B8A6C9]/60 shadow-2xl backdrop-blur-xl p-6 sm:p-10 relative">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* 1. Service Selection Chips */}
              <div className="space-y-3">
                <label className="text-xs font-mono font-bold text-[#65477F] uppercase tracking-wider block">
                  1. Select Scope & Services:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {availableServices.map((service) => {
                    const Icon = service.icon;
                    const isSelected = selectedServices.includes(service.name);
                    return (
                      <button
                        type="button"
                        key={service.name}
                        onClick={() => toggleService(service.name)}
                        className={`p-3.5 rounded-2xl border text-left flex items-center gap-3 transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? "bg-[#4B2E63] text-[#F7F3EC] border-[#4B2E63] shadow-md shadow-[#4B2E63]/20"
                            : "bg-[#F7F3EC] text-[#282126] border-[#D8CEC3] hover:border-[#B8A6C9]"
                        }`}
                      >
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                            isSelected ? "bg-white/20 text-[#F7F3EC]" : "bg-[#E8DED2] text-[#4B2E63]"
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-semibold leading-tight">
                          {service.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Target Timeline & Investment Budget */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                
                {/* Timeline Selector */}
                <div className="space-y-2.5">
                  <label className="text-xs font-mono font-bold text-[#65477F] uppercase tracking-wider block">
                    2. Desired Timeline:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["Sprint (1-2 wks)", "Standard (3-5 wks)", "Quarterly"].map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setTimeline(t)}
                        className={`p-2.5 rounded-xl text-center text-xs font-medium border transition-all cursor-pointer ${
                          timeline === t
                            ? "bg-[#65477F] text-[#F7F3EC] border-[#65477F]"
                            : "bg-[#F7F3EC] text-[#282126] border-[#D8CEC3] hover:border-[#B8A6C9]"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget Band */}
                <div className="space-y-2.5">
                  <label className="text-xs font-mono font-bold text-[#65477F] uppercase tracking-wider block">
                    3. Target Budget Band:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["$2k — $5k", "$5k — $12k", "$12k+ Scale"].map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setBudgetRange(b)}
                        className={`p-2.5 rounded-xl text-center text-xs font-medium border transition-all cursor-pointer ${
                          budgetRange === b
                            ? "bg-[#65477F] text-[#F7F3EC] border-[#65477F]"
                            : "bg-[#F7F3EC] text-[#282126] border-[#D8CEC3] hover:border-[#B8A6C9]"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* 3. Direct Email Input & Instant Launch */}
              <div className="pt-4 border-t border-[#D8CEC3]/80 flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your work email (e.g. alex@company.com)"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-5 py-4 rounded-full bg-[#F7F3EC] border border-[#B8A6C9] text-sm text-[#282126] placeholder-[#65477F]/60 focus:outline-none focus:border-[#4B2E63] shadow-inner"
                />

                <button
                  type="submit"
                  className="group px-8 py-4 rounded-full bg-[#4B2E63] hover:bg-[#65477F] text-[#F7F3EC] font-semibold text-sm tracking-wide shadow-lg shadow-[#4B2E63]/25 flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 hover:scale-[1.02]"
                >
                  <span>Submit Configuration</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>

            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#282126]">
                Roadmap Request Received!
              </h3>
              <p className="text-sm text-[#65477F] max-w-md mx-auto">
                Thank you! We have compiled your scope for <strong>{selectedServices.join(", ")}</strong>. Our lead architect will reach out to <strong>{email}</strong> within 12 business hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-full bg-[#E8DED2] text-[#4B2E63] font-semibold text-xs border border-[#B8A6C9] hover:bg-[#D9CEE3] transition-colors"
              >
                Configure Another Estimate
              </button>
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
}
