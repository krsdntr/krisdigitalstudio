
import { ArrowRight, ExternalLink, Image as ImageIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { agencyConfig } from "../data/agencyConfig";

export default function Portfolio() {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = direction === "left" ? -320 : 320;
            current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    // Function to generate a deterministic gradient based on the project title
    const getGradient = (str) => {
        const gradients = [
            "from-blue-400 to-indigo-600",
            "from-purple-400 to-pink-600",
            "from-teal-400 to-emerald-600",
            "from-orange-400 to-red-600",
            "from-cyan-400 to-blue-600"
        ];
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        const index = Math.abs(hash) % gradients.length;
        return gradients[index];
    };

    return (
        <section id="portfolio" className="py-20 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Portfolio Terbaru</h2>
                        <p className="text-lg text-gray-600 max-w-2xl">
                            Lihat bagaimana kami membantu bisnis lain berkembang secara digital.
                        </p>
                    </div>

                    <div className="hidden md:flex gap-2">
                        <button
                            onClick={() => scroll("left")}
                            className="p-3 rounded-full bg-white border border-gray-200 hover:bg-gray-50 focus:outline-none shadow-sm transition-all hover:scale-105 active:scale-95"
                            aria-label="Previous project"
                        >
                            <ChevronLeft className="h-6 w-6 text-slate-700" />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="p-3 rounded-full bg-slate-900 text-white hover:bg-slate-800 focus:outline-none shadow-lg transition-all hover:scale-105 active:scale-95"
                            aria-label="Next project"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </button>
                    </div>
                </div>

                {/* Carousel Container */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {agencyConfig.portfolio.map((project, index) => (
                        <div
                            key={index}
                            className="w-[85vw] md:w-[400px] bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 snap-center flex-shrink-0 transition-transform hover:-translate-y-1 hover:shadow-xl group"
                        >
                            {/* Image Area - Fixed Height */}
                            <div className="relative h-64 overflow-hidden bg-gray-100 w-full">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className={`w-full h-full bg-gradient-to-br ${getGradient(project.title)} flex items-center justify-center`}>
                                        <div className="text-white text-center p-4">
                                            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full inline-block mb-3">
                                                <ImageIcon className="h-8 w-8 text-white" />
                                            </div>
                                            <p className="text-white/90 text-sm font-medium">Preview Image</p>
                                        </div>
                                    </div>
                                )}

                                {/* Category Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-700 shadow-sm">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-slate-900 mb-2 truncate" title={project.title}>{project.title}</h3>
                                <p className="text-gray-600 text-sm mb-6 line-clamp-2" title={project.description}>
                                    {project.description}
                                </p>

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors text-sm"
                                >
                                    Lihat Live Demo <ArrowRight className="h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    ))}

                    {/* "Add Your Project" Card Placeholder to encourage contact */}
                    <div className="min-w-[300px] md:min-w-[400px] bg-slate-50 rounded-2xl border-2 border-dashed border-gray-300 snap-center flex-shrink-0 flex flex-col items-center justify-center p-8 text-center hover:border-blue-300 hover:bg-blue-50 transition-colors group cursor-pointer">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                            <ArrowRight className="h-8 w-8 text-gray-400 group-hover:text-blue-500" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-700 mb-2">Giliran Bisnis Anda</h3>
                        <p className="text-sm text-gray-500 mb-6 max-w-xs">
                            Siap untuk tampil online dan meningkatkan penjualan?
                        </p>
                        <a
                            href={`https://wa.me/${agencyConfig.brand.whatsappNumber}`}
                            className="bg-slate-900 text-white px-6 py-2 rounded-full text-sm font-bold shadow-md hover:bg-blue-600 transition-colors"
                        >
                            Mulai Project
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
