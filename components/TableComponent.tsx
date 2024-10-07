import * as React from "react";
import { DataTable } from "react-native-paper";
import { View, StyleSheet } from "react-native";

export default function TableComponent() {
  return (
    <View style={styles.container}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Nome</DataTable.Title>
          <DataTable.Title numeric>Idade</DataTable.Title>
          <DataTable.Title numeric>País</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>John</DataTable.Cell>
          <DataTable.Cell numeric>25</DataTable.Cell>
          <DataTable.Cell numeric>USA</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Jane</DataTable.Cell>
          <DataTable.Cell numeric>30</DataTable.Cell>
          <DataTable.Cell numeric>UK</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Jean</DataTable.Cell>
          <DataTable.Cell numeric>23</DataTable.Cell>
          <DataTable.Cell numeric>Brazil</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
});