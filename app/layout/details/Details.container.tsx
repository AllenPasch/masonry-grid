import { memo } from "react";

import { usePhoto } from "~/api/pexels";

import Details from "./Details";

interface IProps {
  readonly photoId: number;
}

const DetailsContainer = ({ photoId }: IProps) => {
  const { data: photo } = usePhoto(photoId);

  return photo && <Details photo={photo} />;
};

export default memo(DetailsContainer);
