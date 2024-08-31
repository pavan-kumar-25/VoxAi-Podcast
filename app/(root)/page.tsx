"use client";
import PodcastCard from '@/components/PodcastCard';
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import LoaderSpinner from '@/components/LoaderSpinner';
// import { ID } from 'convex'; // Make sure to import the correct type if needed

const Home = () => {
  // Fetch trending podcasts from the database
  const trendingPodcasts = useQuery(api.podcasts.getTrendingPodcasts);

  const demoPodcasts = [
    {
      _id: "demo1" ,
      podcastTitle: "The AI Revolution",
      podcastDescription: "Exploring the impact of AI on modern society.",
      imageUrl: "/demo1.jpeg",
    },
    {
      _id: "demo2" ,
      podcastTitle: "Tech Trends",
      podcastDescription: "Latest updates in the world of technology.",
      imageUrl: "/demo2.jpeg",
    },
    {
      _id: "demo3" ,
      podcastTitle: "Health Matters",
      podcastDescription: "Understanding mental health and well-being.",
      imageUrl: "/demo3.jpeg",
    },
  ];

  if (!trendingPodcasts) return <LoaderSpinner />;

  // Use demo podcasts if there are no podcasts in the database
  const podcastsToShow = trendingPodcasts.length > 0 ? trendingPodcasts : demoPodcasts;

  return (
    <div className="mt-9 flex flex-col gap-9 md:overflow-hidden">
      <section className='flex flex-col gap-5'>
        <h1 className="text-20 font-bold text-white-1">Trending Podcasts</h1>

        <div className="podcast_grid">
          {podcastsToShow.map(({ _id, podcastTitle, podcastDescription, imageUrl }) => (
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
  );
}

export default Home;
