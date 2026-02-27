import { getBlogPosts } from "../lib/notion";
import { ArrowRight, FileText } from "lucide-react";
import Link from "next/link";

export default async function Articles({ blockData }) {
    const allPosts = await getBlogPosts();
    const posts = allPosts.slice(0, 3);

    const title = blockData?.title || "Artikel & Wawasan";
    const subtitle = blockData?.subtitle || "Temukan tips, trik, dan studi kasus terbaru seputar bisnis digital kami.";

    return (
        <section id="articles" className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
                        <p className="text-lg text-gray-600 max-w-2xl">{subtitle}</p>
                    </div>
                    {posts.length > 0 && (
                        <div className="hidden md:block">
                            <Link
                                href="/blog"
                                className="group flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                            >
                                Lihat Semua Artikel
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    )}
                </div>

                {posts.length === 0 ? (
                    <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-gray-300">
                        <p className="text-gray-500">Belum ada artikel yang dipublikasikan.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <div key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all group flex flex-col h-full cursor-pointer">

                                <div className="relative h-48 bg-gray-100 w-full overflow-hidden">
                                    {post.category && (
                                        <div className="absolute top-4 left-4 z-10">
                                            <span className="bg-slate-900/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                                                {post.category}
                                            </span>
                                        </div>
                                    )}

                                    {post.cover ? (
                                        <img
                                            src={post.cover}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-slate-200">
                                            <FileText className="h-10 w-10 text-slate-400" />
                                        </div>
                                    )}
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center text-xs text-gray-500 mb-3 font-medium">
                                        <span>{post.date ? new Date(post.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }) : ''}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors" title={post.title}>
                                        <Link href={`/blog/${post.slug}`}>
                                            {post.title}
                                        </Link>
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">
                                        {post.excerpt}
                                    </p>

                                    <div className="mt-auto pt-4 border-t border-gray-100">
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="inline-flex items-center gap-1 text-blue-600 text-sm font-semibold hover:text-blue-700 transition-colors"
                                        >
                                            Baca Selengkapnya <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {posts.length > 0 && (
                    <div className="mt-8 text-center md:hidden">
                        <Link
                            href="/blog"
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
