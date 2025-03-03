import MasonryGridContainer from "~/layout/grid/MasonryGrid.container";

export const meta = () => [
  { title: "Masonry Grid" },
  {
    name: "description",
    content: "Responsive masonry grid, with performance optimizations.",
  },
];

const Home = () => <MasonryGridContainer />;

export default Home;
