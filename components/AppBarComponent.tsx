import * as React from 'react';
import { Appbar } from 'react-native-paper';

export default function AppBarComponent() {
  return (
    <Appbar.Header>
      <Appbar.Content title="Infnet" />
      <Appbar.Action icon="magnify" onPress={() => console.log('Pesquisar')} />
      <Appbar.Action
        icon="dots-vertical"
        onPress={() => console.log('Mais opções')}
      />
    </Appbar.Header>
  );
}
