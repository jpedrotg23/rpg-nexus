# RPG Nexus

Aplicação web em desenvolvimento para organizar campanhas de RPG de mesa, participantes, personagens e NPCs em um único ambiente.

## Sobre o projeto

O RPG Nexus busca facilitar a organização de campanhas e informações de jogo para mestres e jogadores. A aplicação possui autenticação, navegação entre áreas protegidas e integração com Firebase para persistência de dados.

O repositório contém uma **aplicação web** desenvolvida com React e TypeScript — não é um aplicativo React Native.

## Funcionalidades presentes no código

- Cadastro e autenticação de usuários com Firebase Authentication.
- Rotas protegidas e navegação com React Router.
- Painel inicial do usuário.
- Criação, listagem e exclusão de campanhas.
- Visualização dos detalhes de uma campanha.
- Inclusão e remoção de participantes.
- Criação e listagem de personagens e NPCs.
- Modelos de personagens organizados por sistemas de RPG, incluindo D&D, Ordem Paranormal e Sacramento.
- Persistência e atualização de dados de campanhas com Cloud Firestore.

**Status:** em desenvolvimento. Algumas áreas de interface e funcionalidades previstas ainda não estão concluídas ou conectadas; confira o comportamento atual do código antes de considerar qualquer recurso pronto para uso.

## Tecnologias

- React 19
- TypeScript
- Vite
- Firebase Authentication
- Cloud Firestore
- React Router
- Tailwind CSS
- Framer Motion
- Konva / React Konva
- Zustand
- Radix UI

## Executar localmente

Requisitos: Node.js e npm.

```bash
# Clonar o repositório
git clone https://github.com/jpedrotg23/rpg-nexus.git

# Entrar na pasta
cd rpg-nexus

# Instalar dependências
npm install

# Iniciar o ambiente de desenvolvimento
npm run dev
```

### Verificações

```bash
# Análise estática
npm run lint

# Verificação de tipos e build de produção
npm run build
```

## Firebase

A aplicação utiliza Firebase Authentication e Cloud Firestore. Para executar com um projeto próprio, configure as credenciais e os recursos do Firebase esperados pela implementação. Não publique chaves privadas, tokens ou credenciais de ambientes pessoais no repositório.

## Próximos passos

O projeto continua em evolução. Recursos mais amplos de mesa virtual, mapas, rolagem de dados e ferramentas colaborativas só devem ser considerados disponíveis quando estiverem implementados e testados na aplicação.

---

Desenvolvido por João Pedro Teixeira Guimarães.
