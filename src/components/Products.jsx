import { getDigitalProducts } from "../lib/notion";
import { ArrowRight, Package } from "lucide-react";
import Link from "next/link";

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
                            <div key={product.id} className="bg-slate-50 rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all group flex flex-col h-full relative cursor-pointer">

                                {product.isFreebie && (
                                    <div className="absolute top-4 right-4 z-10">
                                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                                            GRATIS
                                        </span>
                                    </div>
                                )}

                                <div className="relative h-48 bg-gray-200 w-full overflow-hidden">
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
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-2 gap-2">
                                        <h3 className="text-xl font-bold text-slate-900 line-clamp-2" title={product.title}>{product.title}</h3>
                                        <div className="text-right">
                                            {product.discountPrice > 0 ? (
                                                <div className="flex flex-col items-end">
                                                    <span className="text-sm text-gray-400 line-through">Rp{product.price.toLocaleString('id-ID')}</span>
                                                    <span className="font-bold text-blue-600 text-lg">Rp{product.discountPrice.toLocaleString('id-ID')}</span>
                                                </div>
                                            ) : product.price > 0 ? (
                                                <span className="font-bold text-slate-900 text-lg">Rp{product.price.toLocaleString('id-ID')}</span>
                                            ) : (
                                                <span className="font-bold text-green-600 text-lg">Free</span>
                                            )}
                                        </div>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-6 line-clamp-2 flex-grow">
                                        {product.description}
                                    </p>

                                    <div className="mt-auto">
                                        {product.checkoutUrl ? (
                                            <a
                                                href={product.checkoutUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full text-center block bg-slate-900 text-white hover:bg-blue-600 transition-colors py-3 rounded-lg font-semibold text-sm"
                                            >
                                                Beli Sekarang
                                            </a>
                                        ) : (
                                            <div className="w-full text-center block bg-slate-200 text-slate-500 py-3 rounded-lg font-semibold text-sm cursor-not-allowed">
                                                Link Tidak Tersedia
                                            </div>
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
