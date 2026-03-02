---
title: "Prosper"
date: "2025-11-30"
industry: "Money Management"
techStack:
  - TypeScript
  - JavaScript
  - HTML
liveUrl: "https://prosper-id.vercel.app"
description: "Prosper is a modern, privacy-first personal finance application designed to help you master your wealth without sacrificing your data. Built with React 19, it leverages Google Gemini AI for smart insights and offers a completely offline-capable experience with optional Cloud Sync."
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/575abe12-833e-4e76-9279-9ed1afab19f7/f612ca23-ef68-411c-97e6-d1ca5fd4e964/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3CTLIDA%2F20260302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260302T075613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPgJN%2Bn2IqlANjZcLxT1Oc1hao%2B48e7LPNVIIELcZ89QIhAIlQQpAhUpC6uuuEUlNEqC0NxxWJ5blIIPJ5Lu5jEaW4KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqFDxjwEDS7gyBWIgq3AMF7cHvR1d7GsJMcshlOqQSRgUA49%2Bec6ONHrYTdwezDZD%2FEH9Phq78jyHhyTMe4IXanFzH4s1v3%2F1TlO9p7J%2FCMjc%2Brra2DGetf%2B66mkBgaj3ysKhGpg9J9NQSltsqJzsI7Geq%2BkONaG7Y3GYzQNYHmkmZSiDq5YY%2FOip7aW2wMAb3CWAlS6pbrHlS8npccecHhiHs8oAK60G1%2Fp8CMUhz%2FBvmDs7%2F0cLyh%2BkOt21g03fgCZW6NEu89W7nT1kxLkVlprcMP4MhyD%2BVcFo3ZfEG6iYDIMSN9NSTjwJA5daIbWdmab%2Bzw46bpna%2FIcsUiTF9nSCfuAcf77RtHAYWqdgMKFsCu964MaiLPmGel3%2ByfYYyRQU5zUFdAAjlMoxVM5aU7yfi8VzPbdsSUwI94e2S1GumgQUAXZ7CDNRIWiLg1O1huLVDSX7EZeIA%2FOf0cLUMVyh96CtKq82hDwA5eoqi%2FioNcvI5psHgv7B0v99wiq8%2F93YnxZQfuNOrxq1DyqY2B9vjADH8IhfXyAhi%2BGzNlLUg7lapCwX9FKT2oI5N1z8SFvMLiON6bVI9%2BbSQJlDCv5Z3bgqRHMAeuNRDANhr3qb0Xc5Z8IwogOBGJ4%2F4ZCrbW6mFAyy5zSi0jjDl65TNBjqkAWDZyc%2F2wQah8sEjGU25TvAk0WLc4NHkC9oJXRSfxrYh7W80fbUIezGEOU1Y7FQoUkMeKKYxH0lVAhszvWR8BUyxxFP23RgeW%2FYbKcGuSI3jHTLmY01uqod1kZxNMfqqHG36ExueSZh2QqpDBvThVsEceCFxWoaMgIP8ZmaYJKeMe5v22QBnkLZl3ah47tlxUkc9p2sfNGift35%2BSkXvzdRRLllE&X-Amz-Signature=5a2bbc0dbc8c7b37de9c02a2f2603db0e69d98dbd198185a9bd0cd556372249a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
---


**Prosper** is a modern, privacy-first personal finance application designed to help you master your wealth without sacrificing your data. Built with **React 19**, it leverages **Google Gemini AI** for smart insights and offers a completely offline-capable experience with optional Cloud Sync.


---


**🌟 Core Philosophy**


**🔒 Privacy First & Local Storage**


Prosper operates on a **Local-First** architecture.

- **No Sign-Up Required:** Start using it instantly. No email, no password.
- **Your Data, Your Device:** All financial data (transactions, budgets, wallets) is stored securely in your browser's **IndexedDB**. We do not have a backend server, and we cannot see your financial logs.

**🌍 Multi-Currency & Wallets**

- **Global Citizen:** Seamlessly manage accounts in **USD, IDR, EUR, JPY, GBP, and CAD**.
- **Real-time Normalization:** The dashboard automatically converts all foreign transactions into your main currency for a unified Net Worth view.
- **Unlimited Wallets:** Track Cash, Bank Accounts, E-Wallets, and Credit Cards separately.

---


**💎 Key Features**


**📊 Smart Dashboard**

- **Net Worth Hero:** Real-time aggregate of all your assets across all wallets.
- **Cash Flow Analysis:** Interactive Pie & Area charts to visualize Income vs Expenses over time.
- **Needs vs Wants:** Automatic classification to help you balance your lifestyle spending.
- **Burn Rate:** See exactly what percentage of your income is being spent.

**🤖 Gemini AI Insights**

- **Personal Financial Analyst:** Connect your own Google Gemini API Key.
- **Context-Aware:** The AI analyzes your specific spending patterns to provide concrete, actionable advice (e.g., "You spend 15% more on weekends" or "Subscription costs are rising").
- **Privacy-Conscious:** Only text summaries are sent to the AI; no PII (Personally Identifiable Information) is shared.

**☁️ Cloud Sync & Backup (New!)**

- **Google Drive Integration:** Securely backup your encrypted database to your personal Google Drive.
- **Cross-Device Sync:** Seamlessly move your data between your Mobile and Desktop browsers using the cloud backup/restore feature.
- **CSV Import/Export:** Full freedom to export your data to Excel/Numbers or import from legacy systems.

**💳 Comprehensive Transaction Management**

- **Complex Types:**
    - **Transfers:** Move money between wallets with optional **Admin Fees**.
    - **Subscriptions:** Track recurring payments separate from daily expenses.
    - **Debts & Credits:** Dedicated modules to track money you owe or money owed to you.
- **Smart Input:** Built-in calculator in the amount field (e.g., type `50000+2500` directly).

**📉 Debt & Loan Manager (New!)**

- **Track Outstanding Balances:** Keep tabs on "I Owe" (Hutang) vs "Owed to Me" (Piutang).
- **Installment Tracking:** Record partial payments and see the remaining balance update automatically.
- **Due Dates:** Set reminders for when debts need to be settled.

**🎯 Flexible Budgeting**

- **Custom Periods:** Go beyond monthly budgets. Create **Weekly**, **Yearly**, **One-Time**, or **Custom Date Range** budgets (perfect for vacations or project-based tracking).
- **Category Specific:** Set limits for specific categories (e.g., "Food & Dining").
- **Visual Alerts:** Progress bars change color (Green -> Orange -> Red) as you approach your limit.

**🎨 Customization & Accessibility**

- **Dark Mode:** Beautifully crafted dark theme for night usage.
- **Bilingual:** Full support for **English** and **Indonesian (Bahasa Indonesia)**.
- **PWA Support:** Install Prosper as a native app on iOS, Android, and Desktop.

---


**🛠️ Tech Stack**

- **Frontend:** React 19 (Vite)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** IndexedDB (Client-side NoSQL)
- **AI:** Google GenAI SDK (Gemini 2.5 Flash)
- **Cloud:** Google Drive API (v3) via Google Identity Services
- **Charts:** Recharts
- **Icons:** Lucide React
