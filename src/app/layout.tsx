import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

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
        <div className="flex">
          <div className="flex flex-col flex-1">
            <main className="w-full bg-light">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}
