import * as React from 'react';
import { List } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

export default function ListComponent() {
  return (
    <View style={styles.container}>
      <List.Section>
        <List.Subheader>Lista de Times</List.Subheader>
        <List.Item
          title="Corinthians"
          description="Time número 1"
          left={(props) => <List.Icon {...props} icon="folder" />}
        />
        <List.Item
          title="Corinthians"
          description="Time número 2"
          left={(props) => <List.Icon {...props} icon="folder" />}
        />
        <List.Item
          title="Corinthians"
          description="Time número 3"
          left={(props) => <List.Icon {...props} icon="folder" />}
        />
      </List.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16
  }
});
