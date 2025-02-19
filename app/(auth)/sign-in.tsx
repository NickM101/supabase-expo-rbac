import { View, Pressable, StyleSheet } from 'react-native'
import { Text } from '../../components/Themed'
import { useUserStore } from '../../store/user-store'
import { router } from 'expo-router'

export default function SignInScreen() {
  const signIn = useUserStore((state) => state.signIn)

  const handleSignIn = (role: 'admin' | 'manager' | 'user') => {
    signIn(role)
    
    switch (role) {
      case 'admin':
        router.replace('/(admin)')
        break
      case 'manager':
        router.replace('/(manager)')
        break
      case 'user':
        router.replace('/(user)')
        break
    }
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={() => handleSignIn('admin')}>
        <Text style={styles.buttonText}>Sign in as Admin</Text>
      </Pressable>
      
      <Pressable style={styles.button} onPress={() => handleSignIn('manager')}>
        <Text style={styles.buttonText}>Sign in as Manager</Text>
      </Pressable>
      
      <Pressable style={styles.button} onPress={() => handleSignIn('user')}>
        <Text style={styles.buttonText}>Sign in as User</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    gap: 16,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
})