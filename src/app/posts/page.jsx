"use-client"
import { getAllPostsMeta } from '../../lib/mdx';
import GlareBackground from '../components/base/GlareBackground';
import LatestTrends from '../components/LatestTrends';
import LatestNewsSlider from '../LatestNews/LatestNewsSlider';
import Image from 'next/image';
import Link from 'next/link';
import styles from './posts.module.scss';
import Navigation from '../components/base/Navigation';
// import Footer from '../components/Footer';
const Page = async () => {
  const posts = await getAllPostsMeta();
  const latestPosts = posts.slice(-1);

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
    <div className={styles.main}>
      <GlareBackground/>
      <Navigation/>

      <div className={styles.semi}>
        {/* <h2 className={styles.explore}>
          Explore Blogs here!
        </h2> */}
        {/* Search bar (uncomment to use) */}
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
      </div>


      <section className={styles.sect}>
        <div className={styles.container}>
          <div className={styles.cat}>
            <div className={styles.header}>
              <h2>Posts, articles, and discussions</h2>
            </div>
            {/* Category buttons */}
            <div className={styles.categories}>
              {categories.map(category => (
                <button
                  key={category}
                  className={styles.categoryButton}
                >
                  {category}
                </button>
              ))}
            </div>
            {/* Latest Trends Carousel */}
            <div className={styles.latestTrends}>
              <LatestNewsSlider latestPosts={latestPosts} />
            </div>
            <div className={styles.postWrapper}>
              {posts.map(post => (
                <Link
                  href={`posts/${post.slug}`}
                  key={post.title}
                  className={styles.post}
                >
                  <div>
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      width={400}
                      height={400}
                      className={styles.postImage}
                    />
                    <h3 className={styles.postTitle}>{post.title}</h3>
                    <div className={styles.postInfo}>
                      <p>By {post.author} • Published {post.publishDate}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className={styles.news}>
            <LatestTrends />
          </div>
        </div>
      </section>
      {/* <Footer/> */}
    </div>
  );
};

export default Page;


// code with figma stying //

// import Link from 'next/link';
// import { getAllPostsMeta } from '../../lib/mdx';
// import Navbar from '../components/navbar';
// import { MdSearch } from 'react-icons/md';
// import LatestTrends from '../components/LatestTrends';
// import LatestNewsSlider from '../LatestNews/LatestNewsSlider';

// const Page = async () => {
//   const posts = await getAllPostsMeta();
  
//   const latestPosts = posts.slice(-1);
  
//   const categories = [
//     'Everything',
//     'Community',
//     'Guide',
//     'Open source collab',
//     'NLP',
//     'Audio',
//     'CV',
//     'RL',
//     'Ethics',
//     'Diffusion',
//     'Game development',
//     'Time series',
//     'RLHF',
//     'Casestudies',
//   ];

//   return (
//     <>
//       <Navbar />
//       <div className='flex items-center justify-between'
//         style={{
//           height: '87px',
//           backgroundColor: '#14213D',
//         }}>
//         <div>
//           <p
//             style={{
//               fontFamily: 'Inter',
//               fontSize: '38px',
//               fontWeight: 500,
//               textAlign: 'left',
//               marginLeft: '184px',
//               color: 'white',
//               marginTop: '-10px'
//             }}>Explore Blogs here!</p>
//         </div>

//         <div className="relative flex items-center" >
//           <div className="absolute top-2 left-2">
//             <MdSearch className="h-6 w-6 text-gray-600" />
//           </div>
//           <input
//             type="text"
//             placeholder="What you're looking for?"
//             style={{
//               width: '540px',
//               height: '39px',
//               paddingLeft: '40px',
//               paddingRight: '4px',
//               borderRadius: '20px',
//               backgroundColor: 'white',
//               border: 'none',
//               color: 'gray-800',
//               marginRight: '130px',
//               outline: 'none',
//             }}
//           />
//         </div>
//       </div>

//       <section className='py-4'>
//         <div className='grid grid-cols-3 gap-8 mx-auto' style={{ marginLeft: '164px' }}>
//           <div className='col-span-2'>
//             <div className='mt-10 ml-2'>
//             <h2
//       style={{
//         top: '230px',
//         left: '188px',
//         fontFamily: 'Inter',
//         fontSize: '30px',
//         fontWeight: 600,
//         lineHeight: '36px',
//         letterSpacing: '0em',
//         textAlign: 'left',
//       }}
//     >
//       Posts, articles, and discussions
//     </h2>
//             </div>
//             {/* Category buttons */}
//             <div className='flex flex-wrap gap-1 mb-4 ml-2'>
//               {categories.map(category => (
//                 <button
//                   key={category}
//                   className='text-sm p-2  rounded-full text-gray-500 hover:shadow-md '
//                 >
//                   {category}
//                 </button>
//               ))}
//             </div>
//             {/* Latest Trends Carousel */}
//             <div className='hidden sm:block'>
//               <LatestNewsSlider latestPosts={latestPosts} />
//             </div>
//             <div className='flex flex-wrap gap-2 align-item-center justify-between w-3/4'>
//               {posts?.map(post => (
//                 <Link
//                   href={`posts/${post.slug}`}
//                   key={post?.title}
//                   className='w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 py-4'
//                 >
//                   <div
//                     style={{
//                       width: '329px',
//                       borderRadius: '20px',
//                     }}>
//                     <img
//                       src={post.thumbnail}
//                       alt={post.title}
//                       className=' object-cover mb-4'
//                       style={{
//                         width: '329px',
//                         height: '197px',
//                         borderRadius: '20px'
//                       }}
//                     />
//                     <h3
//                       style={{
//                         fontFamily: 'Inter',
//                         fontSize: '18px',
//                         fontWeight: 500,
//                         lineHeight: '20px',
//                         letterSpacing: '0em',
//                         textAlign: 'left',
//                         marginLeft: '10px',
//                       }}>{post.title}</h3>
//                     <div className='flex items-center '>
//                       <p className='text-gray-400'
//                         style={{
//                           fontFamily: 'Inter',
//                           fontSize: '12px',
//                           fontWeight: 400,
//                           lineHeight: '5px',
//                           letterSpacing: '0em',
//                           textAlign: 'left',
//                           marginTop: '2px',
//                           marginLeft: '10px',
//                         }}>By {post.author}</p>
//                       <span className='mx-1 text-gray-400'>   • </span>
//                       <time className=' text-gray-400'
//                         style={{
//                           fontFamily: 'Inter',
//                           fontSize: '12px',
//                           fontWeight: 400,
//                           lineHeight: '5px',
//                           letterSpacing: '0em',
//                           textAlign: 'left',
//                           marginTop: '2px',
//                           marginLeft: '10px',
//                         }}>Published {post.publishDate}</time>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//           <div className='col-span-1'>
//             <LatestTrends />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Page;