import * as React from 'react';
import { FAB } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

export default function FabButtonComponent({
  onPress
}: {
  onPress: () => void;
}) {
  return (
    <View style={styles.container}>
      <FAB style={styles.fab} small icon="plus" onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0
  },
  fab: {
    backgroundColor: '#6200ee'
  }
});
