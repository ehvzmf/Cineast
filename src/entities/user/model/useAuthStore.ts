import { create } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  user: { name: string; avatar: string } | null;
  login: (user: { name: string; avatar: string }) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: (user) => set({ isAuthenticated: true, user }),
  logout: () => set({ isAuthenticated: false, user: null }),
}));
