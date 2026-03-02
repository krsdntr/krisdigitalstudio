
import { Check, HelpCircle } from "lucide-react";
import { agencyConfig } from "../data/agencyConfig";

export default function Pricing({ blockData }) {
    const title = blockData?.title || "Investasi Hemat, Balik Modal Cepat";
    const subtitle = blockData?.subtitle || "Pilih paket yang sesuai dengan budget dan target bisnis Anda. Tanpa biaya tersembunyi.";
    return (
        <section id="pricing" className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
                    <p className="text-lg text-gray-600">{subtitle}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {agencyConfig.pricing.map((plan) => (
                        <div
                            key={plan.id}
                            className={`relative bg-white rounded-2xl p-6 md:p-8 transition-transform hover:-translate-y-1 ${plan.isPopular
                                ? "border-2 border-blue-600 shadow-xl scale-100 md:scale-105 z-10"
                                : "border border-gray-200 shadow-lg"
                                }`}
                        >
                            {plan.isPopular && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-sm">
                                        Paling Laris
                                    </span>
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-slate-900">{plan.title}</h3>
                                <p className="text-gray-500 mt-2 text-sm leading-relaxed">{plan.description}</p>
                            </div>

                            <div className="mb-8 p-4 bg-slate-50 rounded-xl">
                                <div className="flex flex-col md:flex-row md:items-baseline gap-1">
                                    <span className="text-4xl font-extrabold text-slate-900 leading-tight">{plan.price}</span>
                                    <span className="text-gray-500 font-medium text-sm">{plan.period}</span>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className="flex-shrink-0 mt-1">
                                            <Check className="h-5 w-5 text-green-500" />
                                        </div>
                                        <span className="text-gray-600 text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={`https://wa.me/${agencyConfig.brand.whatsappNumber}?text=Halo, saya tertarik dengan paket ${plan.title}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`block w-full py-3 px-6 rounded-lg text-center font-bold transition-colors ${plan.isPopular
                                    ? "bg-blue-600 text-white hover:bg-blue-700"
                                    : "bg-slate-800 text-white hover:bg-slate-900"
                                    }`}
                            >
                                {plan.buttonText}
                            </a>

                            <p className="text-center text-xs text-gray-400 mt-4">
                                *Proses pengerjaan dimulai setelah data diterima.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
