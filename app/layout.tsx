import '../styles/globals.css';
import { Navbar } from '@/components/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex items-center flex-col p-8 space-y-10">
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
