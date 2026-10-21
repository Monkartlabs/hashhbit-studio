import { Inter, Poppins, Raleway, Sora } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const bingoRegular = localFont({
  src: "../fonts/Bingo-Regular.woff2",
  variable: "--font-bingo-regular",
});

const bingoItalic = localFont({
  src: "../fonts/Bingo-Italic.woff2",
  variable: "--font-bingo-italic",
});


export const metadata = {
  metadataBase: new URL("https://yourdomain.com"),

  title: {
    default: "Hashhbit Studio — Web Design & Digital Marketing",
    template: "%s | Hashhbit Studio",
  },

  description:
    "Hashhbit Studio is a creative digital studio crafting premium websites, digital experiences, and marketing strategies that help brands grow online.",

  keywords: [
    "Hashhbit Studio",
    "web design agency",
    "web development",
    "digital marketing",
    "digital marketing agency",
    "website design",
    "creative digital studio",
    "SEO services",
    "branding",
    "UI UX design",
  ],

  authors: [
    {
      name: "Hashhbit Studio",
    },
  ],

  creator: "Hashhbit Studio",
  publisher: "Hashhbit Studio",

  alternates: {
    canonical: "https://yourdomain.com",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    siteName: "Hashhbit Studio",

    title: "Hashhbit Studio — Web Design & Digital Marketing",

    description:
      "Premium websites, digital experiences, and digital marketing strategies crafted to help ambitious brands grow online.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hashhbit Studio — Web Design & Digital Marketing",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Hashhbit Studio — Web Design & Digital Marketing",

    description:
      "Premium websites, digital experiences, and digital marketing strategies crafted to help ambitious brands grow online.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`
        ${poppins.variable}
        ${raleway.variable}
        ${bingoRegular.variable}
        ${bingoItalic.variable}
        ${sora.variable}
        ${inter.variable}
        scroll-smooth
      `}
    >
      <body className="bg-[#F7F3EC] text-[#282126] antialiased">
        {children}
      </body>
    </html>
  );
}
