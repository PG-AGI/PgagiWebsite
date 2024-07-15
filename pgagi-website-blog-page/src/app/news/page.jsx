import { getAllPostsMeta } from '../../lib/news_mdx';
import Navbar from '../components/navbar';
import { MdSearch } from 'react-icons/md';
import LatestTrends from '../components/LatestTrends';
import LatestNewsSlider from '../LatestNews/LatestNewsSlider';
import Image from 'next/image';
import Footer from '../components/Footer2';

const Page = async () => {
  const posts = await getAllPostsMeta();
  const latestPosts = posts.slice(-1);

  const categories = [
    'Everything',
    'LLMs',
    // 'Machine Learning',
    // 'Deep Learning',
    // 'Computer Vision',
    // 'Diffusion Models',
    // 'GAMs',
    'Case Studies',
  ];

  return (
    <>
    <GlareBackground/>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30px', backgroundColor: '#040AA3;', width: '100%' }}>
    <span style={{ marginRight: '10px' }} className='text-white'>AI Calling Agent</span>
    <div>
        <Link href="https://call.toingg.com/" style={{ fontWeight: 'bold' }} className='text-white'>Learn more</Link>
    </div>
</div>
      {/* <Navbar /> */}
      {/* <div className='flex flex-wrap items-center justify-center' style={{ height: '87px', backgroundColor: '#14213D', paddingRight: '130px' }}> */}
        {/* <div>
          <p
            className='text-2xl font-semibold text-white ml-20 sm:text-center sm:text-4xl '
          >
            Explore Blogs here!
          </p>
        </div>

        <div className="relative flex sm:items-center sm:mx-auto md:mr-10 md:ml-20 ml-16">
          <div className="absolute top-2 left-2">
            <MdSearch className="h-6 w-6 text-gray-600" />
          </div>
          <input
            type="text"
            placeholder="What you're looking for?"
            className="w-64 sm:w-80 md:w-96 p-2 pl-8 pr-4 items-center rounded-full bg-white border-none focus:outline-none"
          />
        </div> */}
      {/* </div> */}

      <section>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto'>
          <div className='sm:col-span-2'>
            <div className='mt-10 ml-2'>
              <h2 className='text-2xl font-semibold'>Posts, articles, and discussions</h2>
            </div>
            {/* Category buttons */}
            <div className='flex flex-wrap gap-1 mb-4 ml-2'>
              {categories.map(category => (
                <button
                  key={category}
                  className='text-sm p-2 rounded-full text-gray-500 hover:shadow-md hover:text-white hover:bg-blue-700 hover:scale-110 transition-transform duration-200'
                >
                  {category}
                </button>
              ))}
            </div>
            {/* Latest Trends Carousel */}
            <div className='sm:w-full m-2 hover:scale-105 transition-transform duration-200'>
              <LatestNewsSlider latestPosts={latestPosts} />
            </div>
            <div className='flex flex-wrap '>
              {posts?.map(post => (
                <a
                  href={`posts/${post.slug}`}
                  key={post?.title}
                  className='w-full h-auto sm:w-1/2 lg:w-1/2 xl:w-1/2 px-4 py-4 rounded-3xl hover:scale-105 transition-transform duration-200'
                >
                  <div>
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      width={400}
                      height={400}
                      className='w-auto h-auto sm:h-52 object-cover mb-4 rounded-3xl'
                    />
                    <h3 className='text-lg font-semibold mb-1'>{post.title}</h3>
                    <div className='flex items-center text-gray-400'>
                      <p className='text-sm'>By {post.author}  • Published {post.publishDate}</p>
                      {/* <span className='mx-1'>•</span>
                      <time className='text-sm'>Published {post.publishDate}</time> */}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className='sm:col-span-1'>
            <LatestTrends />
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Page;
