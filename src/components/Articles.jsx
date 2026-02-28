import { getBlogPosts } from "../lib/notion";
import { ArrowRight, FileText } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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

                                <Link href={`/blog/${post.slug}`} className="relative h-56 bg-slate-100 w-full overflow-hidden block group/image border-b border-gray-100 p-4">
                                    <div className="relative w-full h-full rounded-xl overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-white border border-black/5 transform transition-transform duration-500 group-hover:scale-[1.02]">
                                        {post.cover ? (
                                            <Image
                                                src={post.cover}
                                                alt={post.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-slate-50">
                                                <FileText className="h-10 w-10 text-slate-300" />
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                                    </div>
                                    {post.category && (
                                        <div className="absolute top-6 left-6 z-20 pointer-events-none">
                                            <span className="bg-slate-900/80 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-[10px] uppercase font-bold tracking-wider shadow-sm border border-white/10">
                                                {post.category}
                                            </span>
                                        </div>
                                    )}
                                </Link>

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
