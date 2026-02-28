import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from 'react-markdown';

export default function TextMedia({ blockData }) {
    if (!blockData) return null;

    const title = blockData.title || "Section Title";
    const content = blockData.subtitle || "Deskripsi singkat tentang bagian ini.";
    const imageUrl = blockData.media || "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop";
    const ctaText = blockData.ctaText;
    const ctaLink = blockData.ctaLink || "#";

    // Alternate layout based on orderId to make it dynamic (even = image right, odd = image left)
    const isImageRight = blockData.orderId % 2 === 0;

    return (
        <section className="py-20 bg-transparent relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20 ${!isImageRight ? 'lg:flex-row-reverse' : ''}`}>

                    {/* Text Column */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                            {title}
                        </h2>

                        <div className="prose prose-lg text-gray-600 mb-8 max-w-none">
                            <ReactMarkdown>{content}</ReactMarkdown>
                        </div>

                        {ctaText && (
                            <Link
                                href={ctaLink}
                                className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-3.5 rounded-full font-bold hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                            >
                                {ctaText}
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        )}
                    </div>

                    {/* Image Column */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
                            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10 duration-500 rounded-2xl"></div>
                            <Image
                                src={imageUrl}
                                alt={title}
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
