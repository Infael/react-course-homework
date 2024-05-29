'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();

  return (
    <header className="px-20 py-4">
      <nav className="flex flex-row gap align-middle justify-between">
        <h1 className="text-3xl text-center">
          <Link href="/">Velocity Vault or something... 🚗 🚗 🚗</Link>
        </h1>
        {!pathname.includes('/new') && (
          <Link href="/car/new">
            <button className="btn">Create New</button>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
