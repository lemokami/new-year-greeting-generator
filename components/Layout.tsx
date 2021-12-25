import { FC } from 'react';
import Image from 'next/image';

import sideImg from '../assets/side-illustration.png';

interface LayoutProps {
  className?: string;
}

const Layout: FC<LayoutProps> = ({ children, className }) => {
  return (
    <div className='h-screen flex flex-col xl:flex-row items-center'>
      {/* page content  */}
      <div className={`flex-1 relative ${className ? className : ''}`}>
        {children}
      </div>
      {/* side image  */}
      <div className='hidden xl:flex flex-1 bg-[#FFFFE5] items-center justify-center h-screen'>
        <Image
          src={sideImg}
          layout='intrinsic'
          alt='xmas illustration'
          placeholder={'blur'}
        />
      </div>
      <span className='text-xs opacity-60 text-blue font-light  py-2 block xl:absolute xl:bottom-2 xl:left-4'>
        Design with <span className='mr-1'>❤️</span> by{' '}
        <a
          href='#'
          className='underline'
          // target={'_blank'}
          // rel='noreferrer'
        >
          Joel
        </a>
        . Developed with
        <span className='mr-1'>❤️</span> by{' '}
        <a
          href='https://lemokami.netlify.app'
          className='underline'
          target={'_blank'}
          rel='noreferrer'>
          Lemokami
        </a>
      </span>
    </div>
  );
};

export default Layout;
