import { getBlogPosts, getLandingBlocks } from "../../lib/notion";
import ArticlesClient from "./ArticlesClient";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
    title: 'Blog & Artikel - Kris',
    description: 'Insight, panduan, dan tips terbaru seputar pengembangan website dan bisnis digital.',
};

export const revalidate = 60;

export default async function BlogPage() {
    const posts = await getBlogPosts();
    const blocks = await getLandingBlocks();
    const articlesBlock = blocks.find(b => b.componentName === 'Articles');
    const title = articlesBlock?.title || 'Blog & Insight';
    const subtitle = articlesBlock?.subtitle || 'Pelajari strategi terbaru untuk mengembangkan bisnis Anda di era digital.';

    return (
        <div className="min-h-screen bg-slate-50">
            <Header />
            <main className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
                        {title}
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </div>

                <ArticlesClient initialPosts={posts} />
            </main>
            <Footer />
        </div>
    );
}
