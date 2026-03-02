
"use client";

import { ChevronDown, ChevronUp } from "lucide-react";

import { useState } from "react";
import { agencyConfig } from "../data/agencyConfig";

export default function FAQ({ blockData }) {
    const [openIndex, setOpenIndex] = useState(null);
    const title = blockData?.title || "Pertanyaan Umum";
    const subtitle = blockData?.subtitle || "Jawaban untuk hal-hal yang sering ditanyakan calon klien.";

    return (
        <section id="faq" className="py-20 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
                    <p className="text-lg text-gray-600">
                        {subtitle}
                    </p>
                </div>

                <div className="space-y-4">
                    {agencyConfig.faq.map((item, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-lg overflow-hidden transition-all hover:border-blue-300"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-white text-left focus:outline-none transition-colors"
                            >
                                <span className="font-semibold text-slate-900">{item.question}</span>
                                {openIndex === index ? (
                                    <ChevronUp className="h-5 w-5 text-blue-600" />
                                ) : (
                                    <ChevronDown className="h-5 w-5 text-gray-400" />
                                )}
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                    } overflow-hidden`}
                            >
                                <div className="p-4 text-gray-600 bg-white border-t border-gray-100">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
