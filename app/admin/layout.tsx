import { Inter } from "next/font/google";
import "@/components/admin/css/admin.css";
import {Sidebar} from "@/components/admin/sidebar";
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
          <div className="w-5/6 h-screen overflow-auto">
            {children}
          </div>
        </main>
        </body>
    </html>
  );
}
