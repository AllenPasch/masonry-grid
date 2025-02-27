import { createClient } from "pexels";

const API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY || "";

export type PexelsClient = ReturnType<typeof createClient>;

export const createPexelsClient = (): PexelsClient => createClient(API_KEY);
