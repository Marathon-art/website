import { useEffect } from 'react';
import useSessionStore from './sessionStore';
import useWeb3Auth from '../web3auth/useWeb3Auth';
import useWeb3AuthSession from '../web3auth/useWeb3AuthSession';
import { retrieveSession } from './retrieveSession';


const useSession = () => {
  console.log('use session');
  const { isInitialized, session, initialize, setSession } = useSessionStore();


  useEffect(() => {
    const initSession = async () => {
      if (!isInitialized) {
        console.log('initSession');
        try {
          const web3Auth = useWeb3Auth();
          await web3Auth?.initModal();

          if (web3Auth?.connected) {
            const session = await retrieveSession(web3Auth);
            setSession(session);
          }

          initialize();
        } catch (error) {
          console.error("Initialization failed:", error);
        }
      }
      console.log('already initialized');
    };

    initSession();
  }, [isInitialized, session, initialize, setSession]);


  return session;
};

export default useSession;
