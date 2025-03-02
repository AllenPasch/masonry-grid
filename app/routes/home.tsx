import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

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
  return <Welcome />;
}
