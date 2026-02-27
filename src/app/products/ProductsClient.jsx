"use client";

import { useState, useMemo } from "react";
import { ArrowRight, Package, Search, Filter } from "lucide-react";

export default function ProductsClient({ initialProducts }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedType, setSelectedType] = useState("All");
    const [sortBy, setSortBy] = useState("newest");

    // Extract unique product types for filter options
    const productTypes = useMemo(() => {
        const types = new Set(initialProducts.map(p => p.productType).filter(Boolean));
        return ["All", ...Array.from(types)];
    }, [initialProducts]);

    const filteredAndSorted = useMemo(() => {
        let result = [...initialProducts];

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
    }, [initialProducts, searchQuery, selectedType, sortBy]);

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
                            <div className="absolute top-4 right-4 z-10 flex gap-2">
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

                            <div className="relative h-48 bg-slate-100 w-full overflow-hidden">
                                {product.cover ? (
                                    <img
                                        src={product.cover}
                                        alt={product.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-slate-200">
                                        <Package className="h-10 w-10 text-slate-400" />
                                    </div>
                                )}
                                {product.productType && (
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-white/90 text-blue-600 px-3 py-1 rounded-full text-xs font-bold shadow-sm backdrop-blur-sm">
                                            {product.productType}
                                        </span>
                                    </div>
                                )}
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2" title={product.title}>{product.title}</h3>

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
        </div>
    );
}
