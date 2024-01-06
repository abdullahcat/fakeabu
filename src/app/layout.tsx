import Navbar from '@/components/navbar'
import '/src/app/globals.css';
import type { Metadata } from 'next'

interface LayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='light'>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>


    </div>
  );
};
export default RootLayout;