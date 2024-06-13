import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const QueryClientSetup = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryClientSetup;
