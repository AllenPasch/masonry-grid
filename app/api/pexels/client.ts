import { createClient } from "pexels";
import { useMemo } from "react";

const API_KEY = "Wl625FbEMi8baAcukGYVxcpA7IIT6rISToHSNNxzoLsvNuO9MNs5K9p6";

type PexelsClient = ReturnType<typeof createClient>;

const createPexelsClient = (): PexelsClient => createClient(API_KEY);

export const usePexelsClient = (): PexelsClient =>
  useMemo(createPexelsClient, []);
