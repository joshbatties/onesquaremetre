import { HeroParallax } from "@/components/ui/hero-parallax";

const products = [
  {
    title: "Timber 2",
    link: "/timber2",
    thumbnail: "/images/timber2.jpeg",
  },
  {
    title: "Timber 3",
    link: "/timber3",
    thumbnail: "/images/timber3.webp",
  },
  {
    title: "Timber 4",
    link: "/timber4",
    thumbnail: "/images/timber4.jpg",
  },
  {
    title: "Timber 5",
    link: "/timber5",
    thumbnail: "/images/timber5.jpg",
  },
  {
    title: "Timber 6",
    link: "/timber6",
    thumbnail: "/images/timber6.jpg",
  },
  {
    title: "Timber 7",
    link: "/timber7",
    thumbnail: "/images/timber7.jpg",
  },
  {
    title: "Timber 8",
    link: "/timber8",
    thumbnail: "/images/timber8.jpg",
  },
  {
    title: "Timber 9",
    link: "/timber9",
    thumbnail: "/images/timber9.jpg",
  },
  {
    title: "Timber 10",
    link: "/timber10",
    thumbnail: "/images/timber10.jpeg",
  },
  {
    title: "Timber 11",
    link: "/timber11",
    thumbnail: "/images/timber11.jpg",
  },
  {
    title: "Timber 12",
    link: "/timber12",
    thumbnail: "/images/timber12.jpg",
  },
  {
    title: "Timber 13",
    link: "/timber13",
    thumbnail: "/images/timber13.jpg",
  },
  {
    title: "Timber 14",
    link: "/timber14",
    thumbnail: "/images/timber14.jpg",
  },
  {
    title: "Timber 15",
    link: "/timber15",
    thumbnail: "/images/timber15.webp",
  },
  {
    title: "Timber 16",
    link: "/timber16",
    thumbnail: "/images/timber16.webp",
  },
  {
    title: "Timber 17",
    link: "/timber17",
    thumbnail: "/images/timber17.jpg",
  },
  {
    title: "Timber 18",
    link: "/timber18",
    thumbnail: "/images/timber18.jpg",
  },
  {
    title: "Timber 19",
    link: "/timber19",
    thumbnail: "/images/timber19.jpg",
  },
  {
    title: "Timber 20",
    link: "/timber20",
    thumbnail: "/images/timber20.jpg",
  },
];

export default function Home() {
  return (
    <main>
      <HeroParallax products={products} />
    </main>
  )
}