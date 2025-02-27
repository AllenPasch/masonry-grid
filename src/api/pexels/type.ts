import type { Photo as MutablePhoto, Photos as MutablePhotos } from "pexels";
import { DeepReadonly } from "utility-types";

export type Photo = DeepReadonly<MutablePhoto>;
export type Photos = DeepReadonly<MutablePhotos>;
