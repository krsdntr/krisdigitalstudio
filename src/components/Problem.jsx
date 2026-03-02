
import { Clock, TrendingDown, XCircle } from "lucide-react";
import { agencyConfig } from "../data/agencyConfig";

export default function Problem({ blockData }) {
    const title = blockData?.title || agencyConfig.problem.title;
    const subtitle = blockData?.subtitle;
    const icons = {
        Clock: Clock,
        TrendingDown: TrendingDown,
        XCircle: XCircle
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        {title}
                    </h2>
                    {subtitle && <p className="text-lg text-gray-600 mt-2 mb-4">{subtitle}</p>}
                    <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {agencyConfig.problem.items.map((item, index) => {
                        const Icon = icons[item.icon];
                        return (
                            <div key={index} className="p-8 bg-red-50 rounded-2xl border border-red-100 text-center hover:shadow-lg transition-shadow">
                                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Icon className="h-8 w-8 text-red-600" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
