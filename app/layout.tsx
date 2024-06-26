import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';

import { Toaster } from '@/components/ui/sonner';

import { ExitModal } from '@/components/modals/exit-modal';
import { HeartsModal } from '@/components/modals/hearts-modal';
import { PracticeModal } from '@/components/modals/practice-modal';

import './globals.css';
import { ThemeProvider } from '@/providers/theme-provider';
import { ClerkProvider } from '@/providers/clerk-provider';

const font = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fluentify',
  description:
    'Interactive platform for language learning with lessons, quizzes, and progress tracking.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <Toaster richColors />
        <ExitModal />
        <HeartsModal />
        <PracticeModal />
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <ClerkProvider>{children}</ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
