import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button, ActivityIndicator, Snackbar } from 'react-native-paper';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase.config';
import { useNavigation } from '@react-navigation/native';
import ForgotPasswordModal from '@/components/forgotPassword/ForgotPasswordModal';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation<any>();

  const handleLogin = async () => {
    if (!email || !password) {
      setSnackbarVisible(true);
      return;
    }

    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSnackbarVisible(true);
      setTimeout(() => {
        navigation.navigate('index'); 
      }, 3000);
    } catch (error) {
      console.error(error);
      setSnackbarVisible(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        label="Senha"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />

      {loading ? (
        <ActivityIndicator animating={true} size="large" />
      ) : (
        <Button mode="contained" onPress={handleLogin} style={styles.button}>
          Entrar
        </Button>
      )}

      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000}
      >
        Login bem-sucedido! Redirecionando...
      </Snackbar>

      <Button mode="text" onPress={() => navigation.navigate('register')} style={styles.link}>
        Não tem uma conta? Registre-se
      </Button>

      <Button onPress={() => setModalVisible(true)}>Esqueci minha senha</Button>
      
      <ForgotPasswordModal 
        visible={modalVisible} 
        onClose={() => setModalVisible(false)} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3b5998',
    textAlign: 'center',
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
    paddingVertical: 10,
    backgroundColor: '#3b5998',
  },
  link: {
    marginTop: 20,
    textAlign: 'center',
  },
});
