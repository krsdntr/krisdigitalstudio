
import { Menu, X, Rocket } from "lucide-react";
import { useState } from "react";
import { agencyConfig } from "../data/agencyConfig";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <Rocket className="h-6 w-6 text-blue-600" />
                        <span className="font-bold text-xl text-slate-800 tracking-tight">
                            {agencyConfig.brand.name}
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">Tentang</a>
                        <a href="#portfolio" className="text-gray-600 hover:text-blue-600 transition-colors">Portfolio</a>
                        <a href="#process" className="text-gray-600 hover:text-blue-600 transition-colors">Cara Kerja</a>
                        <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Harga</a>
                        <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors">FAQ</a>
                        <a
                            href={`https://wa.me/${agencyConfig.brand.whatsappNumber}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                            Hubungi Saya
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
                        <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">Tentang</a>
                        <a href="#portfolio" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">Portfolio</a>
                        <a href="#process" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">Cara Kerja</a>
                        <a href="#pricing" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">Harga</a>
                        <a href="#faq" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">FAQ</a>
                        <a
                            href={`https://wa.me/${agencyConfig.brand.whatsappNumber}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)}
                            className="block w-full text-center mt-4 bg-blue-600 text-white px-3 py-3 rounded-lg font-medium hover:bg-blue-700"
                        >
                            Hubungi Saya
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
