import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button, Snackbar } from 'react-native-paper';
import { getDatabase, ref, set, onValue } from 'firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAuth } from 'firebase/auth';
import { app } from '../../services/firebase.config'; 
import { useNavigation } from '@react-navigation/native';

const db = getDatabase(app);
const auth = getAuth(app);

const StockManagerScreen = () => {
  const [packageName, setPackageName] = useState('');
  const [packageQuantity, setPackageQuantity] = useState('');
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [selectedPackageId, setSelectedPackageId] = useState<string | null>(null);

  const navigation = useNavigation<any>();

  useEffect(() => {
    const getSelectedPackage = async () => {
      const id = await AsyncStorage.getItem('selectedPackageId');
      if (id) {
        setSelectedPackageId(id);
        const dbRef = ref(db, `diapers/${id}`);
        onValue(dbRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            setPackageName(data.packageName);
            setPackageQuantity(data.quantity.toString());
          }
        });
      }
    };

    getSelectedPackage();

    return () => {
      AsyncStorage.removeItem('selectedPackageId');
      setSelectedPackageId(null);
    };
  }, []);

  const handleSavePackage = async () => {
    if (!packageName || !packageQuantity) {
      setSnackbarMessage('Por favor, preencha todos os campos.');
      setSnackbarVisible(true);
      return;
    }

    const newPackageRef = ref(db, `diapers/${selectedPackageId || Date.now()}`); 
    await set(newPackageRef, {
      packageName,
      quantity: parseInt(packageQuantity, 10),
    });

    setSnackbarMessage('Pacote salvo com sucesso!');
    setSnackbarVisible(true);

    setPackageName('');
    setPackageQuantity('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{selectedPackageId ? 'Editar Pacote' : 'Adicionar Pacote'}</Text>
      <TextInput
        label="Nome do Pacote"
        value={packageName}
        onChangeText={setPackageName}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Quantidade"
        value={packageQuantity}
        onChangeText={setPackageQuantity}
        keyboardType="numeric"
        mode="outlined"
        style={styles.input}
      />
      <Button mode="contained" onPress={handleSavePackage} style={styles.button}>
        {selectedPackageId ? 'Salvar Alterações' : 'Adicionar Pacote'}
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
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
  },
});

export default StockManagerScreen;
