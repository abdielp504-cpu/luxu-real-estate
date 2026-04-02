import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://luxe-real-estate.vercel.app"), // Replace with actual domain
  title: {
    default: "Luxe Real Estate | Exceptional Living",
    template: "%s | Luxe Real Estate",
  },
  description: "Discover the most exclusive properties and luxury estates around the world. Expert guidance for refined buyers and sellers.",
  keywords: ["Luxury Real Estate", "Estates", "Mansion", "Exclusive Properties", "Luxe", "Real Estate Agent"],
  authors: [{ name: "Luxe Real Estate Team" }],
  creator: "Luxe Real Estate",
  publisher: "Luxe Real Estate",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://luxe-real-estate.vercel.app",
    siteName: "Luxe Real Estate",
    title: "Luxe Real Estate | Exceptional Living",
    description: "Curated collection of the world's most prestigious properties.",
    images: [
      {
        url: "/og-image.jpg", // Ensure this exists in public/
        width: 1200,
        height: 630,
        alt: "Luxe Real Estate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxe Real Estate | Exceptional Living",
    description: "Curated collection of the world's most prestigious properties.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans transition-colors duration-500">
        {children}
        <Toaster 
          position="bottom-right" 
          toastOptions={{
            style: { 
              borderRadius: '0px', 
              fontFamily: 'var(--font-sans)', 
              letterSpacing: '0.1em', 
              textTransform: 'uppercase', 
              fontSize: '10px',
              padding: '16px'
            }
          }} 
        />
      </body>
    </html>
  );
}
