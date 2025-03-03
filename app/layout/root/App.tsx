import { QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router";

import { queryClient } from "~/api/query";
import { ReducerProvider } from "~/reducer";

export const App = () => {
  return (
    <ReducerProvider>
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </ReducerProvider>
  );
};
