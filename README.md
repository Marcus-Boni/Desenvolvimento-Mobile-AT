# 🍼 Gerenciador de Fraldas

Gerenciador-de-Fraldas é um aplicativo criado para ajudar as mães a gerenciar o estoque de fraldas e ser alertadas quando os pacotes de fraldas estiverem acabando. Com uma interface simples e intuitiva, a mãe pode adicionar, editar e remover pacotes de fraldas, além de definir uma foto de perfil, visualizar o estoque atual e verificar quando é hora de reabastecer.

## 💼 Conta de administrador padrão para acesso ao sistema.
- **Login:** **admin@teste.com**
- **Senha:** **123456**

## 📱 Funcionalidades Principais
- **Gerenciamento de Estoque de Fraldas**: Adicionar, editar e excluir pacotes de fraldas no estoque.
- **Alertas de Estoque**: Acompanhamento visual para alertar quando as fraldas estão acabando.
- **Foto de Perfil**: Definição de foto de perfil do usuário utilizando a biblioteca `expo-camera`.
- **Login e Registro**: Autenticação via Firebase com telas estilizadas para login, registro e recuperação de senha.
- **Persistência de Dados**: Armazenamento de dados no Firebase Realtime Database e persistência local.
- **Verificação de Conexão**: Monitoramento da conexão à internet utilizando `expo-network`.

## 🛠️ Tecnologias Utilizadas
- **Expo**: Framework principal para o desenvolvimento mobile.
- **React Native Paper**: Utilizado para criar uma interface moderna e estilizada.
- **Firebase**: Utilizado para autenticação, banco de dados em tempo real e armazenamento de fotos na nuvem.
- **Expo Camera**: Usado para permitir a escolha de fotos de perfil.
- **@react-native-async-storage/async-storage**: Para persistência de sessão local.
- **Expo Network**: Para verificar a conectividade com a internet.

## 🚀 Publicação e Acesso
O aplicativo foi publicado no Expo.dev e também está disponível no Snack para testes.

- **Link no Snack**: [BabyCare no Snack Expo](https://snack.expo.dev/@marcusblz/desenvolvimento-mobile-at)

## 🔧 Instalação e Execução
### Pré-requisitos:
- Node.js instalado
- Expo CLI instalada

### Passos:
1. Clone este repositório:
   ```bash
   git clone https://github.com/Marcus-Boni/Desenvolvimento-Mobile-AT.git
   ```
2. Instale as dependências:
   ```bash
   cd Gerenciador-de-Fraldas
   npm install
   ```
3. Execute o projeto:
   ```bash
   npx expo start
   ```

## ⚙️ Regras do Firebase Database:

```json
{
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null"
  }
}
```

## 🤝 Contribuição
- Sinta-se à vontade para contribuir com o projeto através de pull requests ou abrindo issues.


---

Desenvolvido com ❤️ por [Marcus](https://github.com/Marcus-Boni)