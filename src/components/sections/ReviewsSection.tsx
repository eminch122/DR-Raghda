'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { siteConfig } from '@/data/siteConfig';
import { GoogleLogo } from '@/components/ui/Icons';
import { curatedReviews, Testimonial } from '@/data/reviews';
import Reveal from '@/components/ui/Reveal';
import { useCountUp } from '@/hooks/useCountUp';

interface ReviewsApiResponse {
  rating?: number;
  userRatingCount?: number;
  reviews?: Array<{
    authorAttribution?: {
      displayName: string;
      photoUri?: string;
      uri?: string;
    };
    rating?: number;
    relativePublishTimeDescription?: string;
    text?: { text: string };
  }> | null;
  testimonials?: Testimonial[];
  googleMapsLinks?: {
    reviewsUri?: string;
    writeAReviewUri?: string;
  };
}

export default function ReviewsSection() {
  const { t } = useLanguage();
  const [apiData, setApiData] = useState<ReviewsApiResponse | null>(null);

  useEffect(() => {
    fetch('/api/reviews')
      .then((res) => res.json())
      .then((data: ReviewsApiResponse) => {
        setApiData(data);
      })
      .catch((err) => {
        console.error('[Reviews Section] Error loading reviews API:', err);
      });
  }, []);

  const ratingNum = apiData?.rating ? Number(apiData.rating) : Number(siteConfig.google.overallRating);
  const reviewCount = apiData?.userRatingCount || siteConfig.google.totalReviewsCount;
  const reviewsLink = apiData?.googleMapsLinks?.reviewsUri || siteConfig.google.allReviewsUrl;
  const writeLink = apiData?.googleMapsLinks?.writeAReviewUri || siteConfig.google.writeReviewUrl;

  const testimonialsToDisplay: Testimonial[] = apiData?.testimonials || curatedReviews;

  const ratingCount = useCountUp(ratingNum, 1000, 1);
  const reviewsCount = useCountUp(reviewCount, 1400, 0);

  return (
    <section id="reviews" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Reviews Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-porcelain border border-goldPrimary/30 shadow-sm">
            <GoogleLogo className="w-4 h-4" />
            <span className="text-xs font-bold text-deepSlate">
              {t('reviews_google_badge')}
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-deepSlate">
            {t('reviews_title')}
          </h2>

          <p className="text-slate-600 text-base">{t('reviews_subtitle')}</p>

          {/* Rating Summary Bar */}
          <div className="inline-flex flex-wrap items-center justify-center gap-4 p-4 rounded-2xl bg-porcelain border border-slate-200/80 mt-2 shadow-sm">
            <div className="flex items-center gap-2">
              <span
                id="googleOverallScore"
                ref={ratingCount.ref}
                className="font-serif font-bold text-2xl text-deepSlate tabular-nums"
              >
                {ratingCount.display}
              </span>
              <div className="stars-gold">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-stroke"></i>
              </div>
            </div>
            <span className="text-slate-300 hidden sm:inline">|</span>
            <div className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
              <i className="fa-solid fa-shield-halved text-emerald-600"></i>
              <span id="googleReviewsCountText">
                <span className="pulse-dot mr-1"></span>
                <span ref={reviewsCount.ref} className="tabular-nums">
                  {reviewsCount.display}
                </span>{' '}
                {t('reviews_verified_count_text')}
              </span>
            </div>
          </div>
        </Reveal>

        {/* Real Testimonial Cards Grid */}
        <div id="googleReviewsGrid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonialsToDisplay.slice(0, 6).map((rev, index) => (
            <Reveal key={rev.id} delay={Math.min(index * 80, 320)}>
            <div className="google-review-card group hover:border-goldPrimary transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-11 h-11 rounded-full ${
                      rev.avatarBg || 'bg-medicalTeal'
                    } text-white font-bold flex items-center justify-center text-sm shadow-sm border-2 border-white`}
                  >
                    {rev.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-deepSlate leading-snug flex items-center gap-1.5">
                      {rev.authorName}
                      <i className="fa-solid fa-circle-check text-[0.7rem] text-emerald-600" title="Patient vérifié"></i>
                    </h4>
                    <div className="flex items-center gap-1.5 text-[0.7rem] text-slate-400 mt-0.5">
                      <span>{rev.relativeTime}</span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1 text-slate-500 font-medium">
                        <GoogleLogo className="w-3 h-3" />
                        {t('reviews_verified_tag')}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="stars-gold text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <i
                      key={i}
                      className={i < rev.rating ? 'fa-solid fa-star text-xs' : 'fa-regular fa-star text-xs'}
                    ></i>
                  ))}
                </div>
              </div>

              {/* Treatment Tag */}
              <div className="mb-3">
                <span className="inline-block px-2.5 py-1 rounded-full text-[0.7rem] font-semibold bg-medicalTeal/10 text-medicalTeal">
                  {rev.treatment}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic flex-grow">
                « {rev.text} »
              </p>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[0.72rem] text-slate-400">
                <span className="text-emerald-700 font-semibold flex items-center gap-1">
                  <i className="fa-solid fa-circle-check text-[0.65rem]"></i> {t('reviews_source')}
                </span>
                <a
                  href={reviewsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-medicalTeal flex items-center gap-1 font-medium text-slate-500"
                >
                  {t('reviews_profile_link')} <i className="fa-solid fa-arrow-up-right-from-square text-[0.6rem]"></i>
                </a>
              </div>
            </div>
            </Reveal>
          ))}
        </div>

        {/* Reviews Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            id="seeAllGoogleReviewsBtn"
            href={reviewsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-google"
          >
            <GoogleLogo className="w-4 h-4" />
            <span>{t('reviews_all_cta')}</span>
            <i className="fa-solid fa-arrow-up-right-from-square text-xs text-slate-400"></i>
          </a>

          <a
            id="writeGoogleReviewBtn"
            href={writeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-xs px-6 py-2.5"
          >
            <i className="fa-regular fa-pen-to-square text-goldDark"></i>
            <span>{t('reviews_write_cta')}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
