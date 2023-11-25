import { ReactNode } from 'react';
import TopMenu from '../TopMenu/TopMenu.tsx';
import { useLocation } from 'react-router';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const location = useLocation().pathname;
  if (location === '/login') {
    return children;
  }
  return (
    <>
      <TopMenu /> <main>{children}</main>
    </>
  );
}
