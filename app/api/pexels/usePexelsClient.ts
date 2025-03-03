import { useMemo } from "react";

import { createPexelsClient } from ".";
import type { IPexelsClient } from ".";

export const usePexelsClient = (): IPexelsClient =>
  useMemo(createPexelsClient, []);
