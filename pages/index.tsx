import Image from 'next/image';
import { useState } from 'react';
import { FaChevronLeft, FaShareAlt } from 'react-icons/fa';

import Layout from '../components/Layout';

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
      setTimeout(() => setcopyContent(<FaShareAlt />), 3000);
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
    <Layout className='flex flex-col items-start justify-center px-8 xl:px-16 text-blue font-serif'>
      <h1 className='text-5xl font-bold w-1/2'>Christmas Wish Generator</h1>
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
            className='font-normal bg-blue rounded-lg text-white px-8 py-2'>
            Create
          </button>
        </form>
      ) : (
        <div className='flex flex-col items-start'>
          <div
            className='flex flex-col md:flex-row rounded-lg mt-8 border-2 p-2'
            onClick={handleShare}>
            <span className='px-4 p-2'>{url}</span>
            <button className='flex items-center justify-center font-normal bg-blue rounded-lg text-white px-8 py-2'>
              {copyContent}
            </button>
          </div>
          <button
            onClick={resetAndGoBack}
            className='mt-4 text-dark-green flex space-x-1 items-center justify-center'>
            <FaChevronLeft className='h-3' />
            <span>Go Back</span>
          </button>
        </div>
      )}
    </Layout>
  );
}
