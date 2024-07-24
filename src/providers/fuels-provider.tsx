import React, { ReactNode, useEffect } from 'react'
import { FuelProvider } from "@fuels/react"
import { defaultConnectors } from "@fuels/connectors"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function FuelsProvider({children}: {children:ReactNode}) {
    let fuelConfig: FuelConfig = {};
    const queryClient: QueryClient = new QueryClient();

    useEffect(() => {
      fuelConfig = {
        connectors: defaultConnectors(),
      };
    }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <FuelProvider
        fuelConfig={fuelConfig}
      >
        {children}
      </FuelProvider>
    </QueryClientProvider>
  );
}