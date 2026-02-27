import { getItemDetails } from '../../../lib/notion';
import ReactMarkdown from 'react-markdown';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = await getItemDetails(slug, process.env.NOTION_BLOG_DATABASE_ID);

    if (!post) {
        return { title: 'Post Not Found' };
    }

    return {
        title: `${post.title} - KrisDigital Studio`,
        description: post.description || `Artikel tentang ${post.title}`,
    };
}

export const revalidate = 60;

export default async function BlogPost({ params }) {
    const { slug } = await params;
    const post = await getItemDetails(slug, process.env.NOTION_BLOG_DATABASE_ID);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <Header />
            <main className="pt-28 pb-16">
                <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/blog" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-600 mb-8 transition-colors">
                        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Kembali ke Blog
                    </Link>

                    <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden mb-12">
                        {post.cover && (
                            <div className="w-full h-64 md:h-96 bg-slate-100 border-b border-slate-100">
                                <img src={post.cover} alt={post.title} className="w-full h-full object-cover" />
                            </div>
                        )}

                        <div className="p-8 md:p-12">
                            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-6">
                                <div className="flex items-center font-medium">
                                    <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    {post.date ? new Date(post.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Tidak ada tanggal'}
                                </div>
                            </div>

                            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                                {post.title}
                            </h1>

                            <div className="prose prose-slate prose-lg max-w-none 
                prose-headings:text-slate-900 prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-2 prose-h2:border-b prose-h2:border-slate-100
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                prose-img:rounded-2xl prose-img:shadow-sm prose-img:my-10
                prose-strong:text-slate-900 prose-strong:font-semibold
                prose-ul:text-slate-600 prose-ul:my-6 prose-li:my-2
                prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:text-slate-700 prose-blockquote:font-medium prose-blockquote:rounded-r-lg prose-blockquote:my-8
                prose-code:text-blue-600 prose-code:bg-blue-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none
                prose-pre:bg-slate-900 prose-pre:text-slate-50 prose-pre:rounded-xl prose-pre:p-6 prose-pre:shadow-lg prose-pre:overflow-x-auto">
                                <ReactMarkdown>{post.content}</ReactMarkdown>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
}
