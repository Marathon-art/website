// // hooks/useSessionState.js
// import { useEffect } from 'react';
// import useWeb3Auth from '../web3auth/useWeb3Auth';
// import useSessionStore from './sessionStore';
// import RPC from "web3"; // for using web3.js


// export const useSessionState = () => {
//   const web3Auth = useWeb3Auth();
//   const setSession = useSessionStore((state) => state.setSession);

//   useEffect(() => {
//     const fetchSession = async () => {
//       console.log('fetchSession');
//       if (web3Auth && web3Auth.connected) {
//         console.log('lezz go');
        
//         const userInfo = await web3Auth.getUserInfo();
//         const provider = web3Auth.provider;
//         if (provider) {
//           const rpc = new RPC(provider); // Initialize your RPC
//           const account = rpc.defaultAccount;

//           setSession({
//             name: userInfo.name || '',
//             image: userInfo.profileImage || null,
//             address: account || '',
//           });
//         }
//       } else {
//         console.log('setSession(null)');
//         setSession(null);
//       }
//     };

//     fetchSession();
//   }, [web3Auth]);

//   const connectWeb3Auth = async () => {
//     if (web3Auth) {
//       console.log('connect');
//       await web3Auth.connect();

//       console.log('connected', web3Auth.connected);
//     }
//   };

//   return { connectWeb3Auth };
// };
