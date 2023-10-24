import { useWeb3Auth } from "./useWeb3Auth";

const clientId = process.env.WEB3_AUTH_CLIENT_ID || "";

export async function useWeb3AuthLogin() {
    console.log('web3auth with clientId', clientId);
    const web3auth = useWeb3Auth();

    await web3auth.initModal();
    await web3auth.connect();
};



