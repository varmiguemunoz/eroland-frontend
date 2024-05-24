"use client";

import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Eroland | Discover the most biggest hentai portal</title>
        <meta
          name="description"
          content="In eroland you can find the most popular hentais animes and so much more fun | Discover our platform"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/next.svg" />
      </head>

      <body className={inter.className}>
        <SessionProvider>
          <main>
            {children}
            <Toaster />
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}
