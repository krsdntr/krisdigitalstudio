"use client";

import { useState, useMemo } from "react";
import { ArrowRight, ImageIcon, Search, Filter } from "lucide-react";

export default function ProjectsClient({ initialProjects }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedIndustry, setSelectedIndustry] = useState("All");
    const [sortBy, setSortBy] = useState("newest");

    // Extract unique industries for filter options
    const industries = useMemo(() => {
        const ind = new Set(initialProjects.map(p => p.industry).filter(Boolean));
        return ["All", ...Array.from(ind)];
    }, [initialProjects]);

    const filteredAndSorted = useMemo(() => {
        let result = [...initialProjects];

        // Search Filter
        if (searchQuery) {
            const q = searchQuery.toLowerCase();
            result = result.filter(p =>
                p.title.toLowerCase().includes(q) ||
                (p.description && p.description.toLowerCase().includes(q))
            );
        }

        // Industry Filter
        if (selectedIndustry !== "All") {
            result = result.filter(p => p.industry === selectedIndustry);
        }

        // Sort
        result.sort((a, b) => {
            if (sortBy === "newest") {
                return new Date(b.date || 0) - new Date(a.date || 0);
            } else if (sortBy === "oldest") {
                return new Date(a.date || 0) - new Date(b.date || 0);
            } else if (sortBy === "a-z") {
                return a.title.localeCompare(b.title);
            }
            return 0;
        });

        return result;
    }, [initialProjects, searchQuery, selectedIndustry, sortBy]);

    return (
        <div>
            {/* Filters & Controls */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">

                {/* Search */}
                <div className="relative w-full md:w-1/3">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Cari project..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                    {/* Industry Filter */}
                    <div className="flex items-center gap-2">
                        <Filter className="text-gray-400 w-4 h-4 hidden md:block" />
                        <select
                            className="w-full md:w-auto px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                            value={selectedIndustry}
                            onChange={(e) => setSelectedIndustry(e.target.value)}
                        >
                            {industries.map(ind => (
                                <option key={ind} value={ind}>{ind === "All" ? "Semua Kategori" : ind}</option>
                            ))}
                        </select>
                    </div>

                    {/* Sort */}
                    <select
                        className="w-full md:w-auto px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="newest">Terbaru</option>
                        <option value="oldest">Terlama</option>
                        <option value="a-z">A - Z</option>
                    </select>
                </div>
            </div>

            {/* Grid */}
            {filteredAndSorted.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
                    <p className="text-gray-500 text-lg">Tidak ada project yang ditemukan.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredAndSorted.map((project) => (
                        <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all group flex flex-col h-full">
                            <div className="relative h-56 bg-gray-100 w-full overflow-hidden">
                                {project.cover ? (
                                    <img
                                        src={project.cover}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-slate-200">
                                        <ImageIcon className="h-10 w-10 text-slate-400" />
                                    </div>
                                )}
                                {project.industry && (
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-700 shadow-sm">
                                            {project.industry}
                                        </span>
                                    </div>
                                )}
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                                {project.techStack && project.techStack.length > 0 && (
                                    <div className="flex flex-wrap gap-1 mb-3">
                                        {project.techStack.map(tech => (
                                            <span key={tech} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-sm font-semibold">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                )}
                                <p className="text-gray-600 text-sm mb-6 flex-grow">
                                    {project.description}
                                </p>
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-slate-600 text-sm font-semibold hover:text-blue-600 transition-colors mt-auto"
                                    >
                                        Kunjungi Web <ArrowRight className="h-4 w-4" />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
