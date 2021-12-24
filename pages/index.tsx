import Image from 'next/image';
import { useState } from 'react';
import { FaArrowLeft, FaShareAlt } from 'react-icons/fa';

import pineImg from '../assets/pine.jpeg';

export default function Home() {
  const [name, setName] = useState('');
  const [greeter, setGreeter] = useState('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [copyContent, setcopyContent] = useState<string | React.ReactNode>(
    <FaShareAlt />
  );
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '') {
      alert('Please enter your name');
      return;
    }
    setUrl(
      window.location.href +
        'greeting?name=' +
        encodeURIComponent(name) +
        '&greeter=' +
        encodeURIComponent(greeter)
    );
    setSubmitted(true);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Christmas wishes ${greeter === '' ? '' : 'from' + greeter}`,
        url: url,
        text: `I wish you so much joy during this season and all through to the New Year. ${
          greeter === '' ? '' : 'With ❤️' + greeter
        }`,
      });
    } else {
      navigator.clipboard.writeText(url);
      setcopyContent('Copied!');
    }
  };

  const resetAndGoBack = () => {
    setSubmitted(false);
    setName('');
    setGreeter('');
    setUrl('');
    setcopyContent(<FaShareAlt />);
  };

  return (
    <div className='h-screen flex flex-col justify-center items-center relative'>
      <Image
        src={pineImg}
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        className='z-0'
        alt='Pine Tree'
      />
      <div className='flex flex-col mx-4 md:mx-auto max-w-1/2 bg-white p-8 rounded-lg z-10'>
        <h1 className='text-4xl text-red font-[cursive] text-center'>
          Christmas Wishes Generator
        </h1>
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col items-start space-y-2 my-2 mt-4'>
              <label htmlFor='name'>
                Enter the name of the person you want to wish for:
              </label>
              <input
                type='text'
                id='name'
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='flex flex-col items-start space-y-2 my-4'>
              <label htmlFor='greeter'>What is your name? (optional):</label>
              <input
                type='text'
                id='greeter'
                value={greeter}
                onChange={(e) => setGreeter(e.target.value)}
              />
            </div>
            <button
              type='submit'
              className='p-2 px-4 w-full rounded-lg bg-dark-green'>
              Create
            </button>
          </form>
        ) : (
          <div className='flex flex-col'>
            <div
              className='flex flex-col md:flex-row bg-dark-green rounded-lg mt-8'
              onClick={handleShare}>
              <span className='text-white px-4 p-2 '>{url}</span>
              <button className='bg-light-green p-4 rounded-lg flex items-center justify-center'>
                {copyContent}
              </button>
            </div>
            <button
              onClick={resetAndGoBack}
              className='mt-4 text-dark-green flex space-x-1 items-center justify-center -translate-x-1'>
              <FaArrowLeft className='h-3' />
              <span>Go Back</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
