import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Developer Portfolio",
  description: "A modern web developer portfolio showcasing projects and skills",
  openGraph: {
    title: "Developer Portfolio",
    description: "A modern web developer portfolio showcasing projects and skills",
    type: "website",
    url: "https://your-portfolio.com",
    images: [
      {
        url: "https://your-portfolio.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Developer Portfolio",
    description: "A modern web developer portfolio showcasing projects and skills",
    images: ["https://your-portfolio.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navigation />
            <main>{children}</main>
            <Toaster />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}