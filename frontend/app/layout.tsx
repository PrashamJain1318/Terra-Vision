import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { QueryClientProvider } from '@/providers/QueryClientProvider';
import { LenisProvider } from '@/providers/LenisProvider';
import { ErrorBoundary } from '@/components/common/ErrorBoundary';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'LocalLens AI - See Beyond the Destination',
  description: 'An AI-powered local travel explorer and smart itinerary companion.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
      <body className="antialiased selection:bg-primary/30 selection:text-foreground">
        <ErrorBoundary>
          <QueryClientProvider>
            <ThemeProvider>
              <LenisProvider>
                <div className="flex flex-col min-h-screen relative overflow-hidden">
                  {/* Premium Aurora Background Blobs */}
                  <div className="aurora-bg">
                    <div className="aurora-blob bg-primary w-[500px] h-[500px] -top-40 -left-40 opacity-30" />
                    <div className="aurora-blob bg-indigo-500 w-[600px] h-[600px] -bottom-40 -right-40 opacity-20" />
                  </div>
                  
                  <Navbar />
                  <main className="flex-grow pt-16 relative z-10">
                    {children}
                  </main>
                  <Footer />
                </div>
              </LenisProvider>
            </ThemeProvider>
          </QueryClientProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
