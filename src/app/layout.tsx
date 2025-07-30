import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import ReactQueryProvider from "@/provider/ReactQueryProvider";
import { Toaster } from 'sonner';

const pretendard = localFont({
  src: '../fonts/pretendard/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
})

export const metadata: Metadata = {
  title: "Pinn BB",
  description: "･:*:｡･:*:･ﾟPinn-Made Budget Book･:*:｡･:*:･ﾟ",
  icons: {
		icon: "/favicon.png",
	},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <body className={pretendard.className}>
        <ReactQueryProvider>
            <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 min-w-72">
              {children}
              <Toaster
                position="top-right"
                richColors
                duration={2500}
                expand
              />
            </main>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
