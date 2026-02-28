"use client";

import { MapPin } from "lucide-react";
import Image from "next/image";
import { agencyConfig } from "../data/agencyConfig";

export default function Profile({ blockData }) {
    const { profile } = agencyConfig;

    // Use Notion blockData for overrides if available, otherwise fallback to agencyConfig
    const title = blockData?.title || "Tentang Saya";
    const bioText = blockData?.subtitle || profile.bio;

    // Configurable pill badges using Notion checklists or fallback
    const rawBadges = blockData?.checklists || `${profile.role}, 🎓 IPB University, 📍 ${profile.location}`;
    const badges = rawBadges.split(/,|\n/).map(c => c.trim()).filter(Boolean);

    return (
        <section id="about" className="py-16 md:py-24 bg-transparent border-t border-slate-100/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center md:items-stretch gap-12 lg:gap-24">

                    {/* Left Column: Full-height portrait image */}
                    <div className="w-full md:w-5/12 lg:w-4/12 flex-shrink-0 flex justify-center md:justify-end">
                        <div className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl pb-[120%] bg-slate-200">
                            {/* Uses pb-[120%] for a tall aspect ratio (5:6) */}
                            <Image
                                src={blockData?.media || profile.photoUrl}
                                alt={profile.name}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover object-top"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Column: Text Content */}
                    <div className="w-full md:w-7/12 lg:w-8/12 flex flex-col justify-center text-center md:text-left">
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1a2f4c] mb-8 tracking-tight">
                            {title}
                        </h2>

                        <div className="prose prose-lg text-slate-600 mb-10 max-w-none leading-relaxed">
                            <p>{bioText}</p>
                        </div>

                        {/* Customizable Pill Badges */}
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                            {badges.map((badge, idx) => (
                                <div key={idx} className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-blue-200/50 text-[#1a2f4c] text-base font-medium shadow-sm">
                                    {badge}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
