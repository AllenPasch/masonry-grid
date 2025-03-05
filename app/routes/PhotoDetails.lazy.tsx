import { Suspense, lazy } from "react";

import { type IProps } from "./PhotoDetails";

export const meta = () => [
  { title: "Photo Details" },
  {
    name: "description",
    content: "Responsive masonry grid, with performance optimizations.",
  },
];

const PhotoDetails = lazy(() => import("./PhotoDetails"));

const PhotoDetailsLazy = (props: IProps) => (
  <Suspense>
    <PhotoDetails {...props} />
  </Suspense>
);

export default PhotoDetailsLazy;
