import { getItemDetails, getDigitalProducts } from '../../../lib/notion';
import ReactMarkdown from 'react-markdown';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const product = await getItemDetails(slug, process.env.NOTION_PRODUCT_DATABASE_ID);

    if (!product) return { title: 'Product Not Found' };

    return {
        title: `${product.title} - Produk Digital KrisDigital Studio`,
        description: product.description || `Beli produk digital: ${product.title}`,
    };
}

export const revalidate = 60;

export default async function ProductPost({ params }) {
    const { slug } = await params;
    // We need to fetch from the generic item details and also get specific fields mapped in getDigitalProducts
    // Ideally we refactor `getItemDetails` to take the mapper, but for now we look it up in the list
    const allProducts = await getDigitalProducts();
    const productMeta = allProducts.find(p => p.slug === slug);
    const productContent = await getItemDetails(slug, process.env.NOTION_PRODUCT_DATABASE_ID);

    if (!productMeta || !productContent) {
        notFound();
    }

    // Combine both results
    const product = { ...productMeta, content: productContent.content };
    const currentPrice = product.isFreebie ? 0 : (product.discountPrice > 0 ? product.discountPrice : product.price);

    return (
        <div className="min-h-screen bg-slate-50">
            <Header />
            <main className="pt-28 pb-16">
                <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/products" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-600 mb-8 transition-colors">
                        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Kembali ke Produk
                    </Link>

                    <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden mb-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2">

                            {/* Left Column: Image & Details */}
                            <div className="p-8 lg:p-12 lg:border-r border-slate-100 bg-slate-50/50">
                                {product.cover ? (
                                    <div className="w-full h-80 bg-white rounded-2xl shadow-sm overflow-hidden mb-8">
                                        <img src={product.cover} alt={product.title} className="w-full h-full object-contain p-4" />
                                    </div>
                                ) : (
                                    <div className="w-full h-80 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8 border border-slate-100">
                                        <svg className="w-20 h-20 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                        </svg>
                                    </div>
                                )}

                                {product.features && product.features.length > 0 && (
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-4">Yang Akan Anda Dapatkan:</h3>
                                        <ul className="space-y-3">
                                            {product.features.map((feature, i) => (
                                                <li key={i} className="flex items-start text-slate-600 text-sm">
                                                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* Right Column: Title, Price, Buy & Body */}
                            <div className="p-8 lg:p-12">
                                {product.productType && (
                                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full mb-6">
                                        {product.productType}
                                    </span>
                                )}

                                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                                    {product.title}
                                </h1>

                                <p className="text-lg text-slate-600 mb-8">
                                    {product.description}
                                </p>

                                <div className="p-6 bg-slate-50 rounded-2xl mb-10 border border-slate-100">
                                    <div className="mb-6">
                                        <span className="text-sm font-medium text-slate-500 mb-1 block">Harga Pembelian Sekali Bayar</span>
                                        <div className="flex items-end gap-3">
                                            {product.isFreebie ? (
                                                <span className="text-4xl font-bold text-green-600">Terbatas! GRATIS</span>
                                            ) : product.discountPrice > 0 ? (
                                                <>
                                                    <span className="text-4xl font-bold text-slate-900">
                                                        Rp {product.discountPrice.toLocaleString('id-ID')}
                                                    </span>
                                                    <span className="text-xl text-slate-400 line-through pb-1">
                                                        Rp {product.price.toLocaleString('id-ID')}
                                                    </span>
                                                </>
                                            ) : (
                                                <span className="text-4xl font-bold text-slate-900">
                                                    Rp {product.price ? product.price.toLocaleString('id-ID') : '0'}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {product.checkoutUrl ? (
                                        <a
                                            href={product.checkoutUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full block text-center py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                                        >
                                            {product.isFreebie ? 'Download Sekarang' : 'Beli Sekarang di Lynk.id/Sejoli'}
                                        </a>
                                    ) : (
                                        <button disabled className="w-full py-4 bg-slate-200 text-slate-500 font-bold rounded-xl cursor-not-allowed">
                                            Link Pembelian Belum Tersedia
                                        </button>
                                    )}

                                    <div className="mt-4 flex items-center justify-center text-xs text-slate-500">
                                        <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                        Pembayaran Diproses Secara Aman
                                    </div>
                                </div>

                                {/* Markdown Content Description */}
                                {product.content && (
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100">Detail Lengkap</h3>
                                        <div className="prose prose-slate max-w-none 
                      prose-headings:text-slate-900 
                      prose-a:text-blue-600 
                      prose-img:rounded-xl">
                                            <ReactMarkdown>{product.content}</ReactMarkdown>
                                        </div>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
}
