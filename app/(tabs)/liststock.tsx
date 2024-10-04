import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Appbar, List, Button, Snackbar, Modal, Portal, TextInput } from 'react-native-paper';
import { getDatabase, ref, onValue, remove, set } from 'firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { app } from '../../services/firebase.config'; 

const db = getDatabase(app);

const PackageListScreen = () => {
  const [packages, setPackages] = useState<any[]>([]);
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [editedPackageName, setEditedPackageName] = useState('');
  const [editedPackageQuantity, setEditedPackageQuantity] = useState('');

  useEffect(() => {
    const packagesRef = ref(db, 'diapers');
    onValue(packagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const packagesArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setPackages(packagesArray);
      }
    });
  }, []);

  const handleEditPackage = (pkg: any) => {
    setSelectedPackage(pkg);
    setEditedPackageName(pkg.packageName);
    setEditedPackageQuantity(pkg.quantity.toString());
    setModalVisible(true);
  };

  const handleSaveEditedPackage = async () => {
    if (!editedPackageName || !editedPackageQuantity) {
      setSnackbarMessage('Por favor, preencha todos os campos.');
      setSnackbarVisible(true);
      return;
    }

    const updatedPackageRef = ref(db, `diapers/${selectedPackage.id}`);
    await set(updatedPackageRef, {
      packageName: editedPackageName,
      quantity: parseInt(editedPackageQuantity, 10),
    });

    setSnackbarMessage('Pacote atualizado com sucesso!');
    setSnackbarVisible(true);
    setModalVisible(false);
  };

  const handleRemovePackage = async (id: string) => {
    await remove(ref(db, `diapers/${id}`));
    setSnackbarMessage('Pacote removido com sucesso!');
    setSnackbarVisible(true);
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Lista de Pacotes" />
      </Appbar.Header>
      <FlatList
        data={packages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <List.Item
            title={item.packageName}
            description={`Quantidade: ${item.quantity}`}
            right={props => (
              <>
                <Button onPress={() => handleEditPackage(item)}>Editar</Button>
                <Button onPress={() => handleRemovePackage(item.id)} color="red">Remover</Button>
              </>
            )}
          />
        )}
      />
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000}
      >
        {snackbarMessage}
      </Snackbar>

      <Portal>
        <Modal visible={modalVisible} onDismiss={() => setModalVisible(false)} contentContainerStyle={styles.modal}>
          <TextInput
            label="Nome do Pacote"
            value={editedPackageName}
            onChangeText={setEditedPackageName}
            mode="outlined"
            style={styles.input}
          />
          <TextInput
            label="Quantidade"
            value={editedPackageQuantity}
            onChangeText={setEditedPackageQuantity}
            keyboardType="numeric"
            mode="outlined"
            style={styles.input}
          />
          <Button mode="contained" onPress={handleSaveEditedPackage} style={styles.button}>
            Salvar Alterações
          </Button>
        </Modal>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  modal: {
    padding: 20,
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 10,
  },
  input: {
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
  },
});

export default PackageListScreen;
