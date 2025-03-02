import { index, route } from "@react-router/dev/routes";
import type { RouteConfig } from "@react-router/dev/routes";

const config: RouteConfig = [
  index("routes/home.tsx"),

  route("photo/:photoId", "./routes/PhotoDetails.lazy.tsx"),
];

export default config;
