import { Instagram, Smartphone } from "lucide-react";
import { agencyConfig } from "../data/agencyConfig";

export default function Footer({ styles = {} }) {
    const brandName = styles['brand_name']?.value || agencyConfig.brand.name;
    const tagline = styles['brand_tagline']?.value || agencyConfig.brand.tagline;
    const instagram = styles['brand_instagram']?.value || agencyConfig.brand.instagram;
    const whatsapp = styles['brand_whatsapp']?.value || agencyConfig.brand.whatsappNumber;
    const copyright = styles['footer_copyright']?.value || `© ${new Date().getFullYear()} All rights reserved.`;

    return (
        <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-white font-bold text-xl mb-1">{brandName}</h3>
                        <p className="text-sm">{tagline}</p>
                    </div>

                    <div className="flex gap-6">
                        <a
                            href={`https://instagram.com/${instagram}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors flex items-center gap-2"
                        >
                            <Instagram className="h-5 w-5" />
                            <span className="text-sm">@{instagram}</span>
                        </a>
                        <a
                            href={`https://wa.me/${whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors flex items-center gap-2"
                        >
                            <Smartphone className="h-5 w-5" />
                            <span className="text-sm">WhatsApp</span>
                        </a>
                    </div>

                    <div className="text-sm">
                        {copyright}
                    </div>
                </div>
            </div>
        </footer>
    );
}
