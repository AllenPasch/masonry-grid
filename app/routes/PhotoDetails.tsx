import DetailsContainer from "~/layout/details/Details.container";

export interface IProps {
  readonly params: {
    readonly photoId: string;
  };
}

const PhotoDetails = ({ params: { photoId } }: IProps) => (
  <DetailsContainer photoId={Number(photoId)} />
);

export default PhotoDetails;
