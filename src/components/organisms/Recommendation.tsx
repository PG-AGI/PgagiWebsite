'use client'

import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import Link from 'next/link'
import Image from 'next/image'
import { fetchAllBlogs } from '@/services/blogService'
import { fetchAllCaseStudies } from '@/services/caseStudyService'
import { fetchAllAINews } from '@/services/ainewsService'
import ROUTES from '@/constants/routes'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '@/styles/components/organisms/Recommendation.scss'

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
    fetcher: fetchAllBlogs,
    path: ROUTES.BLOGPOST_SLUG,
    title: 'Recommended Posts'
  },
  caseStudy: {
    fetcher: fetchAllCaseStudies,
    path: ROUTES.CASE_STUDY_SLUG,
    title: 'Recommended Case Studies'
  },
  ainews: {
    fetcher: fetchAllAINews,
    path: ROUTES.AINEWS_SLUG,
    title: 'Related AI News'
  }
}

export default function Recommendation({ currentSlug = '', contentType }: RecommendationProps) {
  const [recommendedContent, setRecommendedContent] = useState<RecommendedContent[]>([])
  const config = contentTypeConfig[contentType]

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const allContent = await config.fetcher()
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
  }, [currentSlug, contentType, config])

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
            <Link href={config.path(content.slug)} className="recommendation-card">
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
