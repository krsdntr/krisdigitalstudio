
import { CheckCircle2 } from "lucide-react";
import { agencyConfig } from "../data/agencyConfig";

export default function Process({ blockData }) {
    const title = blockData?.title || "Cara Kerja Simpel & Transparan";
    const subtitle = blockData?.subtitle || "Tidak perlu pusing coding atau desain. Ikuti 5 langkah mudah ini.";

    return (
        <section id="process" className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
                    <p className="text-lg text-gray-600">
                        {subtitle}
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 transform -translate-y-1/2"></div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        {agencyConfig.process.map((step, index) => (
                            <div key={index} className="relative flex flex-col items-center text-center bg-white md:bg-transparent p-6 md:p-0 rounded-xl shadow-sm md:shadow-none border md:border-none border-gray-100">
                                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 z-10 shadow-lg ring-4 ring-white">
                                    {step.step}
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                                <p className="text-sm text-gray-500">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
