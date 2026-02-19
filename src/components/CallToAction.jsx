
import { MessageCircle } from "lucide-react";
import { agencyConfig } from "../data/agencyConfig";

export default function CallToAction() {
    return (
        <section className="py-20 bg-blue-600 text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
                    {agencyConfig.cta.title}
                </h2>
                <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                    {agencyConfig.cta.subtitle}
                </p>

                <a
                    href={`https://wa.me/${agencyConfig.brand.whatsappNumber}?text=Halo, saya mau konsultasi website.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-gray-100 transition-all hover:scale-105"
                >
                    <MessageCircle className="h-6 w-6" />
                    {agencyConfig.cta.buttonText}
                </a>
            </div>
        </section>
    );
}
