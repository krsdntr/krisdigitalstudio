import { ArrowRight, ImageIcon } from "lucide-react";


export default function Projects({ blockData, projects = [] }) {
    // Use Notion block data for text if available, else fallback
    const title = blockData?.title || "Project Terbaru";
    const subtitle = blockData?.subtitle || "Lihat bagaimana kami membantu bisnis lain berkembang secara digital.";

    return (
        <section id="projects" className="py-20 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
                        <p className="text-lg text-gray-600 max-w-2xl">{subtitle}</p>
                    </div>
                    {projects.length > 0 && (
                        <div className="hidden md:block">
                            <a
                                href="/projects"
                                className="group flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                            >
                                Lihat Semua Project
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    )}
                </div>

                {projects.length === 0 ? (
                    <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-gray-300">
                        <p className="text-gray-500">Belum ada project yang dipublikasikan.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all group flex flex-col h-full">
                                <a href={`/projects/${project.slug}`} className="relative h-60 bg-slate-100 w-full overflow-hidden block group/image border-b border-gray-100 p-4">
                                    <div className="relative w-full h-full rounded-xl overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-white border border-black/5 transform transition-transform duration-500 group-hover:scale-[1.02]">
                                        {project.cover ? (
                                            <img
                                                src={project.cover}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-slate-50">
                                                <ImageIcon className="h-10 w-10 text-slate-300" />
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                                    </div>
                                    {project.industry && (
                                        <div className="absolute top-6 left-6 z-20 pointer-events-none">
                                            <span className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] uppercase font-bold text-slate-800 tracking-wider shadow-sm border border-white/50">
                                                {project.industry}
                                            </span>
                                        </div>
                                    )}
                                </a>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2 truncate" title={project.title}>
                                        <a href={`/projects/${project.slug}`} className="hover:text-blue-600 transition-colors">
                                            {project.title}
                                        </a>
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow" title={project.description}>
                                        {project.description}
                                    </p>
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 text-slate-600 text-sm font-semibold hover:text-blue-600 transition-colors mt-auto"
                                        >
                                            Kunjungi Web <ArrowRight className="h-4 w-4" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {projects.length > 0 && (
                    <div className="mt-8 text-center md:hidden">
                        <a
                            href="/projects"
                            className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-slate-800 transition-colors"
                        >
                            Lihat Semua
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
}
