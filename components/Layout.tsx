import Navbar from '@/components/Navbar';

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <div className="flex items-center flex-col p-8 space-y-10">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
