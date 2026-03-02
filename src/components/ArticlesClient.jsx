"use client";

import { useState, useMemo } from "react";
import { ArrowRight, FileText, Search, Filter } from "lucide-react";


export default function ArticlesClient({ initialPosts }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [sortBy, setSortBy] = useState("newest");

    const [items, setItems] = useState(initialPosts.items || []);
    const [nextCursor, setNextCursor] = useState(initialPosts.nextCursor);
    const [hasMore, setHasMore] = useState(initialPosts.hasMore);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    // Extract unique categories for filter options
    const categories = useMemo(() => {
        const cat = new Set(items.map(p => p.category).filter(Boolean));
        return ["All", ...Array.from(cat)];
    }, [items]);

    const filteredAndSorted = useMemo(() => {
        let result = [...items];

        // Search Filter
        if (searchQuery) {
            const q = searchQuery.toLowerCase();
            result = result.filter(p =>
                p.title.toLowerCase().includes(q) ||
                (p.excerpt && p.excerpt.toLowerCase().includes(q))
            );
        }

        // Category Filter
        if (selectedCategory !== "All") {
            result = result.filter(p => p.category === selectedCategory);
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
    }, [items, searchQuery, selectedCategory, sortBy]);

    const handleLoadMore = async () => {
        if (!hasMore || isLoadingMore) return;
        setIsLoadingMore(true);
        try {
            const response = await fetch(`/api/blog?cursor=${nextCursor}`);
            const result = await response.json();
            setItems(prev => [...prev, ...result.items]);
            setNextCursor(result.nextCursor);
            setHasMore(result.hasMore);
        } catch (error) {
            console.error("Failed to load more posts:", error);
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
                        placeholder="Cari artikel..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                    {/* Category Filter */}
                    <div className="flex items-center gap-2">
                        <Filter className="text-gray-400 w-4 h-4 hidden md:block" />
                        <select
                            className="w-full md:w-auto px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            {categories.map(cat => (
                                <option key={cat} value={cat}>{cat === "All" ? "Semua Kategori" : cat}</option>
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
                    <p className="text-gray-500 text-lg">Tidak ada artikel yang ditemukan.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredAndSorted.map((post) => (
                        <div key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all group flex flex-col h-full cursor-pointer">

                            <a href={`/blog/${post.slug}`} className="relative h-56 bg-slate-100 w-full overflow-hidden block group/image border-b border-gray-100 p-4">
                                <div className="relative w-full h-full rounded-xl overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-white border border-black/5 transform transition-transform duration-500 group-hover:scale-[1.02]">
                                    {post.cover ? (
                                        <img
                                            src={post.cover}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-slate-50">
                                            <FileText className="h-10 w-10 text-slate-300" />
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                                </div>
                                {post.category && (
                                    <div className="absolute top-6 left-6 z-20 pointer-events-none">
                                        <span className="bg-slate-900/80 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-[10px] uppercase font-bold tracking-wider shadow-sm border border-white/10">
                                            {post.category}
                                        </span>
                                    </div>
                                )}
                            </a>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center text-xs text-gray-500 mb-3 font-medium">
                                    <span>{post.date ? new Date(post.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }) : ''}</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors" title={post.title}>
                                    <a href={`/blog/${post.slug}`}>
                                        {post.title}
                                    </a>
                                </h3>
                                <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">
                                    {post.excerpt}
                                </p>

                                <div className="mt-auto pt-4 border-t border-gray-100">
                                    <a
                                        href={`/blog/${post.slug}`}
                                        className="inline-flex items-center gap-1 text-blue-600 text-sm font-semibold hover:text-blue-700 transition-colors"
                                    >
                                        Baca Selengkapnya <ArrowRight className="h-4 w-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Load More Button */}
            {hasMore && filteredAndSorted.length > 0 && searchQuery === "" && selectedCategory === "All" && (
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
