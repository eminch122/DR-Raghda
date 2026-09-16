import { NextResponse } from 'next/server';
import { siteConfig } from '@/data/siteConfig';
import { curatedReviews } from '@/data/reviews';

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = siteConfig.google.placeId;

  const fallback = {
    rating: 4.9,
    userRatingCount: 146,
    reviews: null,
    testimonials: curatedReviews,
    googleMapsLinks: {
      reviewsUri: siteConfig.google.allReviewsUrl,
      writeAReviewUri: siteConfig.google.writeReviewUrl,
    },
  };

  if (!apiKey) {
    return NextResponse.json(fallback);
  }

  try {
    const apiUrl = `https://places.googleapis.com/v1/places/${placeId}?key=${apiKey}&fields=id,displayName,formattedAddress,rating,userRatingCount,reviews,googleMapsLinks`;
    const res = await fetch(apiUrl, {
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(3000),
    });

    let liveRating = 4.9;
    let liveCount = 146;
    const liveLinks = {
      reviewsUri: siteConfig.google.allReviewsUrl,
      writeAReviewUri: siteConfig.google.writeReviewUrl,
    };
    let returnedReviews: unknown[] = [];

    if (res.ok) {
      const data = await res.json();

      if (data.rating) liveRating = Number(data.rating);
      if (data.userRatingCount) liveCount = Number(data.userRatingCount);
      if (data.googleMapsLinks?.reviewsUri) liveLinks.reviewsUri = data.googleMapsLinks.reviewsUri;
      if (data.googleMapsLinks?.writeAReviewUri) liveLinks.writeAReviewUri = data.googleMapsLinks.writeAReviewUri;

      if (data.reviews && Array.isArray(data.reviews) && data.reviews.length > 0) {
        returnedReviews = data.reviews;
      }
    } else {
      console.warn('[Google Places API Debug] API returned status:', res.status, res.statusText);
    }

    return NextResponse.json(
      {
        rating: liveRating,
        userRatingCount: liveCount,
        reviews: returnedReviews.length > 0 ? returnedReviews : null,
        testimonials: curatedReviews,
        googleMapsLinks: liveLinks,
      },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        },
      }
    );
  } catch (error) {
    console.error('[Google Places API Debug] Error fetching places reviews:', error);
    return NextResponse.json(fallback);
  }
}