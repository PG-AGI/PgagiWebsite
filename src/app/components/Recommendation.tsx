'use client'

import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import Link from 'next/link'
import Image from 'next/image'
import axios from 'axios'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Recommendation.scss'

type ContentType = 'blog' | 'caseStudy' | 'ainews'

interface RecommendedContent {
  slug: string
  title: string
  coverImage: string
}

interface RecommendationProps {
  currentSlug: string
  contentType: ContentType
}

const contentTypeConfig = {
  blog: {
    endpoint: '/api/blogs',
    path: '/blogpost',
    title: 'Recommended Posts'
  },
  caseStudy: {
    endpoint: '/api/case-studies',
    path: '/case-study',
    title: 'Recommended Case Studies'
  },
  ainews: {
    endpoint: '/api/ainews',
    path: '/ainews',
    title: 'Related AI News'
  }
}

export default function Recommendation({ currentSlug = '', contentType }: RecommendationProps) {
  const [recommendedContent, setRecommendedContent] = useState<RecommendedContent[]>([])
  const config = contentTypeConfig[contentType]

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await axios.get(config.endpoint)
        const allContent = response.data
        const filteredContent = allContent
          .filter((content: RecommendedContent) => content.slug !== currentSlug)
          .sort(() => Math.random() - 0.5)
          .slice(0, 6)
        setRecommendedContent(filteredContent)
      } catch (err) {
        console.error(`Error fetching ${contentType} recommendations:`, err)
      }
    }

    fetchRecommendations()
  }, [currentSlug, contentType, config.endpoint])

  if (recommendedContent.length === 0) return null

  return (
    <div className="recommendations">
      <h2>{config.title}</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={5}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {recommendedContent.map((content) => (
          <SwiperSlide key={content.slug}>
            {/* <div className="Recommendation-outercontainer">*/}
            {/* <div className="Recommendation-innercontainer">  */}
            <Link href={`${config.path}/${content.slug}`} className="recommendation-card">
              <div className="recommendation-image">
                <Image
                  src={content.coverImage}
                  alt={content.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="recommendation-content">
                <h3>{content.title}</h3>
              </div>
            </Link>
             {/* </div>  */}
            {/* </div> */}
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  )
}
