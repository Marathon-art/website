"use client";

import { Web3AuthProvider } from "./Web3AuthProvider";

export function SessionInitializer({ children }: { children: React.ReactNode }) {
  
    return (
        <Web3AuthProvider>
            {children}
        </Web3AuthProvider>
    );
}