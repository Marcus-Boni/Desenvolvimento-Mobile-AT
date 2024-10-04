import React, { useState } from 'react';
import { View, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { Text, TextInput, Button, IconButton, useTheme, Snackbar } from 'react-native-paper';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'; 
import { app } from '../../services/firebase.config'; 

type ForgotPasswordModalProps = {
  visible: boolean;
  onClose: () => void;
};

export default function ForgotPasswordModal({ visible, onClose }: ForgotPasswordModalProps) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const theme = useTheme();
  const auth = getAuth(app); 

  const handlePasswordReset = async () => {
    if (!email) {
      setSnackbarMessage('Por favor, insira um e-mail válido.');
      setSnackbarVisible(true);
      return;
    }

    setLoading(true);

    try {
      await sendPasswordResetEmail(auth, email); 
      setSnackbarMessage('E-mail de recuperação enviado!');
    } catch (error) {
      setSnackbarMessage('Erro ao enviar o e-mail. Verifique o endereço.');
    } finally {
      setSnackbarVisible(true);
      setLoading(false);
    }
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={[styles.modalContent, { backgroundColor: theme.colors.background }]}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <IconButton icon="close" size={24} />
          </TouchableOpacity>
          
          <Text style={styles.title}>Esqueci minha senha</Text>
          <Text style={styles.description}>
            Insira seu e-mail abaixo para receber um link de recuperação de senha.
          </Text>
          
          <TextInput
            label="E-mail"
            mode="outlined"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
            keyboardType="email-address"
          />

          <Button
            mode="contained"
            onPress={handlePasswordReset}
            loading={loading}
            disabled={loading}
            style={styles.button}
          >
            Enviar e-mail de recuperação
          </Button>
        </View>

        <Snackbar
          visible={snackbarVisible}
          onDismiss={() => setSnackbarVisible(false)}
          duration={3000}
        >
          {snackbarMessage}
        </Snackbar>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    padding: 20,
  },
  modalContent: {
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    marginBottom: 20,
  },
  button: {
    paddingVertical: 10,
  },
});
