import * as React from "react";
import { Snackbar, Button } from "react-native-paper";
import { View, StyleSheet } from "react-native";

export default function SnackbarComponent() {
  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  return (
    <View style={styles.container}>
      <Button onPress={onToggleSnackBar}>Mostrar Snackbar</Button>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: "Fechar",
          onPress: () => {
            console.log("Snackbar fechado.");
          },
        }}
      >
        Esta é uma mensagem de Snackbar.
      </Snackbar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
});