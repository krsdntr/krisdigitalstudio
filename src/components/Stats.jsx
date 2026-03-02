import { PenTool, Briefcase, Box } from 'lucide-react';

export default function Stats({ blockData, articlesCount = 0, projectsCount = 0, productsCount = 0 }) {
    // We can use blockData to override titles if provided from Notion
    const sectionTitle = blockData?.title || "Jejak Digital Kris";
    const sectionSubtitle = blockData?.subtitle || "Angka nyata dari karya dan eksplorasi teknologi yang terus berkembang setiap harinya.";

    const stats = [
        {
            label: "Articles Published",
            value: articlesCount,
        },
        {
            label: "Projects Completed",
            value: projectsCount,
        },
        {
            label: "Digital Products",
            value: productsCount,
        }
    ];

    return (
        <section className="py-12 bg-transparent border-y border-slate-100/50 backdrop-blur-sm relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header (Optional, only show if Notion provides them explicitly to save space) */}
                {(blockData?.title || blockData?.subtitle) && (
                    <div className="text-center max-w-2xl mx-auto mb-10">
                        {blockData?.title && (
                            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
                                {blockData.title}
                            </h2>
                        )}
                        {blockData?.subtitle && (
                            <p className="text-base text-slate-600">
                                {blockData.subtitle}
                            </p>
                        )}
                    </div>
                )}

                {/* Minimalist Inline Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y-2 md:divide-y-0 md:divide-x-2 divide-slate-100">
                    {stats.map((stat, idx) => {
                        return (
                            <div key={idx} className="flex flex-col items-center justify-center p-6 text-center">
                                <div className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm md:text-base font-medium text-slate-500">
                                    {stat.label}
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
