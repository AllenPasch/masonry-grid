import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import type { DehydratedState } from "@tanstack/react-query";

import { createPexelsClient, getPhotosQueryOptions } from "~/api/pexels";
import { queryClient } from "~/api/query";
import MasonryGridContainer from "~/layout/grid/MasonryGrid.container";

export const meta = () => [
  { title: "Masonry Grid" },
  {
    name: "description",
    content: "Responsive masonry grid, with performance optimizations.",
  },
];

export const loader = async (): Promise<DehydratedState> => {
  const pexelsClient = createPexelsClient();
  const photosQueryOptions = getPhotosQueryOptions(pexelsClient, 1, "");
  await queryClient.prefetchQuery(photosQueryOptions);

  return dehydrate(queryClient);
};

interface IProps {
  readonly loaderData?: DehydratedState;
}

const Home = ({ loaderData }: IProps) => (
  <HydrationBoundary state={loaderData}>
    <MasonryGridContainer />
  </HydrationBoundary>
);

export default Home;
