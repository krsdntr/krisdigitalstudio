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
        name: "KrisDigital Studio",
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
"[project]/src/components/Header.jsx [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/src/components/Header.jsx'\n\nUnexpected token `template head`. Expected identifier, string literal, numeric literal or [ for the computed key");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/src/components/FAQ.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FAQ
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$agencyConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/agencyConfig.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function FAQ() {
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "faq",
        className: "py-20 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl md:text-4xl font-bold text-slate-900 mb-4",
                            children: "Pertanyaan Umum"
                        }, void 0, false, {
                            fileName: "[project]/src/components/FAQ.jsx",
                            lineNumber: 16,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-gray-600",
                            children: "Jawaban untuk hal-hal yang sering ditanyakan calon klien."
                        }, void 0, false, {
                            fileName: "[project]/src/components/FAQ.jsx",
                            lineNumber: 17,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/FAQ.jsx",
                    lineNumber: 15,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$agencyConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["agencyConfig"].faq.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border border-gray-200 rounded-lg overflow-hidden transition-all hover:border-blue-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setOpenIndex(openIndex === index ? null : index),
                                    className: "w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-white text-left focus:outline-none transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-slate-900",
                                            children: item.question
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FAQ.jsx",
                                            lineNumber: 32,
                                            columnNumber: 33
                                        }, this),
                                        openIndex === index ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                            className: "h-5 w-5 text-blue-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FAQ.jsx",
                                            lineNumber: 34,
                                            columnNumber: 37
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                            className: "h-5 w-5 text-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FAQ.jsx",
                                            lineNumber: 36,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FAQ.jsx",
                                    lineNumber: 28,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 text-gray-600 bg-white border-t border-gray-100",
                                        children: item.answer
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FAQ.jsx",
                                        lineNumber: 44,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FAQ.jsx",
                                    lineNumber: 40,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/src/components/FAQ.jsx",
                            lineNumber: 24,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/FAQ.jsx",
                    lineNumber: 22,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/FAQ.jsx",
            lineNumber: 14,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/FAQ.jsx",
        lineNumber: 13,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/Profile.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Profile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$agencyConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/agencyConfig.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function Profile() {
    const { profile } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$agencyConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["agencyConfig"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        className: "py-20 bg-slate-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row items-center gap-8 md:gap-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl bg-gray-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: profile.photoUrl,
                                alt: profile.name,
                                className: "w-full h-full object-cover",
                                onError: (e)=>{
                                    e.target.onerror = null;
                                    e.target.style.display = 'none';
                                    e.target.parentNode.classList.add('flex', 'items-center', 'justify-center', 'text-gray-400');
                                    e.target.parentNode.innerText = 'Foto Profil';
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/Profile.jsx",
                                lineNumber: 17,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Profile.jsx",
                            lineNumber: 15,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Profile.jsx",
                        lineNumber: 13,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center md:text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-bold text-slate-900 mb-2",
                                children: "Siapa di balik KrisDigital?"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Profile.jsx",
                                lineNumber: 32,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl text-blue-600 font-semibold mb-4",
                                children: [
                                    profile.name,
                                    " — ",
                                    profile.role
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Profile.jsx",
                                lineNumber: 33,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 text-lg mb-6 leading-relaxed",
                                children: [
                                    '"',
                                    profile.bio,
                                    '"'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Profile.jsx",
                                lineNumber: 35,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-2 text-gray-500 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                        className: "h-5 w-5 text-red-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Profile.jsx",
                                        lineNumber: 40,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm",
                                        children: profile.location
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Profile.jsx",
                                        lineNumber: 41,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Profile.jsx",
                                lineNumber: 39,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Profile.jsx",
                        lineNumber: 31,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Profile.jsx",
                lineNumber: 12,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Profile.jsx",
            lineNumber: 11,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Profile.jsx",
        lineNumber: 10,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1f16a46d._.js.map