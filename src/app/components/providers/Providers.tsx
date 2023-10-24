"use client";

import { Web3AuthProvider } from "./Web3AuthProvider";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <Web3AuthProvider>
            {children}
        </Web3AuthProvider>
    );
}