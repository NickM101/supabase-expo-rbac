import { create } from 'zustand'

type UserRole = 'admin' | 'manager' | 'user'

interface UserState {
  isAuthenticated: boolean
  role: UserRole | null
  signIn: (role: UserRole) => void
  signOut: () => void
}

export const useUserStore = create<UserState>((set) => ({
  isAuthenticated: false,
  role: null,
  signIn: (role) => set({ isAuthenticated: true, role }),
  signOut: () => set({ isAuthenticated: false, role: null }),
}))