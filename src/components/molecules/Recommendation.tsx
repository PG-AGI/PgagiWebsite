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
import navigationText from '@/constants/uiText/navigation.json'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '@/styles/components/molecules/Recommendation.scss'

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
    path: ROUTES.BLOGPOST_SLUG,
    title: navigationText.recommendedPostsTitle
  },
  caseStudy: {
    path: ROUTES.CASE_STUDY_SLUG,
    title: navigationText.recommendedCaseStudiesTitle
  },
  ainews: {
    path: ROUTES.AINEWS_SLUG,
    title: navigationText.relatedAINewsTitle
  }
}

export default function Recommendation({ currentSlug = '', contentType }: RecommendationProps): JSX.Element | null {
  const [recommendedContent, setRecommendedContent] = useState<RecommendedContent[]>([])
  const config = contentTypeConfig[contentType]

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        let allContent: RecommendedContent[] = []

        if (contentType === 'blog') {
          allContent = await fetchAllBlogs() as unknown as RecommendedContent[]
        } else if (contentType === 'caseStudy') {
          allContent = await fetchAllCaseStudies() as unknown as RecommendedContent[]
        } else if (contentType === 'ainews') {
          allContent = await fetchAllAINews() as unknown as RecommendedContent[]
        }

        const filteredContent = allContent
          .filter((content) => content.slug !== currentSlug)
          .sort(() => Math.random() - 0.5)
        setRecommendedContent(filteredContent)
      } catch (err) {
        console.error(`Error fetching ${contentType} recommendations:`, err)
      }
    }

    fetchRecommendations()
  }, [currentSlug, contentType])

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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
