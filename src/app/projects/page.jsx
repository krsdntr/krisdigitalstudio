import { getProjects, getLandingBlocks } from "../../lib/notion";
import ProjectsClient from "./ProjectsClient";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
    title: 'Project & Portfolio - Kris',
    description: 'Lihat bagaimana kami membantu bisnis lain berkembang secara digital melalui web dan optimasi.',
};

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export default async function ProjectsPage() {
    const projects = await getProjects();
    const blocks = await getLandingBlocks();
    const projectsBlock = blocks.find(b => b.componentName === 'Projects');
    const title = projectsBlock?.title || 'Karya & Project Kami';
    const subtitle = projectsBlock?.subtitle || 'Jelajahi berbagai solusi digital yang telah kami bangun untuk mendongkrak visibilitas bisnis klien kami.';

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

                <ProjectsClient initialProjects={projects} />
            </main>
            <Footer />
        </div>
    );
}
