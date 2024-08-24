"use client";
import PodcastCard from '@/components/PodcastCard'
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import LoaderSpinner from '@/components/LoaderSpinner';

const Home = () => {
  // Fetch trending podcasts from the database
  const trendingPodcasts = useQuery(api.podcasts.getTrendingPodcasts);

  // Define some demo podcasts to display
  const demoPodcasts = [
    {
      _id: '1',
      podcastTitle: 'Demo Podcast 1',
      podcastDescription: 'This is the first demo podcast description.',
      imageUrl: '',
    },
    {
      _id: '2',
      podcastTitle: 'Demo Podcast 2',
      podcastDescription: 'This is the second demo podcast description.',
      imageUrl: '/path/to/demo-image2.jpg',
    },
    {
      _id: '3',
      podcastTitle: 'Demo Podcast 3',
      podcastDescription: 'This is the third demo podcast description.',
      imageUrl: '/path/to/demo-image3.jpg',
    },
  ];

  // Combine demo podcasts with fetched trending podcasts
  const allPodcasts = trendingPodcasts ? [...trendingPodcasts, ...demoPodcasts] : demoPodcasts;

  if(!trendingPodcasts && !demoPodcasts) return <LoaderSpinner />

  return (
    <div className="mt-9 flex flex-col gap-9 md:overflow-hidden">
      <section className='flex flex-col gap-5'>
        <h1 className="text-20 font-bold text-white-1">Trending Podcasts</h1>

        <div className="podcast_grid">
          {allPodcasts.map(({ _id, podcastTitle, podcastDescription, imageUrl }) => (
            <PodcastCard 
              key={_id}
              imgUrl={imageUrl as string}
              title={podcastTitle}
              description={podcastDescription}
              podcastId={_id}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home;
