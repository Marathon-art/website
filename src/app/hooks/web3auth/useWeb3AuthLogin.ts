import { retrieveSession } from '../session/retrieveSession';
import useSessionStore from '../session/sessionStore';
import useWeb3Auth from './useWeb3Auth';
import RPC from "web3"; // for using web3.js

export const useWeb3AuthLogin = () => {
  const web3Auth = useWeb3Auth();
  const setSession = useSessionStore((state) => state.setSession);

  const login = async () => {
    console.log('logging in then with web3Auth', web3Auth);
    console.log('web3Auth is connected', web3Auth?.connected);
    if (web3Auth) {
      if (!web3Auth.connected) {
        await web3Auth.connect();
      }

      const session = await retrieveSession(web3Auth);
      setSession(session);
    }
  };

  return { login };
};
