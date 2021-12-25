import { FC } from 'react';
import Image from 'next/image';

import sideImg from '../assets/side-illustration.png';

interface LayoutProps {
  className?: string;
}

const Layout: FC<LayoutProps> = ({ children, className }) => {
  return (
    <div className='min-h-screen flex'>
      {/* page content  */}
      <div className={`flex-1 ${className ? className : ''}`}>{children}</div>
      {/* side image  */}
      <div className='hidden xl:flex flex-1 bg-[#FFFFE5] h-full xl:h-screen items-center justify-center'>
        <Image src={sideImg} layout='intrinsic' alt='xmas illustration' />
      </div>
    </div>
  );
};

export default Layout;
