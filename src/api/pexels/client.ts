import { createClient } from "pexels";
import { useMemo } from "react";

const API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY || "";

export type PexelsClient = ReturnType<typeof createClient>;

export const createPexelsClient = (): PexelsClient => createClient(API_KEY);

export const usePexelsClient = (): PexelsClient =>
  useMemo(createPexelsClient, []);
