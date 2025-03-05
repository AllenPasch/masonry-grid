import {
  dehydrate,
  HydrationBoundary,
  type DehydratedState,
} from "@tanstack/react-query";

import { getPhotosQueryOptions } from "~/api/pexels";
import { queryClient } from "~/api/query";

import MasonryGridContainer from "~/layout/grid/MasonryGrid.container";

interface IMetaPropsLocation {
  readonly search: string;
}

interface IMetaProps {
  readonly location: IMetaPropsLocation;
}

export const meta = ({ location: { search } }: IMetaProps) => {
  const searchQuery = search && new URLSearchParams(search).get("search");

  return [
    {
      title: searchQuery
        ? `${searchQuery} | Search Masonry Grid`
        : "Masonry Grid",
    },
    {
      name: "description",
      content: "Responsive masonry grid, with performance optimizations.",
    },
  ];
};

export const loader = async (): Promise<DehydratedState> => {
  const photosQueryOptions = getPhotosQueryOptions(1, "");
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
