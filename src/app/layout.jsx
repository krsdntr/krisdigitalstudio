import '../index.css';
import { getSystemStyles } from '../lib/notion';

export const metadata = {
  title: 'Kris',
  description: 'Bikin Bisnis Lebih Laris dengan Website Otomatis',
};

export const revalidate = 3600; // Cache system styles for 1 hour

export default async function RootLayout({ children }) {
  const styles = await getSystemStyles();

  // Create inline CSS variables based on Notion configuration
  const cssVars = {
    '--color-primary': styles.primary_color?.value || '#2563EB',
    '--color-dark': styles.dark_mode_color?.value || '#0F172A',
  };

  // Override metadata if strictly defined in Notion
  if (styles.site_name) metadata.title = styles.site_name.value;
  if (styles.site_description) metadata.description = styles.site_description.value;

  return (
    <html lang="id">
      <body style={cssVars} className="relative min-h-screen">
        {/* Global Animated Background Gradients */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-slate-50">
          <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70vh] bg-blue-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-blob"></div>
          <div className="absolute top-[20%] -left-[10%] w-[60%] h-[60vh] bg-indigo-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        {/* Main Content */}
        <main className="relative z-10">
          {children}
        </main>

      </body>
    </html>
  );
}
