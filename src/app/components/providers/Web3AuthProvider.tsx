import { Web3Auth } from '@web3auth/modal';
import React from 'react';
import LoadingSpinner from '../state/LoadingSpinner';

export const Web3AuthContext = React.createContext<Web3Auth | null>(null);

interface Web3AuthProviderProps {
    children: React.ReactNode;
}

export const Web3AuthProvider = ({ children }: Web3AuthProviderProps) => {
    const [web3Auth, setWeb3Auth] = React.useState<Web3Auth | null>(null);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        setIsLoading(false);
        const clientId = process.env.WEB3_AUTH_CLIENT_ID || "";
        console.log('init Web3Auth with clientId', clientId);

        const web3auth = new Web3Auth({
            clientId: clientId,
            web3AuthNetwork: "sapphire_mainnet",
            chainConfig: {
                chainNamespace: "eip155",
                tickerName: "Ethereum",
                displayName: "Base Goerli", //	"Base Sepolia"
                rpcTarget: "https://goerli.base.org",//	"https://sepolia.base.org"
                chainId: "0x14a33", //84531,	// "0x14a34" 84532
                ticker: "ETH",
                blockExplorer: "https://goerli.basescan.org/", //	"https://sepolia-explorer.base.org/"
            },
        });

        setWeb3Auth(web3auth);
    }, []);

    if (isLoading) {
        return <div className='global-container'>
            <LoadingSpinner />
        </div>;
    }

    return (
        <Web3AuthContext.Provider value={web3Auth} >
            {children}
        </Web3AuthContext.Provider>
    );
};
