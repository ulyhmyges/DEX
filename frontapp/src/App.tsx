import Routing from "./Routing";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from './config/wagmi-config'

 // Set up a React Query client.
 const queryClient = new QueryClient()

export default function App() {
  return (
    <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
            <Routing />
        </QueryClientProvider>
    </WagmiProvider>
  );
}
