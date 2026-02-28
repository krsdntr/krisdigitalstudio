"use client";

import { ArrowRight, Code2, Cpu, Dna, Check, Leaf, Pi } from "lucide-react";
import { agencyConfig } from "../data/agencyConfig";
import { useState, useEffect } from "react";

export default function Hero({ blockData }) {
    const preTitle = blockData?.name || "Jasa Pembuatan Website Katering & UMKM";
    const titleText = blockData?.title || "Bikin Bisnis Lebih Laris dengan Website Otomatis";
    const subtitle = blockData?.subtitle || "Jangan biarkan pelanggan kabur karena ribet tanya harga manual. Tampilkan menu, harga, dan portfolio Anda secara profesional 24/7.";
    const ctaText = blockData ? blockData.ctaText : "Lihat Paket Hemat";
    const ctaLink = blockData ? blockData.ctaLink : "#pricing";
    const secondaryCtaText = blockData ? blockData.secondaryCtaText : "Konsultasi Dulu";
    const secondaryCtaLink = blockData ? blockData.secondaryCtaLink : `https://wa.me/${agencyConfig.brand.whatsappNumber}`;

    // Parse checklists (comma separated or newline)
    const rawChecklists = blockData ? blockData.checklists : "Terima Beres, Tanpa Biaya Bulanan, Proses Cepat 3 Hari";
    const checklistItems = rawChecklists ? rawChecklists.split(/,|\n/).map(c => c.trim()).filter(Boolean) : [];

    // Remove the logic for splitting title, we will just use it directly
    // and let CSS handle capitalization


    // Typing effect for the code window
    const [codeText, setCodeText] = useState("");
    const fullCode = `const developer = {
  name: "Krisdiantoro",
  skills: ["React", "Next.js", "AI", "Bio"],
  focus: "Intelligent Web Apps",
  status: "Available to Build"
};

// Initializing neural engine...
await engine.start();
console.log("System Online");`;

    useEffect(() => {
        // Typing effect
        let i = 0;
        const typingInterval = setInterval(() => {
            setCodeText(fullCode.substring(0, i));
            i++;
            if (i > fullCode.length) clearInterval(typingInterval);
        }, 30);

        return () => clearInterval(typingInterval);
    }, []);

    // 3D Card Rotation state
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const rotationInterval = setInterval(() => {
            setRotation(prev => (prev + 1) % 3);
        }, 4000); // Rotate every 4 seconds
        return () => clearInterval(rotationInterval);
    }, []);

    const getCardStyle = (index) => {
        const positions = [
            // 0: Front Center
            {
                transform: 'translate3d(8rem, 2rem, 50px) rotateY(5deg) rotateZ(2deg) scale(1)',
                opacity: 1,
                zIndex: 30,
            },
            // 1: Back Right
            {
                transform: 'translate3d(16rem, 6rem, -30px) rotateY(15deg) rotateZ(8deg) scale(0.9)',
                opacity: 0.8,
                zIndex: 20,
            },
            // 2: Back Left
            {
                transform: 'translate3d(2rem, 0rem, -40px) rotateY(-15deg) rotateZ(-6deg) scale(0.9)',
                opacity: 0.8,
                zIndex: 10,
            }
        ];
        return positions[index] || positions[0];
    };

    return (
        <section className="relative overflow-hidden bg-transparent pt-16 pb-16 lg:pt-24 lg:pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Left Column: Content */}
                    <div className="lg:col-span-6 flex flex-col items-start text-left lg:-mt-8">
                        {preTitle && (
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm text-blue-700 text-sm font-semibold mb-8 hover:shadow-md transition-shadow">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                </span>
                                {preTitle}
                            </div>
                        )}

                        <h1 className="text-5xl md:text-7xl font-[800] tracking-[-0.03em] text-slate-900 mb-6 leading-[1.15]">
                            {titleText.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())}<span className="text-blue-600">.</span>
                        </h1>

                        <p className="text-lg md:text-[1.125rem] text-slate-600 mb-10 leading-[1.625] max-w-[65ch]">
                            {subtitle}
                        </p>

                        {(ctaText || secondaryCtaText) && (
                            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12">
                                {ctaText && (
                                    <a
                                        href={ctaLink}
                                        className="w-full sm:w-auto px-8 py-4 my-auto bg-blue-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:shadow-blue-600/40 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                                    >
                                        {ctaText} <ArrowRight className="h-5 w-5" />
                                    </a>
                                )}
                                {secondaryCtaText && (
                                    <a
                                        href={secondaryCtaLink}
                                        target={secondaryCtaLink.startsWith('http') ? "_blank" : "_self"}
                                        rel={secondaryCtaLink.startsWith('http') ? "noopener noreferrer" : ""}
                                        className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-lg hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-sm my-auto"
                                    >
                                        {secondaryCtaText}
                                    </a>
                                )}
                            </div>
                        )}

                        {checklistItems.length > 0 && (
                            <div className="flex flex-wrap items-center gap-3 mt-4">
                                {checklistItems.map((item, idx) => (
                                    <div key={idx} className="px-5 py-2 rounded-full border border-slate-200 bg-slate-50/50 backdrop-blur-sm text-slate-700 font-medium text-sm shadow-sm">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Right Column: Visual Composition (3D Floating Cards) */}
                    <div className="lg:col-span-6 relative w-full h-[350px] lg:h-[500px] flex items-center justify-center perspective-[1000px] mt-8 lg:mt-0">

                        {/* Floating Icons Background */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                            <Leaf className="absolute top-[20%] left-[5%] text-emerald-400 h-6 w-6 lg:h-8 lg:w-8 opacity-60 animate-bounce" style={{ animationDuration: '4s' }} />
                            <Dna className="absolute top-[5%] right-[15%] text-purple-400 h-8 w-8 lg:h-10 lg:w-10 opacity-60 animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }} />
                            <Code2 className="absolute bottom-[25%] left-[10%] lg:left-[25%] text-blue-400 h-8 w-8 lg:h-12 lg:w-12 opacity-60 animate-bounce" style={{ animationDuration: '6s', animationDelay: '2s' }} />
                            <Pi className="absolute bottom-[20%] right-[2%] text-rose-400 h-6 w-6 lg:h-8 lg:w-8 opacity-60 animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '0.5s' }} />
                            <Cpu className="absolute top-[40%] left-[5%] text-indigo-400 h-8 w-8 lg:h-10 lg:w-10 opacity-60 animate-bounce" style={{ animationDuration: '5.5s', animationDelay: '1.5s' }} />

                            {/* Decorative background glows */}
                            <div className="absolute top-1/2 left-1/4 w-32 lg:w-40 h-32 lg:h-40 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
                            <div className="absolute top-1/4 right-1/4 w-32 lg:w-40 h-32 lg:h-40 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
                        </div>

                        {/* Center 3D Space Container */}
                        <div className="relative w-full max-w-md h-full transform-style-3d scale-[0.6] sm:scale-75 lg:scale-100 origin-center" style={{ animation: 'float-container 8s ease-in-out infinite' }}>

                            {/* Card 1: Biochemistry (Index 2 initially) */}
                            <div
                                className="absolute top-0 left-0 w-48 h-64 bg-white/90 backdrop-blur-md rounded-2xl border border-slate-100 p-5 bg-gradient-to-br from-emerald-50 to-white hover:border-emerald-200 transition-all duration-1000 ease-in-out cursor-default shadow-xl"
                                style={getCardStyle((2 + rotation) % 3)}
                            >
                                <div className="flex flex-col h-full justify-between">
                                    <div className="text-emerald-500 bg-emerald-100 w-10 h-10 rounded-full flex items-center justify-center shadow-sm">
                                        <Dna className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-800 text-lg mb-1">Biochemistry</h3>
                                        <div className="w-16 h-1.5 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mb-2"></div>
                                        <p className="text-xs text-slate-500">Molecular research & data analysis</p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2: Web Dev (Index 0 initially) */}
                            <div
                                className="absolute top-0 left-0 w-56 h-72 bg-white/95 backdrop-blur-xl rounded-2xl border border-blue-50 p-6 bg-gradient-to-br from-blue-50 to-white hover:border-blue-200 transition-all duration-1000 ease-in-out cursor-default shadow-2xl"
                                style={getCardStyle((0 + rotation) % 3)}
                            >
                                <div className="flex flex-col h-full justify-between">
                                    <div className="text-blue-600 bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-sm">
                                        <Code2 className="h-6 w-6" />
                                    </div>
                                    <div className="space-y-3">
                                        <h3 className="font-bold text-slate-800 text-xl">App Dev</h3>
                                        <div className="space-y-2">
                                            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                                                <div className="w-3/4 h-full bg-blue-500"></div>
                                            </div>
                                            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                                                <div className="w-5/6 h-full bg-indigo-500"></div>
                                            </div>
                                        </div>
                                        {/* Typing animation window */}
                                        <div className="bg-slate-900 rounded-lg p-2 mt-2 h-20 overflow-hidden relative">
                                            <div className="flex gap-1 mb-1">
                                                <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                                                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                                                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                            </div>
                                            <p className="text-[9px] text-emerald-400 font-mono leading-tight whitespace-pre-wrap">
                                                {codeText}
                                                <span className="animate-pulse inline-block w-1 h-2 bg-emerald-400 ml-0.5 align-middle"></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3: AI (Index 1 initially) */}
                            <div
                                className="absolute top-0 left-0 w-52 h-64 bg-white/90 backdrop-blur-md rounded-2xl border border-slate-100 p-5 bg-gradient-to-br from-indigo-50 to-white hover:border-indigo-200 transition-all duration-1000 ease-in-out cursor-default shadow-xl"
                                style={getCardStyle((1 + rotation) % 3)}
                            >
                                <div className="flex flex-col h-full justify-between">
                                    <div className="text-indigo-600 bg-indigo-100 w-10 h-10 rounded-full flex items-center justify-center shadow-sm">
                                        <Cpu className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-800 text-lg mb-2">AI Integration</h3>
                                        <p className="text-[10px] text-slate-400 mb-3">Processing data models...</p>
                                        <div className="flex items-end gap-1 h-12">
                                            {/* Hardcoded random heights to fix hydration mismatch */}
                                            {[40, 75, 45, 90, 60, 80].map((h, i) => (
                                                <div key={i} className="w-full bg-indigo-100 rounded-t-sm h-full relative">
                                                    <div
                                                        className="absolute bottom-0 left-0 w-full bg-indigo-500 rounded-t-sm animate-pulse"
                                                        style={{
                                                            height: `${h}%`,
                                                            animationDelay: `${i * 0.2}s`,
                                                            animationDuration: '1.5s'
                                                        }}>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Global Keyframes for the inline animation styles */}
            <style jsx global>{`
                @keyframes float-container {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-15px); }
                }
                .perspective-[1000px] { perspective: 1000px; }
                .transform-style-3d { transform-style: preserve-3d; }
                .-rotate-y-[15deg] { transform: rotateY(-15deg); }
                .rotate-y-[5deg] { transform: rotateY(5deg); }
                .rotate-y-[15deg] { transform: rotateY(15deg); }
                .-translate-z-10 { transform: translateZ(-40px); }
                .translate-z-10 { transform: translateZ(40px); }
                .-translate-z-5 { transform: translateZ(-20px); }
            `}</style>
        </section>
    );
}
