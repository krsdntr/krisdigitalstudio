import { getDigitalProducts, getLandingBlocks } from '../../lib/notion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductsClient from './ProductsClient';

export const metadata = {
    title: 'Produk Digital - Kris',
    description: 'Katalog template, script, dan produk digital untuk produktivitas Anda.',
};

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export default async function ProductsPage() {
    const products = await getDigitalProducts();
    const blocks = await getLandingBlocks();
    const productsBlock = blocks.find(b => b.componentName === 'Products');
    const title = productsBlock?.title || 'Produk Digital';
    const subtitle = productsBlock?.subtitle || 'Kumpulan aset, template, dan solusi digital siap pakai untuk mempercepat proyek Anda.';

    return (
        <div className="min-h-screen bg-slate-50">
            <Header />
            <main className="pt-28 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{title}</h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </div>

                <ProductsClient initialProducts={products} />
            </main>
            <Footer />
        </div>
    );
}
