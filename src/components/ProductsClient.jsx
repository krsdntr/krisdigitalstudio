"use client";

import { useState, useMemo } from "react";
import { ArrowRight, Package, Search, Filter } from "lucide-react";


export default function ProductsClient({ initialProducts }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedType, setSelectedType] = useState("All");
    const [sortBy, setSortBy] = useState("newest");

    const [items, setItems] = useState(initialProducts.items || []);
    const [nextCursor, setNextCursor] = useState(initialProducts.nextCursor);
    const [hasMore, setHasMore] = useState(initialProducts.hasMore);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    // Extract unique product types for filter options
    const productTypes = useMemo(() => {
        const types = new Set(items.map(p => p.productType).filter(Boolean));
        return ["All", ...Array.from(types)];
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

        // Type Filter
        if (selectedType !== "All") {
            result = result.filter(p => p.productType === selectedType);
        }

        // Sort
        result.sort((a, b) => {
            const priceA = a.discountPrice > 0 ? a.discountPrice : a.price;
            const priceB = b.discountPrice > 0 ? b.discountPrice : b.price;

            if (sortBy === "price-low") {
                return priceA - priceB;
            } else if (sortBy === "price-high") {
                return priceB - priceA;
            } else if (sortBy === "a-z") {
                return a.title.localeCompare(b.title);
            }
            return 0; // Default (newest/Notion order)
        });

        return result;
    }, [items, searchQuery, selectedType, sortBy]);

    const handleLoadMore = async () => {
        if (!hasMore || isLoadingMore) return;
        setIsLoadingMore(true);
        try {
            const response = await fetch(`/api/products?cursor=${nextCursor}`);
            const result = await response.json();
            setItems(prev => [...prev, ...result.items]);
            setNextCursor(result.nextCursor);
            setHasMore(result.hasMore);
        } catch (error) {
            console.error("Failed to load more products:", error);
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
                        placeholder="Cari produk template, tool..."
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
                            value={selectedType}
                            onChange={(e) => setSelectedType(e.target.value)}
                        >
                            {productTypes.map(type => (
                                <option key={type} value={type}>{type === "All" ? "Semua Tipe" : type}</option>
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
                        <option value="price-low">Harga Tertrendah</option>
                        <option value="price-high">Harga Tertinggi</option>
                        <option value="a-z">A - Z</option>
                    </select>
                </div>
            </div>

            {/* Grid */}
            {filteredAndSorted.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
                    <p className="text-gray-500 text-lg">Tidak ada produk yang ditemukan.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredAndSorted.map((product) => (
                        <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all group flex flex-col h-full relative">

                            {/* Badges */}
                            <div className="absolute top-4 right-4 z-20 flex gap-2">
                                {product.isFreebie && (
                                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                                        GRATIS
                                    </span>
                                )}
                                {product.discountPrice > 0 && !product.isFreebie && (
                                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                                        SALE
                                    </span>
                                )}
                            </div>

                            <a href={`/products/${product.slug}`} className="relative h-56 bg-slate-100 w-full overflow-hidden block border-b border-gray-100 p-4 group/image">
                                <div className="relative w-full h-full rounded-xl overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-white border border-black/5 transform transition-transform duration-500 group-hover:scale-[1.02]">
                                    {product.cover ? (
                                        <img
                                            src={product.cover}
                                            alt={product.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-slate-50">
                                            <Package className="h-10 w-10 text-slate-300" />
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                                </div>
                                {product.productType && (
                                    <div className="absolute top-6 left-6 z-20 pointer-events-none">
                                        <span className="bg-white/95 text-blue-600 px-3 py-1.5 rounded-full text-[10px] uppercase font-bold tracking-wider shadow-sm backdrop-blur-md border border-white/50">
                                            {product.productType}
                                        </span>
                                    </div>
                                )}
                            </a>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2" title={product.title}>
                                    <a href={`/products/${product.slug}`} className="hover:text-blue-600 transition-colors">
                                        {product.title}
                                    </a>
                                </h3>

                                <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">
                                    {product.description}
                                </p>

                                <div className="mt-auto flex items-end justify-between pt-4 border-t border-slate-100">
                                    <div>
                                        {product.isFreebie ? (
                                            <span className="font-bold text-green-600 text-xl">Rp 0</span>
                                        ) : product.discountPrice > 0 ? (
                                            <div className="flex flex-col">
                                                <span className="text-sm text-gray-400 line-through">Rp{product.price.toLocaleString('id-ID')}</span>
                                                <span className="font-bold text-slate-900 text-xl">Rp{product.discountPrice.toLocaleString('id-ID')}</span>
                                            </div>
                                        ) : (
                                            <span className="font-bold text-slate-900 text-xl">Rp{product.price.toLocaleString('id-ID')}</span>
                                        )}
                                    </div>
                                    {product.checkoutUrl ? (
                                        <a
                                            href={product.checkoutUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                                        >
                                            Beli
                                        </a>
                                    ) : (
                                        <a
                                            href={`/products/${product.slug}`}
                                            className="bg-slate-50 text-slate-600 hover:bg-slate-200 px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                                        >
                                            Detail
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Load More Button */}
            {hasMore && filteredAndSorted.length > 0 && searchQuery === "" && selectedType === "All" && (
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
