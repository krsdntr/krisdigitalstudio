import Header from "../components/Header";
import Hero from "../components/Hero";
import Problem from "../components/Problem";
import Process from "../components/Process";
import Urgency from "../components/Urgency";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import Profile from "../components/Profile";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Products from "../components/Products";
import Articles from "../components/Articles";
import TextMedia from "../components/TextMedia";
import Stats from "../components/Stats";

import { getLandingBlocks } from "../lib/notion";

// Component mapping to match Notion "Component Name" with actual React components
const componentMap = {
    'Hero': Hero,
    'Problem': Problem,
    'Process': Process,
    'Urgency': Urgency,
    'Pricing': Pricing,
    'FAQ': FAQ,
    'Profile': Profile,
    'CallToAction': CallToAction,
    'Projects': Projects,
    'Products': Products,
    'Articles': Articles,
    'TextMedia': TextMedia,
    'Stats': Stats
};

export const revalidate = 60; // Cache landing page blocks for 60 seconds

export default async function Home() {
    // Fetch dynamic sections driven by Notion
    const blocks = await getLandingBlocks();

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {blocks.length === 0 ? (
                // Fallback or static view if Notion database is empty/disconnected
                <>
                    <Hero />
                    <Problem />
                    <Process />
                    <Projects />
                    <Urgency />
                    <Pricing />
                    <FAQ />
                    <Profile />
                    <CallToAction />
                </>
            ) : (
                // Render Notion-driven blocks sequentially
                blocks.map((block) => {
                    const ComponentToRender = componentMap[block.componentName];
                    if (!ComponentToRender) return null; // Skip if component map doesn't exist

                    return (
                        <ComponentToRender
                            key={block.id}
                            blockData={block} // Pass Notion data to the component to optionally override statically driven text
                        />
                    );
                })
            )}

            <Footer />
        </div>
    );
}
