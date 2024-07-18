import React from 'react';
import LatestNews from '../LatestNews/LatestNews';

export default function LatestTrends() {
  return (
    <div className="w-full m-0 xl:w-4/5">
      <h6 className="text-lg font-semibold mb-4 ml-4">Latest Trends & News</h6>
      <div>
        {LatestNews.map((latest, index) => (
          <div key={index} className="mb-3 items-center hover:bg-gray-100 m-3 p-4"
          style={{borderRadius: '30px'}} >
            <a
              href={latest.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black block"
              style={{
                fontWeight: '400',
                textDecoration: 'none',
              }}
            >
              {latest.title}
              <p className="text-gray-500 mt-2">by {latest.author}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
