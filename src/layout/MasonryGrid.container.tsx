import { memo, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";

import createPexelsClient from "@/api/pexels/createPexelsClient";
import MasonryGrid from "./MasonryGrid";

const MasonryGridContainer = () => {
  const pexelsClient = useMemo(createPexelsClient, []);
  const query = useQuery({
    queryKey: ["curated"],
    queryFn: () => pexelsClient.photos.curated(),
  });

  console.log("query", query);

  return <MasonryGrid />;
};

export default memo(MasonryGridContainer);
