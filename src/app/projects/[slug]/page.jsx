import { getItemDetails, getProjects } from '../../../lib/notion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export const runtime = 'edge';

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const project = await getItemDetails(slug, process.env.NOTION_PROJECT_DATABASE_ID);

    if (!project) return { title: 'Project Not Found' };

    return {
        title: `${project.title} - Kris Project`,
        description: project.description || `Detail project: ${project.title}`,
    };
}

export const dynamic = 'force-dynamic';

export default async function ProjectPost({ params }) {
    const { slug } = await params;

    // Fetch generic markup item + map metadata like we do for blog/products
    const allProjects = await getProjects();
    const projectMeta = allProjects.items.find(p => p.slug === slug);
    const projectContent = await getItemDetails(slug, process.env.NOTION_PROJECT_DATABASE_ID);

    if (!projectMeta || !projectContent) {
        notFound();
    }

    const project = { ...projectMeta, content: projectContent.content };

    return (
        <div className="min-h-screen bg-slate-50">
            <Header />
            <main className="pt-28 pb-16">
                <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/projects" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-600 mb-8 transition-colors">
                        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Kembali ke Projects
                    </Link>

                    <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden mb-12">
                        {project.cover && (
                            <div className="w-full bg-slate-100 border-b border-slate-100 p-4 md:p-8 flex items-center justify-center">
                                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-black/5 w-full max-w-4xl max-h-[600px] flex items-center justify-center bg-white">
                                    <img src={project.cover} alt={project.title} className="w-full h-auto object-contain max-h-[600px]" />
                                </div>
                            </div>
                        )}

                        <div className="p-8 md:p-12">
                            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-6">
                                <div className="flex items-center font-medium">
                                    <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    {project.date ? new Date(project.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Tidak ada tanggal'}
                                </div>
                                {project.industry && (
                                    <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
                                        {project.industry}
                                    </span>
                                )}
                            </div>

                            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                                {project.title}
                            </h1>

                            {project.techStack && project.techStack.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.techStack.map(tech => (
                                        <span key={tech} className="bg-slate-100 text-slate-600 px-3 py-1 rounded-md text-sm font-semibold border border-slate-200">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-md mb-8"
                                >
                                    Kunjungi Website
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            )}

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
                                prose-pre:bg-slate-900 prose-pre:text-slate-50 prose-pre:rounded-xl prose-pre:p-6 prose-pre:shadow-lg prose-pre:overflow-x-auto
                                prose-table:w-full prose-table:text-left prose-table:border-collapse prose-table:my-8
                                prose-th:bg-slate-100 prose-th:p-4 prose-th:font-semibold prose-th:text-slate-900 prose-th:border prose-th:border-slate-200
                                prose-td:p-4 prose-td:border prose-td:border-slate-200 prose-td:text-slate-600">
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>{project.content}</ReactMarkdown>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
}
