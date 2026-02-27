import '../index.css';
import { getSystemStyles } from '../lib/notion';

export const metadata = {
  title: 'KrisDigital Studio',
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
      <body style={cssVars}>
        {children}
      </body>
    </html>
  );
}
