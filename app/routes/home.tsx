import type { Route } from "./+types/home";
import MasonryGridContainer from "~/layout/MasonryGrid.container";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Masonry Grid" },
    {
      name: "description",
      content: "Responsive masonry grid, with performance optimizations.",
    },
  ];
}

export default function Home() {
  return <MasonryGridContainer />;
}
