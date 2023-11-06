import { create } from 'zustand'
import Session from './Session';

type SessionState = {
  isInitialized: boolean;
  // isConnected: boolean;
  session: Session | null;
  initialize: () => void;
  setSession: (session: Session | null) => void;
};

// const useSessionStore = create<SessionState>((set) => ({
//   isInitialized: false,
//   isConnected: false,
//   session: null,
//   initialize: () => {
//     set({ isInitialized: true });
//   },
//   connect: (session: Session) => {
//     set({ isConnected: true, session });
//   },
// }));



const useSessionStore = create<SessionState>((set) => ({
  session: null,
  isInitialized: false,
  initialize: () =>set({ isInitialized: true }),
  setSession: (session: Session | null) => set({ session }),
}));


export default useSessionStore;