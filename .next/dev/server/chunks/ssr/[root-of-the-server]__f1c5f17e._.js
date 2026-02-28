module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/data/agencyConfig.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "agencyConfig",
    ()=>agencyConfig
]);
const agencyConfig = {
    brand: {
        name: "Kris",
        tagline: "Bikin Bisnis Lebih Laris dengan Website Otomatis",
        whatsappNumber: "6285186816062",
        instagram: "krisdntro"
    },
    profile: {
        name: "Krisdiantoro",
        role: "Web Developer",
        location: "Desa Babakan, Kec. Dramaga, Kab. Bogor, Jawa Barat 16680",
        bio: "Kepercayaan adalah modal utama bisnis online. Saya berdedikasi membantu pemilik bisnis lokal meningkatkan kehadiran digital mereka dengan solusi yang transparan, hemat, dan efektif.",
        photoUrl: "https://media.licdn.com/dms/image/v2/D5603AQHc_UAZZVrmTg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1695268091355?e=1773273600&v=beta&t=wtmqEHMaa4afVXvsDtIFJitlk2wIC24-TA32NuAMWq8"
    },
    problem: {
        title: "Masih Pakai Cara Lama? Awas Bisnis Jalan di Tempat!",
        items: [
            {
                icon: "Clock",
                title: "Habis Waktu Balas Chat",
                desc: "Capek jelasin menu & harga berulang-ulang ke setiap calon pembeli."
            },
            {
                icon: "TrendingDown",
                title: "Kalah Saing",
                desc: "Kompetitor sudah punya website keren, Anda masih modal broadcast WA manual."
            },
            {
                icon: "XCircle",
                title: "Kredibilitas Dipertanyakan",
                desc: "Pembeli ragu transfer karena tidak ada 'wajah' bisnis yang resmi di Google."
            }
        ]
    },
    urgency: {
        title: "Khusus 5 Orang Tercepat Bulan Ini",
        subtitle: "Dapatkan Website Premium dengan Harga Kaki Lima. Slot Terbatas!",
        deadline: "Promo berakhir minggu ini",
        slotsLeft: 3
    },
    portfolio: [
        {
            title: "Palem Merah Catering",
            category: "Catering System",
            description: "Website catering dengan fitur kalkulator harga otomatis dan integrasi WhatsApp.",
            link: "https://krsdntr.github.io/palemmerah/index.html",
            image: "https://i.ibb.co.com/607MpWmM/Screenshot-23.png" // Kosongkan untuk melihat fitur 'Smart Fallback' (ilustrasi otomatis)
        }
    ],
    process: [
        {
            step: 1,
            title: "Konsultasi Gratis",
            description: "Diskusikan kebutuhan bisnis Anda via WhatsApp. Tanpa komitmen."
        },
        {
            step: 2,
            title: "Deal & Materi",
            description: "Sepakati harga, lalu kirim foto/teks untuk website Anda."
        },
        {
            step: 3,
            title: "Pengerjaan Cepat",
            description: "Website mulai dikerjakan. Estimasi 3-5 hari kerja."
        },
        {
            step: 4,
            title: "Review & Revisi",
            description: "Cek hasil website. Ada kouta revisi minor jika perlu perbaikan."
        },
        {
            step: 5,
            title: "Online & Serah Terima",
            description: "Website aktif! Anda terima akses penuh dan cara pakainya."
        }
    ],
    pricing: [
        {
            id: "hemat",
            title: "Hemat Selamanya",
            price: "Rp 500.000",
            period: "/ Sekali Bayar",
            description: "Cocok untuk usaha pemula yang ingin online tanpa biaya tahunan.",
            isPopular: false,
            features: [
                "Domain: namausaha.pages.dev",
                "Biaya Tahunan: Rp 0 (GRATIS)",
                "Hosting Server Gratis (Cloudflare)",
                "SSL (Gembok Hijau) Termasuk",
                "Integrasi Tombol WhatsApp"
            ],
            buttonText: "Pilih Paket Hemat"
        },
        {
            id: "pro",
            title: "Professional Branding",
            price: "Rp 500.000",
            period: "+ Harga Domain",
            description: "Untuk bisnis yang ingin terlihat lebih bonafide dan profesional.",
            isPopular: true,
            features: [
                "Domain: .com / .id / .co.id",
                "Biaya Tahunan: Sesuai harga domain + 100rb Admin",
                "Hosting Server Gratis (Cloudflare)",
                "SSL (Gembok Hijau) Termasuk",
                "Integrasi Tombol WhatsApp"
            ],
            buttonText: "Pilih Paket Professional"
        }
    ],
    benefits: [
        {
            title: "Cepat & Ringan",
            desc: "Website loading di bawah 3 detik."
        },
        {
            title: "Terima Beres",
            desc: "Anda fokus bisnis, teknis saya yang urus."
        },
        {
            title: "Garansi Support",
            desc: "Bantuan jika ada kendala teknis."
        }
    ],
    faq: [
        {
            question: "Apakah ada biaya bulanan tersembunyi?",
            answer: "TIDAK ADA. Untuk paket Hemat, Anda bayar sekali seumur hidup. Untuk paket Professional, Anda hanya bayar perpanjangan domain setahun sekali (langsung ke penyedia domain)."
        },
        {
            question: "Berapa lama website selesai?",
            answer: "Rata-rata 3-5 hari kerja setelah data (teks & foto) Anda kirimkan lengkap."
        },
        {
            question: "Saya gaptek, apakah bisa kelola sendiri?",
            answer: "Tentu! Sistem kami buat sangat simpel. Jika Anda tidak mau repot, kami juga sediakan jasa maintenance murah meriah."
        },
        {
            question: "Apa bedanya domain .pages.dev dan .com?",
            answer: ".pages.dev adalah subdomain gratis dari Cloudflare. Fiturnya sama canggihnya, hanya namanyasaja yang menempel. .com terlihat lebih eksklusif dan 'niat' untuk branding jangka panjang."
        }
    ],
    cta: {
        title: "Siap Bikin Bisnis Laris Manis?",
        subtitle: "Konsultasi dulu aja, gratis kok. Gak jadi bikin juga gapapa, nambah teman nambah rezeki.",
        buttonText: "Konsultasi Gratis via WA"
    }
};
}),
"[project]/src/components/HeaderClient.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeaderClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rocket.js [app-ssr] (ecmascript) <export default as Rocket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$agencyConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/agencyConfig.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function HeaderClient({ styles }) {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Extract dynamic nav links or fallback to defaults
    const getNavText = (idx, fallback)=>styles[`nav_link_${idx}_text`]?.value || fallback;
    const getNavUrl = (idx, fallback)=>styles[`nav_link_${idx}_url`]?.value || fallback;
    const navItems = [
        {
            text: getNavText(1, 'Tentang'),
            url: getNavUrl(1, '/#about')
        },
        {
            text: getNavText(2, 'Projects'),
            url: getNavUrl(2, '/projects')
        },
        {
            text: getNavText(3, 'Produk'),
            url: getNavUrl(3, '/products')
        },
        {
            text: getNavText(4, 'Artikel'),
            url: getNavUrl(4, '/blog')
        },
        {
            text: getNavText(5, 'Harga'),
            url: getNavUrl(5, '/#pricing')
        },
        {
            text: getNavText(6, 'FAQ'),
            url: getNavUrl(6, '/#faq')
        }
    ];
    const ctaText = styles['header_cta_text']?.value || "Hubungi Saya";
    const brandName = styles['brand_name']?.value || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$agencyConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["agencyConfig"].brand.name;
    const whatsapp = styles['brand_whatsapp']?.value || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$agencyConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["agencyConfig"].brand.whatsappNumber;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between h-16 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex-shrink-0 flex items-center gap-2 hover:opacity-80 transition-opacity",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"], {
                                    className: "h-6 w-6 text-blue-600"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeaderClient.jsx",
                                    lineNumber: 33,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold text-xl text-slate-800 tracking-tight",
                                    children: brandName
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeaderClient.jsx",
                                    lineNumber: 34,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/HeaderClient.jsx",
                            lineNumber: 32,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex items-center space-x-8",
                            children: [
                                navItems.map((item, i)=>// Use Next Link if internal routing, else normal anchor handling for hashes
                                    item.url.startsWith('/#') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: item.url,
                                        className: "text-gray-600 hover:text-blue-600 transition-colors",
                                        children: item.text
                                    }, i, false, {
                                        fileName: "[project]/src/components/HeaderClient.jsx",
                                        lineNumber: 44,
                                        columnNumber: 33
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.url,
                                        className: "text-gray-600 hover:text-blue-600 transition-colors",
                                        children: item.text
                                    }, i, false, {
                                        fileName: "[project]/src/components/HeaderClient.jsx",
                                        lineNumber: 46,
                                        columnNumber: 33
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `https://wa.me/${whatsapp}`,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5",
                                    children: ctaText
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeaderClient.jsx",
                                    lineNumber: 49,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/HeaderClient.jsx",
                            lineNumber: 40,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:hidden flex items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsOpen(!isOpen),
                                className: "text-gray-500 hover:text-gray-700 focus:outline-none p-2",
                                children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "h-6 w-6"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeaderClient.jsx",
                                    lineNumber: 65,
                                    columnNumber: 39
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    className: "h-6 w-6"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeaderClient.jsx",
                                    lineNumber: 65,
                                    columnNumber: 67
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeaderClient.jsx",
                                lineNumber: 61,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeaderClient.jsx",
                            lineNumber: 60,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HeaderClient.jsx",
                    lineNumber: 31,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/HeaderClient.jsx",
                lineNumber: 30,
                columnNumber: 13
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden absolute w-full bg-white border-b border-gray-100 shadow-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 pt-2 pb-6 space-y-2",
                    children: [
                        navItems.map((item, i)=>item.url.startsWith('/#') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: item.url,
                                onClick: ()=>setIsOpen(false),
                                className: "block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md",
                                children: item.text
                            }, i, false, {
                                fileName: "[project]/src/components/HeaderClient.jsx",
                                lineNumber: 77,
                                columnNumber: 33
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: item.url,
                                onClick: ()=>setIsOpen(false),
                                className: "block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md",
                                children: item.text
                            }, i, false, {
                                fileName: "[project]/src/components/HeaderClient.jsx",
                                lineNumber: 79,
                                columnNumber: 33
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: `https://wa.me/${whatsapp}`,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            onClick: ()=>setIsOpen(false),
                            className: "block w-full text-center mt-4 bg-blue-600 text-white px-3 py-3 rounded-lg font-medium hover:bg-blue-700",
                            children: ctaText
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeaderClient.jsx",
                            lineNumber: 82,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HeaderClient.jsx",
                    lineNumber: 74,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/HeaderClient.jsx",
                lineNumber: 73,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/HeaderClient.jsx",
        lineNumber: 29,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/products/ProductsClient.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductsClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-ssr] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [app-ssr] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function ProductsClient({ initialProducts }) {
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedType, setSelectedType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("All");
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("newest");
    // Extract unique product types for filter options
    const productTypes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const types = new Set(initialProducts.map((p)=>p.productType).filter(Boolean));
        return [
            "All",
            ...Array.from(types)
        ];
    }, [
        initialProducts
    ]);
    const filteredAndSorted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let result = [
            ...initialProducts
        ];
        // Search Filter
        if (searchQuery) {
            const q = searchQuery.toLowerCase();
            result = result.filter((p)=>p.title.toLowerCase().includes(q) || p.description && p.description.toLowerCase().includes(q));
        }
        // Type Filter
        if (selectedType !== "All") {
            result = result.filter((p)=>p.productType === selectedType);
        }
        // Sort
        result.sort((a, b)=>{
            const priceA = a.discountPrice > 0 ? a.discountPrice : a.price;
            const priceB = b.discountPrice > 0 ? b.discountPrice : b.price;
            if (sortBy === "price-low") {
                return priceA - priceB;
            } else if (sortBy === "price-high") {
                return priceB - priceA;
            } else if (sortBy === "a-z") {
                return a.title.localeCompare(b.title);
            }
            return 0; // Default (newest/Notion order)
        });
        return result;
    }, [
        initialProducts,
        searchQuery,
        selectedType,
        sortBy
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full md:w-1/3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/app/products/ProductsClient.jsx",
                                lineNumber: 60,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Cari produk template, tool...",
                                className: "w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow",
                                value: searchQuery,
                                onChange: (e)=>setSearchQuery(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/src/app/products/ProductsClient.jsx",
                                lineNumber: 61,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/products/ProductsClient.jsx",
                        lineNumber: 59,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row gap-4 w-full md:w-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                        className: "text-gray-400 w-4 h-4 hidden md:block"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/products/ProductsClient.jsx",
                                        lineNumber: 73,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "w-full md:w-auto px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white",
                                        value: selectedType,
                                        onChange: (e)=>setSelectedType(e.target.value),
                                        children: productTypes.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: type,
                                                children: type === "All" ? "Semua Tipe" : type
                                            }, type, false, {
                                                fileName: "[project]/src/app/products/ProductsClient.jsx",
                                                lineNumber: 80,
                                                columnNumber: 33
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/products/ProductsClient.jsx",
                                        lineNumber: 74,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/products/ProductsClient.jsx",
                                lineNumber: 72,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "w-full md:w-auto px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white",
                                value: sortBy,
                                onChange: (e)=>setSortBy(e.target.value),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "newest",
                                        children: "Terbaru"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/products/ProductsClient.jsx",
                                        lineNumber: 91,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "price-low",
                                        children: "Harga Tertrendah"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/products/ProductsClient.jsx",
                                        lineNumber: 92,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "price-high",
                                        children: "Harga Tertinggi"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/products/ProductsClient.jsx",
                                        lineNumber: 93,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "a-z",
                                        children: "A - Z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/products/ProductsClient.jsx",
                                        lineNumber: 94,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/products/ProductsClient.jsx",
                                lineNumber: 86,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/products/ProductsClient.jsx",
                        lineNumber: 70,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/products/ProductsClient.jsx",
                lineNumber: 56,
                columnNumber: 13
            }, this),
            filteredAndSorted.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500 text-lg",
                    children: "Tidak ada produk yang ditemukan."
                }, void 0, false, {
                    fileName: "[project]/src/app/products/ProductsClient.jsx",
                    lineNumber: 102,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/products/ProductsClient.jsx",
                lineNumber: 101,
                columnNumber: 17
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                children: filteredAndSorted.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all group flex flex-col h-full relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-4 right-4 z-20 flex gap-2",
                                children: [
                                    product.isFreebie && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm",
                                        children: "GRATIS"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/products/ProductsClient.jsx",
                                        lineNumber: 112,
                                        columnNumber: 37
                                    }, this),
                                    product.discountPrice > 0 && !product.isFreebie && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm",
                                        children: "SALE"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/products/ProductsClient.jsx",
                                        lineNumber: 117,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/products/ProductsClient.jsx",
                                lineNumber: 110,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: `/products/${product.slug}`,
                                className: "relative h-56 bg-slate-100 w-full overflow-hidden block border-b border-gray-100 p-4 group/image",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-full h-full rounded-xl overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-white border border-black/5 transform transition-transform duration-500 group-hover:scale-[1.02]",
                                        children: [
                                            product.cover ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: product.cover,
                                                alt: product.title,
                                                className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/products/ProductsClient.jsx",
                                                lineNumber: 126,
                                                columnNumber: 41
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full h-full flex items-center justify-center bg-slate-50",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                    className: "h-10 w-10 text-slate-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/products/ProductsClient.jsx",
                                                    lineNumber: 133,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/products/ProductsClient.jsx",
                                                lineNumber: 132,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/products/ProductsClient.jsx",
                                                lineNumber: 136,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/products/ProductsClient.jsx",
                                        lineNumber: 124,
                                        columnNumber: 33
                                    }, this),
                                    product.productType && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-6 left-6 z-20 pointer-events-none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bg-white/95 text-blue-600 px-3 py-1.5 rounded-full text-[10px] uppercase font-bold tracking-wider shadow-sm backdrop-blur-md border border-white/50",
                                            children: product.productType
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/products/ProductsClient.jsx",
                                            lineNumber: 140,
                                            columnNumber: 41
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/products/ProductsClient.jsx",
                                        lineNumber: 139,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/products/ProductsClient.jsx",
                                lineNumber: 123,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 flex flex-col flex-grow",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold text-slate-900 mb-2 line-clamp-2",
                                        title: product.title,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/products/${product.slug}`,
                                            className: "hover:text-blue-600 transition-colors",
                                            children: product.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/products/ProductsClient.jsx",
                                            lineNumber: 149,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/products/ProductsClient.jsx",
                                        lineNumber: 148,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 text-sm mb-6 line-clamp-3 flex-grow",
                                        children: product.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/products/ProductsClient.jsx",
                                        lineNumber: 154,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-auto flex items-end justify-between pt-4 border-t border-slate-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: product.isFreebie ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-green-600 text-xl",
                                                    children: "Rp 0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/products/ProductsClient.jsx",
                                                    lineNumber: 161,
                                                    columnNumber: 45
                                                }, this) : product.discountPrice > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-gray-400 line-through",
                                                            children: [
                                                                "Rp",
                                                                product.price.toLocaleString('id-ID')
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/products/ProductsClient.jsx",
                                                            lineNumber: 164,
                                                            columnNumber: 49
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-slate-900 text-xl",
                                                            children: [
                                                                "Rp",
                                                                product.discountPrice.toLocaleString('id-ID')
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/products/ProductsClient.jsx",
                                                            lineNumber: 165,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/products/ProductsClient.jsx",
                                                    lineNumber: 163,
                                                    columnNumber: 45
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-slate-900 text-xl",
                                                    children: [
                                                        "Rp",
                                                        product.price.toLocaleString('id-ID')
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/products/ProductsClient.jsx",
                                                    lineNumber: 168,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/products/ProductsClient.jsx",
                                                lineNumber: 159,
                                                columnNumber: 37
                                            }, this),
                                            product.checkoutUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: product.checkoutUrl,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors",
                                                children: "Beli"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/products/ProductsClient.jsx",
                                                lineNumber: 172,
                                                columnNumber: 41
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `/products/${product.slug}`,
                                                className: "bg-slate-50 text-slate-600 hover:bg-slate-200 px-4 py-2 rounded-lg text-sm font-semibold transition-colors",
                                                children: "Detail"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/products/ProductsClient.jsx",
                                                lineNumber: 181,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/products/ProductsClient.jsx",
                                        lineNumber: 158,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/products/ProductsClient.jsx",
                                lineNumber: 147,
                                columnNumber: 29
                            }, this)
                        ]
                    }, product.id, true, {
                        fileName: "[project]/src/app/products/ProductsClient.jsx",
                        lineNumber: 107,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/products/ProductsClient.jsx",
                lineNumber: 105,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/products/ProductsClient.jsx",
        lineNumber: 54,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f1c5f17e._.js.map