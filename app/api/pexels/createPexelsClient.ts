import { createClient } from "pexels";

import type { IPexelsClient } from ".";

const API_KEY = "Wl625FbEMi8baAcukGYVxcpA7IIT6rISToHSNNxzoLsvNuO9MNs5K9p6";

export const createPexelsClient = (): IPexelsClient => createClient(API_KEY);
