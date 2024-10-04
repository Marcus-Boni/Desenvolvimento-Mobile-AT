import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Appbar,
  Switch,
  List,
  TextInput,
  Button,
  Snackbar
} from 'react-native-paper';

const SettingsScreen = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleThemeToggle = () => {
    setIsDarkTheme(!isDarkTheme);
    setSnackbarMessage(`Tema ${isDarkTheme ? 'claro' : 'escuro'} ativado!`);
    setSnackbarVisible(true);
  };

  const handlePasswordChange = () => {
    setSnackbarMessage('Senha alterada com sucesso!');
    setSnackbarVisible(true);
    setNewPassword('');
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Configurações" />
      </Appbar.Header>

      <List.Section>
        <List.Item
          title="Tema Escuro"
          right={() => (
            <Switch value={isDarkTheme} onValueChange={handleThemeToggle} />
          )}
        />

        <List.Item
          title="Notificações"
          right={() => <Switch value={true} onValueChange={() => {}} />}
        />

        <List.Item
          title="Alterar Senha"
          description="Digite sua nova senha"
          right={() => (
            <TextInput
              label="Nova Senha"
              value={newPassword}
              onChangeText={setNewPassword}
              secureTextEntry
              style={styles.input}
            />
          )}
        />
      </List.Section>

      <Button
        mode="contained"
        onPress={handlePasswordChange}
        style={styles.button}
      >
        Alterar Senha
      </Button>

      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000}
      >
        {snackbarMessage}
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  input: {
    width: '100%',
    marginVertical: 8
  },
  button: {
    marginTop: 16
  }
});

export default SettingsScreen;
