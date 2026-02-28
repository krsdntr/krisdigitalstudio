"use client";

import { useState, useMemo } from "react";
import { ArrowRight, ImageIcon, Search, Filter } from "lucide-react";
import Link from "next/link";

export default function ProjectsClient({ initialProjects }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedIndustry, setSelectedIndustry] = useState("All");
    const [sortBy, setSortBy] = useState("newest");

    const [items, setItems] = useState(initialProjects.items || []);
    const [nextCursor, setNextCursor] = useState(initialProjects.nextCursor);
    const [hasMore, setHasMore] = useState(initialProjects.hasMore);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    // Extract unique industries for filter options
    const industries = useMemo(() => {
        const ind = new Set(items.map(p => p.industry).filter(Boolean));
        return ["All", ...Array.from(ind)];
    }, [items]);

    const filteredAndSorted = useMemo(() => {
        let result = [...items];

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
    }, [items, searchQuery, selectedIndustry, sortBy]);

    const handleLoadMore = async () => {
        if (!hasMore || isLoadingMore) return;
        setIsLoadingMore(true);
        try {
            const { fetchMoreProjects } = await import('../actions/notion');
            const result = await fetchMoreProjects(nextCursor);
            setItems(prev => [...prev, ...result.items]);
            setNextCursor(result.nextCursor);
            setHasMore(result.hasMore);
        } catch (error) {
            console.error("Failed to load more projects:", error);
        } finally {
            setIsLoadingMore(false);
        }
    };

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
                            <Link href={`/projects/${project.slug}`} className="relative h-60 bg-slate-100 w-full overflow-hidden block group/image border-b border-gray-100 p-4">
                                <div className="relative w-full h-full rounded-xl overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-white border border-black/5 transform transition-transform duration-500 group-hover:scale-[1.02]">
                                    {project.cover ? (
                                        <img
                                            src={project.cover}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-slate-50">
                                            <ImageIcon className="h-10 w-10 text-slate-300" />
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                                </div>
                                {project.industry && (
                                    <div className="absolute top-6 left-6 z-20 pointer-events-none">
                                        <span className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] uppercase font-bold text-slate-800 tracking-wider shadow-sm border border-white/50">
                                            {project.industry}
                                        </span>
                                    </div>
                                )}
                            </Link>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">
                                    <Link href={`/projects/${project.slug}`} className="hover:text-blue-600 transition-colors">
                                        {project.title}
                                    </Link>
                                </h3>
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

            {/* Load More Button */}
            {hasMore && filteredAndSorted.length > 0 && searchQuery === "" && selectedIndustry === "All" && (
                <div className="mt-12 text-center">
                    <button
                        onClick={handleLoadMore}
                        disabled={isLoadingMore}
                        className="px-6 py-3 bg-white text-slate-700 border border-slate-200 hover:border-blue-500 hover:text-blue-600 rounded-xl font-semibold shadow-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2"
                    >
                        {isLoadingMore ? (
                            <>
                                <div className="w-5 h-5 border-2 border-slate-300 border-t-blue-600 rounded-full animate-spin"></div>
                                Memuat...
                            </>
                        ) : (
                            'Muat Lebih Banyak'
                        )}
                    </button>
                </div>
            )}
        </div>
    );
}
