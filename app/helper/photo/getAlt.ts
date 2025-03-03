import { IPhoto } from "~/api/pexels";

export const getAlt = ({ alt, photographer }: IPhoto): string => {
    const altTrimmed = alt?.trim();
    if (altTrimmed) {
        return altTrimmed;
    }

    const photographerTrimmed = photographer?.trim();
    if (photographerTrimmed) {
        return `by ${photographerTrimmed}`;
    }

    return "photo";
};
