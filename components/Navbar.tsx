import Link from 'next/link';
import { useRouter } from 'next/router';

export function Navbar() {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">nextjs-starter</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link href="/">
              <a className={currentRoute === '/' ? 'active' : undefined}>
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className={currentRoute === '/about' ? 'active' : undefined}>
                About
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
