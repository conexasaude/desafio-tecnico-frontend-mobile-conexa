# Conexa Desafio Técnico Front-end

## Sobre o desafio

Esse projeto consiste em criar um aplicativo mobile utilizando react-native para o desafio técnico front-end da empresa Conexa. As principais funcionalidades são: Login, criar consultas, listar consultas e detalhar consulta.

Para sua criação, foram utilizadas as seguintes tecnologias:

- React native com expo;
- Typescript;
- Styled components;
- Axios;
- Jest;
- Context;
- Hooks;
- React native paper

Princípios de Arquitetura limpa (Clean Architecture) foram utilizados no desenvolvimento deste projeto.

## Como instalar e executar o projeto

Algumas estapas são necessárias para instalar e rodar esse projeto:

1. Clonar ou baixar o projeto no github através do link: https://github.com/luizhmp/desafio-tecnico-frontend-mobile-conexa.git;
2. Instalar expo no seu computador através do comando yarn add expo no seu terminal. Caso seja necessário, acesse https://docs.expo.dev/more/expo-cli/ para mais informações sobre como instalar o expo;
3. No seu terminal, navegue até a pasta do projeto e inicie-o utilizando o comando yarn start ou npm start;
4. Após terminar de executar o comando, aperte 'i' para abrir um emulador iOS ou 'a' para abrir um emulador android;
5. Se quiser utilizar um dispositivo físico para testes ao invés do emulador, baixe o aplicativo Expo na Google Play ou Apple Store. Após o download, abra-o e escaneie o QR code que aparece após utilizar o comando npm start ou yarn start. Para utilizar um emulador, siga os passos em https://reactnative.dev/docs/environment-setup;

## Testes

Nesse projeto há testes automatizados utilizando a biblioteca Jest. Para executá-los, basta seguir os passos abaixo:

1. Feita as etapas de instalação do projeto, rode o comando npm test ou yarn test para rodar todos os testes do projeto. Não é necessário que o projeto esteja executando no emulador para iniciar os testes. Somente é necessário baixar o projeto do github;
2. Para verificar a integridade de testes do projeto, rode o comando yarn test:ci ou npm run test:ci. Após algum tempo uma tabela aparecerá no terminal com os testes disponíveis.
