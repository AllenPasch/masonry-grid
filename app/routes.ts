import { index, route } from "@react-router/dev/routes";
import type { RouteConfig } from "@react-router/dev/routes";

const config: RouteConfig = [
  route("*", "routes/NotFound.tsx"),

  index("routes/Home.tsx"),
];

export default config;
