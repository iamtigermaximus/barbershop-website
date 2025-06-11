import type { Metadata } from 'next';
import Layout from '@/components/globalstyles/Layout';
import { Praise, Sorts_Mill_Goudy } from 'next/font/google';

const praise = Praise({
  weight: '400', // Only one weight available for Praise
  subsets: ['latin'],
  variable: '--font-praise',
  display: 'swap',
});

const sortsMillGoudy = Sorts_Mill_Goudy({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-sortsMillGoudy',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Barbershop Website',
  description: 'Created with Next.js 15',
};

const globalHtmlBodyStyles = `
  html, body {
    max-width: 100vw;
    overflow-x: hidden;
    font-family: 'SF Pro Display', sans-serif;
    background-color: #191919; /* Or use your CSS var here */
    color: #fff;
    scroll-snap-type: y mandatory;
    margin: 0;
    padding: 0;
  }
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${praise.variable} ${sortsMillGoudy.variable}`}
    >
      <head suppressHydrationWarning>
        <style>{globalHtmlBodyStyles}</style>
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Playfair+Display:wght@400;700&display=swap"
          rel="stylesheet"
        /> */}
      </head>
      <body>
        {/* ✅ Move client component inside <body> */}
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
