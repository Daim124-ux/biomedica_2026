'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import LogoutButton from './LogoutButton';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';

  return (
    <>
      {!isLoginPage && <Header />}
      <main style={{ flex: 1, position: 'relative' }}>
        {children}
        {!isLoginPage && <LogoutButton />}
      </main>
      {!isLoginPage && <Footer />}
    </>
  );
}
