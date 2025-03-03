import { QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router";

import { queryClient } from "~/api/query";

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
};
