import { createClient } from "pexels";

const API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY || "";

const createPexelsClient = () => createClient(API_KEY);

export default createPexelsClient;
