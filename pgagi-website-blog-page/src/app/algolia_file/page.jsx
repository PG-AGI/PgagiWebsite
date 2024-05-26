"use client"
import { getAllPostsMeta } from '../../lib/mdx';
import Navbar from '../components/navbar';
// import { MdSearch } from 'react-icons/md';
import LatestTrends from '../components/LatestTrends';
import LatestNewsSlider from '../LatestNews/LatestNewsSlider';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useEffect } from 'react';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

// const searchClient = algoliasearch(PITCQM3FDN, ebd799879bac96574477eafa285ebfb7);
// const indexName = pgagi;

const Page = async () => {
  const posts = await getAllPostsMeta();
  const latestPosts = posts.slice(-1);
  const [query, setQuery] = useState('');

  useEffect(() => {
    import('algoliasearch/lite').then(algoliasearch => {
    const searchClient = algoliasearch(PITCQM3FDN, ebd799879bac96574477eafa285ebfb7);
    const indexName = pgagi;
    });
  }, []);

  const categories = [
    'Everything',
    'Community',
    'Guide',
    'Open source collab',
    'NLP',
    'Audio',
    'CV',
    'RL',
    'Ethics',
    'Diffusion',
    'Game development',
    'Time series',
    'RLHF',
    'Casestudies',
  ];

  return (
    <>
      <Navbar />
      <div className='flex flex-wrap items-center justify-between' style={{ height: '87px', backgroundColor: '#14213D' }}>
        <div>
          <p
            className='text-2xl font-semibold text-white ml-20 sm:text-center sm:text-4xl sm:ml-36 '
          >
            Explore Blogs here!
          </p>
        </div>

        {/* <div className="relative flex sm:items-center md:mr-24 md:ml-20 ml-16 sm:mr-32">
          <div className="absolute top-2 left-2">
            <MdSearch className="h-6 w-6 text-gray-600" />
          </div>
          <input
            type="text"
            placeholder="What you're looking for?"
            className="w-64 sm:w-80 md:w-96 p-2 pl-8 pr-4 items-center rounded-full bg-white border-none focus:outline-none"
          />
        </div> */}
        <InstantSearch searchClient={searchClient} indexName={indexName}>
        <SearchBox
          className='relative flex sm:items-center md:mr-24 md:ml-20 ml-16 sm:mr-32'
          translations={{
            placeholder: 'What are you looking for?',
          }}
          onChange={(event) => setQuery(event.currentTarget.value)}
        />
        <Hits hitComponent={Hit} />
      </InstantSearch>
      </div>

      <section className='py-4 sm:px-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto sm:ml-24 '>
          <div className='sm:col-span-2'>
            <div className='mt-10 ml-2'>
              <h2 className='text-2xl font-semibold'>Posts, articles, and discussions</h2>
            </div>
            {/* Category buttons */}
            <div className='flex flex-wrap gap-1 mb-4 ml-2'>
              {categories.map(category => (
                <button
                  key={category}
                  className='text-sm p-2 rounded-full text-gray-500 hover:shadow-md'
                >
                  {category}
                </button>
              ))}
            </div>
            {/* Latest Trends Carousel */}
            <div className='sm:w-full m-2'>
              <LatestNewsSlider latestPosts={latestPosts} />
            </div>
            <div className='flex flex-wrap '>
              {posts?.map(post => (
                <Link
                  href={`posts/${post.slug}`}
                  key={post?.title}
                  className='w-full h-auto sm:w-1/2 lg:w-1/2 xl:w-1/2 px-4 py-4 rounded-3xl '
                >
                  <div>
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      width={400}
                      height={400}
                      className='w-full h-auto sm:h-60 object-cover mb-4 rounded-3xl'
                    />
                    <h3 className='text-lg font-semibold mb-1'>{post.title}</h3>
                    <div className='flex items-center text-gray-400'>
                      <p className='text-sm'>By {post.author}  • Published {post.publishDate}</p>
                      {/* <span className='mx-1'>•</span>
                      <time className='text-sm'>Published {post.publishDate}</time> */}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className='sm:col-span-1 sm:py-8'>
            <LatestTrends />
          </div>
        </div>
      </section>
    </>
  );
};

const Hit = ({ hit }) => (
  <Link href={`/posts/${hit.slug}`}>
    <div>
      <h3>{hit.title}</h3>
      <p>By {hit.author}</p>
    </div>
  </Link>
);
export default Page;
