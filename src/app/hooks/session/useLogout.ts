import useSessionStore from '../session/sessionStore';
import useWeb3Auth from '../web3auth/useWeb3Auth';

export const useLogout = () => {
  const web3Auth = useWeb3Auth();
  const setSession = useSessionStore((state) => state.setSession);

  const logout = async () => {
    if (web3Auth) {
      if (!web3Auth.connected) {
        throw "Logout only possible for logged in user";
        // await web3Auth.connect();
      }

      await web3Auth.logout();
      setSession(null);
    }
  };

  return { logout };
};
