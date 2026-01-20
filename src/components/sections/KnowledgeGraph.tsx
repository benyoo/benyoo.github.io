"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Cpu, Cloud, Brain, Home, Database, Network } from "lucide-react";

const skillCategories = [
    {
        title: "AI & Decision Intelligence",
        icon: Brain,
        skills: ["MLOps Adoption", "Predictive Analytics", "Workflow Intelligence", "AI Vision", "LLM Strategy"],
        color: "text-emerald-500",
        bg: "bg-emerald-500/10"
    },
    {
        title: "Cloud-Native Architecture",
        icon: Cloud,
        skills: ["Salesforce Ecosystem", "Azure Cloud", "AWS Multi-tenant", "Microservices", "API Strategy"],
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        title: "Edge & Automation",
        icon: Cpu,
        skills: ["Home Automation", "Edge Computing", "IoT Security", "Rapid Prototyping", "Hardware/SaaS Sync"],
        color: "text-purple-500",
        bg: "bg-purple-500/10"
    },
    {
        title: "Data & Modernization",
        icon: Database,
        skills: ["Legacy Refactoring", "0-1 Product Growth", "Stakeholder ROI", "Data-driven Metrics", "Scaling 10M+"],
        color: "text-amber-500",
        bg: "bg-amber-500/10"
    }
];

export default function KnowledgeGraph() {
    return (
        <section className="py-24 bg-slate-900/50 relative">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center mb-16">
                    <Badge variant="outline" className="mb-4 border-slate-700 text-slate-400">
                        Tech Proficiency
                    </Badge>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
                        Integrated <span className="text-primary italic">Expertise.</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl text-lg font-light">
                        Navigating the intersection of complex cloud architecture,
                        artificial intelligence, and real-world operational efficiency.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group"
                        >
                            <div className="mb-6 flex items-center gap-3">
                                <div className={`p-2.5 rounded-xl ${category.bg} border border-white/5`}>
                                    <category.icon className={`w-6 h-6 ${category.color}`} />
                                </div>
                                <h3 className="font-bold text-slate-200 group-hover:text-primary transition-colors uppercase text-xs tracking-widest">{category.title}</h3>
                            </div>

                            <div className="flex flex-col gap-3">
                                {category.skills.map((skill, sIdx) => (
                                    <div
                                        key={skill}
                                        className="flex items-center gap-3 p-3 rounded-xl border border-slate-800 bg-slate-950/30 hover:bg-slate-900 transition-all hover:border-slate-700 group/item"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover/item:bg-primary transition-colors" />
                                        <span className="text-sm text-slate-400 group-hover/item:text-slate-200">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 p-8 rounded-2xl border border-primary/20 bg-primary/5 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/20 rounded-full">
                            <Network className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-slate-200 underline decoration-primary underline-offset-4">Interactive System Vision</h4>
                            <p className="text-sm text-slate-500">Connecting legacy data silos to modern AI-driven cloud ecosystems.</p>
                        </div>
                    </div>
                    <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground font-bold">
                        Explore Case Studies
                    </Button>
                </div>
            </div>
        </section>
    );
}
