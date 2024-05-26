import React from 'react';
import Link from 'next/link';

const LatestNewsSlider = ({ latestPosts }) => {
  return (
    <div className="mb-8">
      <div className="flex space-x-4 ">
        {latestPosts.map((post) => (
          <Link href={`/posts/${post.slug}`} key={post.slug}
          className="relative w-full h-60 bg-gray-900  rounded-3xl transition-transform transform "
          >    
            
              <img
                src={post.thumbnail}
                alt={post.title}
                className="object-cover w-full h-60 rounded-3xl mb-2  opacity-30"
              />
              <div className="absolute bottom-0 left-0 right-0 text-white p-4">
                <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-300 text-sm">
                  By {post.author} • {post.publishDate}
                </p>
              </div>
            
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LatestNewsSlider;
