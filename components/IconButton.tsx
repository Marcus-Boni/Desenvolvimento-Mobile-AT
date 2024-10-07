import * as React from 'react';
import { IconButton } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';

export default function IconButtonComponent({
  icon,
  onPress
}: {
  icon: IconSource;
  onPress: () => void;
}) {
  return (
    <View style={styles.container}>
      <IconButton icon={icon} size={24} onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16
  }
});
