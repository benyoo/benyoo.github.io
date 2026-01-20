"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Target, Globe } from "lucide-react";

const impactData = [
    {
        title: "U.S. Passport Renewal Platform",
        role: "Lead Product Manager",
        description: "Scaled digital service to 70k applications/week for 24M+ customers.",
        metrics: [
            { label: "Deployment Cycle", value: "-90%", icon: TrendingUp },
            { label: "User Adoption", value: "+50%", icon: Users },
            { label: "Fulfillment Time", value: "-20%", icon: Target },
        ],
        tags: ["Salesforce", "Cloud Modernization", "Scale"],
        category: "Federal"
    },
    {
        title: "DOD STIG Vulnerability Platform",
        role: "Consultant, Product Management",
        description: "0 to 1 rollout of automated vulnerability remediation for Department of Defense.",
        metrics: [
            { label: "Mitigation Time", value: "-40%", icon: TrendingUp },
            { label: "Automation Velocity", value: "+30%", icon: Zap },
        ],
        tags: ["Cybersecurity", "STIG", "Automation"],
        category: "Defense"
    },
    {
        title: "Global Embassies Modernization",
        role: "Senior Product Manager",
        description: "Standardized communication systems across 200+ global missions.",
        metrics: [
            { label: "Global Missions", value: "200+", icon: Globe },
            { label: "User Adoption", value: "70%", icon: Users },
        ],
        tags: ["International", "Digital Transformation", "Cloud"],
        category: "Federal"
    }
];

// Re-importing Zap since it was missing in the previous block scope
import { Zap } from "lucide-react";

export default function StrategyImpact() {
    return (
        <section className="py-24 bg-slate-900/30">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center mb-16">
                    <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
                        Strategy & ROI
                    </Badge>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        Driving Exponential <span className="text-primary italic">Value.</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl text-lg font-light">
                        High-performance product leadership across regulated environments.
                        Delivering modernized solutions that balance engineering feasability with executive goals.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {impactData.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full bg-slate-900 border-slate-800 hover:border-primary/50 transition-all duration-300 group overflow-hidden">
                                <CardHeader className="pb-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-xs font-bold uppercase tracking-widest text-primary/70">{item.category}</span>
                                        <div className="flex gap-1">
                                            {item.tags.slice(0, 2).map(tag => (
                                                <Badge key={tag} variant="secondary" className="bg-slate-800 text-[10px] text-slate-400 font-normal">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{item.title}</CardTitle>
                                    <CardDescription className="text-slate-500 font-medium">{item.role}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                                        {item.description}
                                    </p>

                                    <div className="grid grid-cols-2 gap-4">
                                        {item.metrics.map((metric) => (
                                            <div key={metric.label} className="p-3 rounded-lg bg-slate-950/50 border border-slate-800">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <metric.icon className="w-3 h-3 text-primary" />
                                                    <span className="text-[10px] uppercase font-bold text-slate-600 tracking-wider font-sans">{metric.label}</span>
                                                </div>
                                                <div className="text-lg font-bold text-slate-200">{metric.value}</div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
