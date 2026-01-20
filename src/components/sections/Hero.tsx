"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center py-20 overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl"
                >
                    <div className="flex flex-wrap gap-3 mb-8">
                        <Badge variant="outline" className="px-3 py-1 border-primary/30 text-primary bg-primary/5 hover:bg-primary/10 transition-colors">
                            PMP® Certified
                        </Badge>
                        <Badge variant="outline" className="px-3 py-1 border-accent/30 text-accent bg-accent/5 hover:bg-accent/10 transition-colors">
                            CISM® Certified
                        </Badge>
                        <Badge variant="outline" className="px-3 py-1 border-slate-700 text-slate-400">
                            $130M+ Portfolio Lead
                        </Badge>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-br from-white via-slate-200 to-slate-500 bg-clip-text text-transparent leading-tight">
                        Architecting High-Impact <br />
                        <span className="text-primary italic">Digital Transformation.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-400 leading-relaxed mb-10 max-w-2xl font-light">
                        Senior Product Manager specializing in <span className="text-slate-200 font-normal underline decoration-primary/50 underline-offset-4">Federal & Private Sector</span> modernization.
                        Scaling critical infrastructure with executive precision and AI-driven insights.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-14 rounded-full group">
                            View Strategy & Impact
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button size="lg" variant="outline" className="border-slate-700 hover:bg-slate-800/50 text-slate-200 px-8 h-14 rounded-full">
                            Credentials
                        </Button>
                    </div>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-slate-800/50">
                        <div className="flex items-start gap-3">
                            <div className="mt-1 p-2 rounded-lg bg-primary/10 border border-primary/20">
                                <ShieldCheck className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-200">Governance First</h3>
                                <p className="text-sm text-slate-500">Secure, compliant systems for high-stakes environments.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="mt-1 p-2 rounded-lg bg-accent/10 border border-accent/20">
                                <Zap className="w-5 h-5 text-accent" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-200">Cloud-Native Scale</h3>
                                <p className="text-sm text-slate-500">Optimizing Salesforce, Azure, and AWS for 24M+ users.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="mt-1 p-2 rounded-lg bg-slate-800 border border-slate-700">
                                <div className="w-5 h-5 flex items-center justify-center font-bold text-xs text-slate-400">AI</div>
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-200">Decision Intelligence</h3>
                                <p className="text-sm text-slate-500">Predictive analytics and MLOps at national scale.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
