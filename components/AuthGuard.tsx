import { useEffect } from 'react'
import { useUserStore } from '../store/user-store'
import { router } from 'expo-router'

interface AuthGuardProps {
  requiredRole: 'admin' | 'manager' | 'user'
  children: React.ReactNode
}

export function AuthGuard({ requiredRole, children }: AuthGuardProps) {
  const { isAuthenticated, role } = useUserStore()

  useEffect(() => {
    if (!isAuthenticated || role !== requiredRole) {
      router.replace('/(auth)/sign-in')
    }
  }, [isAuthenticated, role, requiredRole])

  if (!isAuthenticated || role !== requiredRole) {
    return null
  }

  return <>{children}</>
}