import { ReactNode } from 'react';
import TopMenu from '../TopMenu/TopMenu.tsx';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <TopMenu /> <main>{children}</main>
    </>
  );
}
