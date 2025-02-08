import { create } from 'zustand'
import { account } from '@/appwrite/config'

interface AuthState {
  user: any
  fetchUser: () => Promise<void>
  logout: () => Promise<void>
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,

  fetchUser: async () => {
    try {
      const user = await account.get()
      set({ user })
    } catch {
      set({ user: null })
    }
  },

  logout: async () => {
    await account.deleteSession('current')
    set({ user: null })
  }
}))
