
export const agencyConfig = {
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
    { title: "Cepat & Ringan", desc: "Website loading di bawah 3 detik." },
    { title: "Terima Beres", desc: "Anda fokus bisnis, teknis saya yang urus." },
    { title: "Garansi Support", desc: "Bantuan jika ada kendala teknis." }
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
