import * as React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

export default function CardComponent() {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Content>
          <Title>Título do Card</Title>
          <Paragraph>Descrição do Card</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 16
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  paragraph: {
    fontSize: 14,
    color: '#666'
  }
});
