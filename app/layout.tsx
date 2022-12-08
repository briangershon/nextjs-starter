import './globals.css';
import { Navbar } from '@/components/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <div className="flex items-center flex-col p-8 space-y-10 min-h-screen">
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
