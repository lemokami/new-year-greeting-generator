import Head from 'next/head';
import { FC } from 'react';

import { quotes } from '../assets/quotes';
import Link from 'next/link';
import { FaPencilAlt } from 'react-icons/fa';
import Layout from '../components/Layout';

interface GreetingProps {
  name: string;
  greeter: string;
  quote: string;
  fname: string;
}

const Greeting: FC<GreetingProps> = ({ quote, name, greeter, fname }) => {
  return (
    <Layout className='flex-1 font-serif bg-white text-blue px-8 xl:px-16 flex flex-col justify-center items-start'>
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
      <div className='flex flex-col space-y-2 mb-4'>
        <h1 className='text-4xl xl:text-5xl font-bold'>
          Wishing you a Merry Christmas
        </h1>
        <h1 className='text-4xl xl:text-5xl font-bold'>{name}!</h1>
      </div>
      <p className='w-full md:w-1/2 text-lg text-[#475358]'>{quote}</p>
      {greeter !== '' && (
        <>
          <p className='font-bold my-4'>with ❤️</p>
          <p className='font-[licorice] text-6xl'>{greeter}</p>
        </>
      )}
      <Link href='/'>
        <a>
          <button className='flex items-center space-x-1 font-normal mt-10 xl:opacity-30 xl:hover:opacity-100 focus:outline-none'>
            <FaPencilAlt className='w-3' />
            <span>Create a greeting</span>
          </button>
        </a>
      </Link>
    </Layout>
  );
};

export default Greeting;

export async function getServerSideProps({ query }) {
  const name = query.name ? query.name : '';
  const greeter = query.greeter ? query.greeter : '';
  const fname = `https://res.cloudinary.com/lemodrive/image/upload/v1640373388/chrismas-greeting-gen/0${
    (Math.random() * 6).toFixed(0) + 1
  }.png`;
  const quote = quotes[(Math.random() * (quotes.length - 1)).toFixed(0)];

  return {
    props: {
      quote,
      name,
      greeter,
      fname,
    },
  };
}
