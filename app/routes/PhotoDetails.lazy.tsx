import { Suspense, lazy } from "react";

import type { IProps } from "./PhotoDetails";

export const TITLE = "Photo Details";

export const meta = () => [{ title: TITLE }];

const PhotoDetails = lazy(() => import("./PhotoDetails"));

const PhotoDetailsLazy = (props: IProps) => (
  <Suspense>
    <PhotoDetails {...props} />
  </Suspense>
);

export default PhotoDetailsLazy;
