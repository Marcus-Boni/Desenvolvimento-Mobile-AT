import * as React from 'react';
import { RadioButton, Text } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

export default function RadioButtonComponent() {
  const [checked, setChecked] = React.useState('first');

  return (
    <View style={styles.container}>
      <RadioButton.Group
        onValueChange={(value) => setChecked(value)}
        value={checked}
      >
        <View style={styles.radioButton}>
          <Text>Dungeons & Dragons</Text>
          <RadioButton value="first" />
        </View>
        <View style={styles.radioButton}>
          <Text>Pathfinder</Text>
          <RadioButton value="second" />
        </View>
      </RadioButton.Group>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8
  }
});
