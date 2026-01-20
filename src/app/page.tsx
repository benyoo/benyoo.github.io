import Hero from "@/components/sections/Hero";
import StrategyImpact from "@/components/sections/StrategyImpact";
import GovernanceSecurity from "@/components/sections/GovernanceSecurity";
import KnowledgeGraph from "@/components/sections/KnowledgeGraph";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30">
      <ScrollArea className="h-full">
        <Hero />
        <StrategyImpact />
        <GovernanceSecurity />
        <KnowledgeGraph />

        <footer className="py-12 border-t border-slate-900 bg-slate-950/20">
          <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center md:items-start">
              <span className="font-bold text-lg tracking-tight text-white">Ben Yoo</span>
              <span className="text-sm text-slate-500 font-light">Senior Product Manager & AI Strategist</span>
            </div>

            <div className="flex gap-8 text-sm text-slate-400">
              <a href="#" className="hover:text-primary transition-colors">Resume</a>
              <a href="#" className="hover:text-primary transition-colors">Case Studies</a>
              <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>

            <div className="text-[10px] uppercase tracking-widest text-slate-600">
              © 2026 Ben Yoo. Built with Next.js 15.
            </div>
          </div>
        </footer>
      </ScrollArea>
    </main>
  );
}
