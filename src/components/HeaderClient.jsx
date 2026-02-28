"use client";

import { Menu, X, Rocket } from "lucide-react";
import Link from 'next/link';
import { useState } from "react";
import { agencyConfig } from "../data/agencyConfig";

export default function HeaderClient({ styles }) {
    const [isOpen, setIsOpen] = useState(false);

    // Build dynamic navigation items by iterating over possible keys (up to 10 for safety)
    const navItems = [];
    for (let i = 1; i <= 10; i++) {
        const textValue = styles[`nav_link_${i}_text`]?.value;
        const urlValue = styles[`nav_link_${i}_url`]?.value;

        // If both text and URL are defined in Notion, add it
        if (textValue && urlValue) {
            navItems.push({ text: textValue, url: urlValue });
        }
    }

    // Default CTA fallback
    const ctaText = styles['header_cta_text']?.value || "Hubungi Saya";
    const brandName = styles['brand_name']?.value || agencyConfig.brand.name;
    const whatsapp = styles['brand_whatsapp']?.value || agencyConfig.brand.whatsappNumber;

    // Check if there is a deliberate CTA URL set in Notion
    const ctaUrl = styles['header_cta_url']?.value || `https://wa.me/${whatsapp}`;

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <Link href="/" className="flex-shrink-0 flex items-center gap-2 hover:opacity-80 transition-opacity">
                        <Rocket className="h-6 w-6 text-blue-600" />
                        <span className="font-bold text-xl text-slate-800 tracking-tight">
                            {brandName}
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item, i) => (
                            // Use Next Link if internal routing, else normal anchor handling for hashes
                            item.url.startsWith('/#') ? (
                                <a key={i} href={item.url} className="text-gray-600 hover:text-blue-600 transition-colors">{item.text}</a>
                            ) : (
                                <Link key={i} href={item.url} className="text-gray-600 hover:text-blue-600 transition-colors">{item.text}</Link>
                            )
                        ))}
                        <a
                            href={ctaUrl}
                            target={ctaUrl.startsWith('http') ? "_blank" : "_self"}
                            rel={ctaUrl.startsWith('http') ? "noopener noreferrer" : ""}
                            className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                            {ctaText}
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-500 hover:text-gray-700 focus:outline-none p-2"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute w-full bg-white border-b border-gray-100 shadow-lg">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navItems.map((item, i) => (
                            item.url.startsWith('/#') ? (
                                <a key={i} href={item.url} onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">{item.text}</a>
                            ) : (
                                <Link key={i} href={item.url} onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">{item.text}</Link>
                            )
                        ))}
                        <a
                            href={ctaUrl}
                            target={ctaUrl.startsWith('http') ? "_blank" : "_self"}
                            rel={ctaUrl.startsWith('http') ? "noopener noreferrer" : ""}
                            onClick={() => setIsOpen(false)}
                            className="block w-full text-center mt-4 bg-blue-600 text-white px-3 py-3 rounded-lg font-medium hover:bg-blue-700"
                        >
                            {ctaText}
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
