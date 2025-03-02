import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router";

import { ReducerProvider } from "~/reducer";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <ReducerProvider>
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </ReducerProvider>
  );
};
