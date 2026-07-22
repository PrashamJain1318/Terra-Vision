import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { QueryClientProvider } from '@/providers/QueryClientProvider';
import { LenisProvider } from '@/providers/LenisProvider';
import { ErrorBoundary } from '@/components/common/ErrorBoundary';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AmbientSoundPlayer from '@/components/common/AmbientSoundPlayer';
import CinematicIntroModal from '@/components/common/CinematicIntroModal';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Terra Vision — See Beyond the Destination',
  description: 'Plan with intelligence. Explore like a local. Remember every journey.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${playfair.variable} ${jakarta.variable}`} style={{ colorScheme: 'dark' }}>
      <body className="antialiased selection:bg-primary/30 selection:text-foreground">
        <ErrorBoundary>
          <QueryClientProvider>
            <ThemeProvider>
              <LenisProvider>
                <CinematicIntroModal />
                <div className="flex flex-col min-h-screen relative overflow-hidden bg-background text-foreground">
                  <Navbar />
                  <main className="flex-grow relative z-10">{children}</main>
                  <Footer />
                  <AmbientSoundPlayer />
                </div>
              </LenisProvider>
            </ThemeProvider>
          </QueryClientProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
