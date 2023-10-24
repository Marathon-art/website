import { useEffect, useState } from 'react';
import { useWeb3Auth } from './useWeb3Auth';



const useWeb3AuthLogin = () => {
  const web3auth = useWeb3Auth();

  const [userInfo, setUserInfo] = useState<object | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {

        if (web3auth.connected) {
          console.log('connected');
          const result = await web3auth.getUserInfo();
          setUserInfo(result);
        }
        console.log('not connected');
      } catch (e) {
        console.log('error');
        setError(e as Error);
      }
    };

    fetchData();
  }, [web3auth.connected]);


  return { userInfo, error };
};

export default useWeb3AuthLogin;
