import { createClient } from "pexels";

const API_KEY = "Wl625FbEMi8baAcukGYVxcpA7IIT6rISToHSNNxzoLsvNuO9MNs5K9p6";

type IPexelsClient = ReturnType<typeof createClient>;

export const pexelsClient: IPexelsClient = createClient(API_KEY);
