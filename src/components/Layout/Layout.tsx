import { ReactNode } from 'react';
import TopMenu from '../TopMenu/TopMenu.tsx';
import { useLocation } from 'react-router';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const location = useLocation().pathname;
  if (location === '/login') {
    return children;
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TopMenu /> <main>{children}</main>
    </LocalizationProvider>
  );
}
