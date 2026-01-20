"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, FileCheck, Award } from "lucide-react";

export default function GovernanceSecurity() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background patterns */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            Compliance & Security
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                            Uncompromising <span className="text-primary italic">Governance.</span>
                        </h2>
                        <p className="text-slate-400 text-lg font-light leading-relaxed mb-8">
                            In highly regulated environments, speed without security is a liability.
                            My approach integrates <span className="text-slate-200">Governance, Risk, and Compliance (GRC)</span> directly into the product lifecycle.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4 p-4 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900 transition-colors">
                                <div className="p-2 rounded-lg bg-emerald-500/10 h-max">
                                    <Award className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-200 uppercase text-sm tracking-wide mb-1">CISM® Certified</h3>
                                    <p className="text-sm text-slate-500 italic mb-2">ISACA | Cert No: 252776744</p>
                                    <p className="text-sm text-slate-400">Expert-level mastery of information security management, risk assessment, and incident response.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-4 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900 transition-colors">
                                <div className="p-2 rounded-lg bg-emerald-500/10 h-max">
                                    <FileCheck className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-200 uppercase text-sm tracking-wide mb-1">PMP® Certified</h3>
                                    <p className="text-sm text-slate-500 italic mb-2">Project Management Institute | Cert No: 3130356</p>
                                    <p className="text-sm text-slate-400">Global gold standard for leadership in complex project environments, resource management, and stakeholder alignment.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-square relative flex items-center justify-center">
                            {/* Abstract Security Graphic */}
                            <div className="absolute inset-0 rounded-full border border-primary/20 animate-pulse" />
                            <div className="absolute inset-8 rounded-full border border-primary/10 animate-[pulse_4s_infinite]" />
                            <div className="absolute inset-20 rounded-full border border-slate-800" />

                            <div className="relative p-12 bg-slate-950 rounded-3xl border border-slate-800 shadow-2xl flex flex-col items-center text-center max-w-sm">
                                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                                    <Lock className="w-10 h-10 text-primary" />
                                </div>
                                <h4 className="text-xl font-bold text-slate-200 mb-2 underline decoration-primary underline-offset-8">Secure by Design</h4>
                                <p className="text-slate-500 text-sm italic">"Modernizing $100M+ Federal platforms requires a security-first mindset that survives the highest levels of scrutiny."</p>

                                <div className="mt-8 pt-8 border-t border-slate-800 w-full grid grid-cols-2 gap-4">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-primary">0</div>
                                        <div className="text-[10px] uppercase tracking-widest text-slate-500">Breach Record</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-primary">100%</div>
                                        <div className="text-[10px] uppercase tracking-widest text-slate-500">STIG Compliance</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
