import { getItemDetails, getDigitalProducts, getSystemStyles } from '../../../lib/notion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export const runtime = 'edge';

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const product = await getItemDetails(slug, process.env.NOTION_PRODUCT_DATABASE_ID);

    if (!product) return { title: 'Product Not Found' };

    return {
        title: `${product.title} - Produk Digital Kris`,
        description: product.description || `Beli produk digital: ${product.title}`,
    };
}

export const revalidate = 60;

export default async function ProductPost({ params }) {
    const { slug } = await params;
    // We need to fetch from the generic item details and also get specific fields mapped in getDigitalProducts
    // Ideally we refactor `getItemDetails` to take the mapper, but for now we look it up in the list
    const allProducts = await getDigitalProducts();
    const productMeta = allProducts.items.find(p => p.slug === slug);
    const productContent = await getItemDetails(slug, process.env.NOTION_PRODUCT_DATABASE_ID);
    const styles = await getSystemStyles();

    if (!productMeta || !productContent) {
        notFound();
    }

    // Combine both results
    const product = { ...productMeta, content: productContent.content };
    const currentPrice = product.isFreebie ? 0 : (product.discountPrice > 0 ? product.discountPrice : product.price);

    // Dynamic strings from System Styles DB
    const priceLabel = styles.product_price_label?.value || "Harga Pembelian Sekali Bayar";
    const buyBtnText = styles.product_buy_button?.value || "Beli Sekarang di Lynk.id/Sejoli";
    const freeBtnText = styles.product_free_button?.value || "Download Sekarang";
    const secureText = styles.product_secure_text?.value || "Pembayaran Diproses Secara Aman";

    return (
        <div className="min-h-screen bg-slate-50">
            <Header />
            <main className="pt-28 pb-16">
                <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/products" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-600 mb-8 transition-colors">
                        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Kembali ke Produk
                    </Link>

                    <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden mb-12">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

                            {/* Left Column: Image & Details */}
                            <div className="p-8 lg:p-12 lg:border-r border-slate-100 bg-slate-50/50 lg:col-span-5 border-b lg:border-b-0">
                                {product.cover ? (
                                    <div className="w-full bg-slate-100 rounded-2xl shadow-sm border border-slate-100 mb-8 p-4 flex items-center justify-center">
                                        <div className="relative rounded-xl overflow-hidden shadow-lg border border-black/5 w-full bg-white flex items-center justify-center">
                                            <img src={product.cover} alt={product.title} className="w-full h-auto object-contain max-h-[500px]" />
                                        </div>
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
                            <div className="p-8 lg:p-12 lg:col-span-7">
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
                                        <span className="text-sm font-medium text-slate-500 mb-1 block">{priceLabel}</span>
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
                                            {product.isFreebie ? freeBtnText : buyBtnText}
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
                                        {secureText}
                                    </div>
                                </div>

                                {/* Markdown Content Description */}
                                {product.content && (
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100">Detail Lengkap</h3>
                                        <div className="prose prose-slate max-w-none
                                            prose-headings:text-slate-900
                                            prose-a:text-blue-600
                                            prose-img:rounded-xl
                                            prose-table:w-full prose-table:text-left prose-table:border-collapse prose-table:my-8
                                            prose-th:bg-slate-100 prose-th:p-4 prose-th:font-semibold prose-th:text-slate-900 prose-th:border prose-th:border-slate-200
                                            prose-td:p-4 prose-td:border prose-td:border-slate-200 prose-td:text-slate-600">
                                            <ReactMarkdown
                                                remarkPlugins={[remarkGfm]}
                                                components={{
                                                    table: ({ node, ...props }) => (
                                                        <div className="overflow-x-auto w-full relative">
                                                            <table {...props} className="w-full min-w-[600px]" />
                                                        </div>
                                                    )
                                                }}
                                            >
                                                {product.content}
                                            </ReactMarkdown>
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
