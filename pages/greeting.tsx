import Head from 'next/head';
import Image from 'next/image';
import { FC } from 'react';

import pineImg from '../assets/pine.jpeg';
import { quotes } from '../assets/quotes';

interface GreetingProps {
  name: string;
  greeter: string;
  quote: string;
  fname: string;
}

const Greeting: FC<GreetingProps> = ({ quote, name, greeter, fname }) => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      {/* seo  */}
      <Head>
        <title>Christmas Wishes from {greeter}</title>
        <meta
          name='description'
          content={`${
            name === '' ? '' : name + ','
          } Christmas is a season of enjoying the simple things that make life beautiful. May you have great memories that will permanently touch your heart. I wish you so much joy during this season and all through to the New Year`}
        />
        <meta
          property='og:title'
          content={`Christmas Wishes from ${greeter}`}
        />
        <meta property='og:image' content={fname} />
        <meta
          property='og:desc'
          content={`${
            name === '' ? '' : name + ','
          } Christmas is a season of enjoying the simple things that make life beautiful. May you have great memories that will permanently touch your heart. I wish you so much joy during this season and all through to the New Year`}
        />
      </Head>
      {/* end seo  */}
      {/* page content  */}
      <h1 className='font-[cursive] text-3xl font-bold mb-4 text-red'>
        Happy Christmas {name.split('')[0].toUpperCase() + name.slice(1)}
      </h1>
      <div className='px-4 py-16 rounded-lg relative mx-4 md:mx-auto md:max-w-[50%]'>
        <Image
          src={pineImg}
          layout='fill'
          objectFit='cover'
          className='z-0 rounded-lg'
          alt='Christmas Tree'
        />
        <div className='flex flex-col items-center z-1 relative text-white'>
          <p className='z-1 text-center font-[poppins]'>{quote}</p>
        </div>
      </div>
    </div>
  );
};

export default Greeting;

export async function getServerSideProps({ query }) {
  const name = query.name ? query.name : '';
  const greeter = query.greeter ? query.greeter : '';
  const fname = `/seo-cards/0${(Math.random() * 7).toFixed(0)}.png`;
  const quote = quotes[1];

  return {
    props: {
      quote,
      name,
      greeter,
      fname,
    },
  };
}
