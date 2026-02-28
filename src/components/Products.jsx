import { getDigitalProducts } from "../lib/notion";
import { ArrowRight, Package } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default async function Products({ blockData }) {
    const allProducts = await getDigitalProducts();
    const products = allProducts.slice(0, 3);

    const title = blockData?.title || "Produk Digital Menarik";
    const subtitle = blockData?.subtitle || "Tingkatkan produktivitas Anda dengan aset digital siap pakai.";

    return (
        <section id="products" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
                        <p className="text-lg text-gray-600 max-w-2xl">{subtitle}</p>
                    </div>
                    {products.length > 0 && (
                        <div className="hidden md:block">
                            <Link
                                href="/products"
                                className="group flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                            >
                                Lihat Semua Produk
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    )}
                </div>

                {products.length === 0 ? (
                    <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-gray-300">
                        <p className="text-gray-500">Belum ada produk digital yang dipublikasikan.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
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

                                <Link href={`/products/${product.slug}`} className="relative h-56 bg-slate-100 w-full overflow-hidden block border-b border-gray-100 p-4 group/image">
                                    <div className="relative w-full h-full rounded-xl overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-white border border-black/5 transform transition-transform duration-500 group-hover:scale-[1.02]">
                                        {product.cover ? (
                                            <Image
                                                src={product.cover}
                                                alt={product.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
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
                                </Link>

                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2" title={product.title}>
                                        <Link href={`/products/${product.slug}`} className="hover:text-blue-600 transition-colors">
                                            {product.title}
                                        </Link>
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

                {products.length > 0 && (
                    <div className="mt-8 text-center md:hidden">
                        <Link
                            href="/products"
                            className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-slate-800 transition-colors"
                        >
                            Lihat Semua
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}
