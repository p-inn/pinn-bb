import { User } from '@/types/user';
import { create } from 'zustand';

type AuthStore = {
  user: User | null;
  setUser: (user: User | null) => void;
  clearUser: (user: User | null) => void;
  isLoggedIn: boolean;
  isAuthReady: boolean;
  setIsLoggedIn: (v: boolean) => void;
  setAuthReady: (ready: boolean) => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  setUser: (user) => set({ user, isLoggedIn: !!user }),
  clearUser: () => set({ user: null }),
  isLoggedIn: false,
  isAuthReady: false,
  setIsLoggedIn: (v) => set({ isLoggedIn: v }),
  setAuthReady: (ready) => set({ isAuthReady: ready }),  
}));
