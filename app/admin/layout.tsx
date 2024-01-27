import { Inter } from "next/font/google";
import "../globals.css";
import Sidebar from "@/components/admin/sidebar";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex">
          <Sidebar/>
          <div className="w-5/6 p-8">
            {children}
          </div>
        </main>
        </body>
    </html>
  );
}
