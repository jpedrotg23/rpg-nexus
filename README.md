# ⚔️ RPG Nexus

> Plataforma completa de RPG de Mesa desenvolvida com React Native + TypeScript + Firebase.

<p align="center">
  <img src="https://img.shields.io/badge/React%20Native-Mobile-blue?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/TypeScript-Strong%20Typing-3178C6?style=for-the-badge&logo=typescript" />
  <img src="https://img.shields.io/badge/Firebase-Backend-orange?style=for-the-badge&logo=firebase" />
  <img src="https://img.shields.io/badge/Vite-WebApp-646CFF?style=for-the-badge&logo=vite" />
  <img src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-success?style=for-the-badge" />
</p>

---

# 📖 Sobre o Projeto

O **RPG Nexus** é um sistema completo para campanhas de RPG de mesa, criado para unir jogadores e mestres em uma experiência digital moderna, dinâmica e totalmente sincronizada em tempo real.

O projeto foi desenvolvido utilizando:

- ⚛️ React Native + TypeScript
- 🔥 Firebase (Auth, Firestore e Storage)
- ⚡ Vite
- ☁️ Firestore Realtime Database
- 🧭 React Navigation
- 🎨 UI dinâmica baseada no sistema selecionado

---

# 🎲 Sistemas Suportados

## 👁️ Ordem Paranormal
Sistema investigativo e sobrenatural focado em horror psicológico.

### Características
- Pentagrama de atributos
- Sistema de SAN (Sanidade)
- Rolagem múltipla de d20
- Interface dark investigativa
- Elementos paranormais

---

## 🕯️ Sacramento
Sistema de horror gótico e sobrevivência.

### Características
- Estética envelhecida
- Sistema de traumas
- Vitalidade e Estabilidade
- Inventário limitado
- Horror narrativo

---

## 🐉 D&D 5e
Sistema clássico de fantasia medieval.

### Características
- Livro de magias
- Proficiência automática
- Cálculo automático de modificadores
- Sistema completo de inventário
- Fichas SRD integradas

---

# 🛠️ Tecnologias Utilizadas

| Tecnologia | Finalidade |
|---|---|
| React Native | Aplicação Mobile |
| TypeScript | Tipagem forte |
| Firebase Auth | Login e autenticação |
| Firestore | Banco em tempo real |
| Firebase Storage | Upload de imagens |
| React Navigation | Navegação |
| Gesture Handler | Movimentação de tokens |
| Reanimated | Animações |
| Lucide React Native | Ícones |
| Context API | Estado global |

---

# 📂 Estrutura do Projeto

```bash
src/
├── assets/                # Imagens e backgrounds
│
├── components/            # Componentes reutilizáveis
│   ├── Dice/
│   ├── Map/
│   ├── Character/
│   ├── Documents/
│   └── UI/
│
├── context/               # Context API
│   ├── AuthContext.tsx
│   ├── CampaignContext.tsx
│   └── ThemeContext.tsx
│
├── firebase/
│   ├── firebaseConfig.ts
│   ├── firestore.rules
│   └── storage.rules
│
├── lib/                   # Bibliotecas auxiliares
│
├── routes/
│   ├── AppRoutes.tsx
│   └── AuthRoutes.tsx
│
├── screens/
│   ├── Auth/
│   ├── Home/
│   ├── Campaign/
│   ├── Map/
│   ├── Character/
│   ├── Documents/
│   └── Profile/
│
├── services/
│   ├── authService.ts
│   ├── campaignService.ts
│   ├── diceService.ts
│   └── storageService.ts
│
├── systems/
│   ├── ordem/
│   ├── sacramento/
│   └── dnd/
│
├── types/
│   ├── character.ts
│   ├── campaign.ts
│   ├── user.ts
│   └── systems.ts
│
├── App.tsx
└── main.tsx
```

---

# 🔥 Funcionalidades Principais

# 🔐 Sistema de Autenticação

- Cadastro com Email e Senha
- Login persistente
- Recuperação de senha
- Firebase Authentication
- Sessão automática

---

# 👤 Perfil do Usuário

- Upload de foto
- Tirar foto pela câmera
- Escolher imagem da galeria
- Alterar username
- Definir função:
  - Mestre
  - Jogador
- Biblioteca de personagens salvos

---

# ⚔️ Sistema de Campanhas

## Mestre
- Criar campanhas
- Gerar ID automático
- Definir sistema RPG
- Definir tema e trama
- Criar NPCs
- Upload de mapas
- Gerenciar documentos

## Jogador
- Entrar por ID
- Criar personagem
- Editar própria ficha
- Movimentar apenas próprio token

---

# 🗺️ Sistema de Mapas em Tempo Real

## Funcionalidades
- Upload de mapas
- Tokens arrastáveis
- Sincronização em tempo real
- Adição de:
  - NPCs
  - Players
  - Objetos
  - Documentos
- Sistema Drag and Drop
- Zoom e redimensionamento
- Duplicar componentes
- Exclusão dinâmica

## Regras
| Usuário | Permissão |
|---|---|
| Mestre | Move todos os tokens |
| Jogador | Move apenas o próprio |

---

# 📜 Sistema de Fichas

## Recursos
- Criação dinâmica conforme sistema
- Inventário
- Upload de imagens
- Token automático
- Rolagem integrada
- Filtro NPC/Jogador
- Pesquisa por nome

---

# 🎲 Sistema de Dados

## Rolagem Normal
```bash
d20
d10
d100
```

## Rolagem Somada
```bash
d20+5
d10+INT
d20+Luta
```

## Ordem Paranormal
- Rola múltiplos d20
- Mantém maior valor

## D&D
- d20 + modificador + proficiência

## Sacramento
- d10 ou d12 narrativos

---

# 📂 Sistema de Documentos

## Mestre
- Meus Documentos
- Documentos do Grupo
- Documentos Privados

## Jogador
- Documentos Próprios
- Documentos Grupais
- Chat entre jogadores

---

# 📚 Biblioteca Integrada

O sistema possui fichas prontas integradas.

## Ordem Paranormal
- Zumbi de Sangue
- Existido
- Carente
- Vulto

## Sacramento
- Carniçal
- Vigário Corrompido
- Sombra Errante
- Doutor da Praga

## D&D
- Goblin
- Esqueleto
- Lobo
- Dragão Vermelho

---

# ☁️ Firebase

# Serviços Utilizados

| Serviço | Uso |
|---|---|
| Firebase Auth | Login |
| Firestore | Dados |
| Storage | Uploads |

---

# 🔒 Regras Firestore

## Mestre
- Edita tudo
- Move todos tokens
- Cria campanhas

## Jogador
- Edita apenas:
  - Própria ficha
  - Próprio token
  - Próprios documentos

---

# 🎨 Temas Dinâmicos

Cada sistema altera automaticamente:

- Backgrounds
- Botões
- Ícones
- Paleta de cores
- HUD
- Fontes
- Dados

---

# 📱 Roadmap

- [x] Sistema de login
- [x] Estrutura modular
- [x] Firebase integrado
- [ ] Sistema completo de mapas
- [ ] Drag and Drop multiplayer
- [ ] Dados animados 3D
- [ ] Chat de voz
- [ ] IA para NPCs
- [ ] Exportação PDF
- [ ] Sistema de música ambiente

---

# 🧙 Objetivo

O RPG Nexus busca transformar campanhas de RPG de mesa em experiências totalmente digitais, organizadas e imersivas.

O projeto foi pensado para:
- Mestres
- Jogadores
- Streamers
- Campanhas online
- Mesas presenciais

---

# 🤝 Contribuição

Contribuições são bem-vindas.

```bash
# Fork
git checkout -b feature/minha-feature

# Commit
git commit -m "feat: nova feature"

# Push
git push origin feature/minha-feature
```

Abra um Pull Request 🚀

---

# 📄 Licença

Este projeto está licenciado sob a MIT License.

---

# 👨‍💻 Autor

## João Pedro Teixeira Guimarães

🎲 Apaixonado por RPG de Mesa  
⚛️ React Native + Firebase

GitHub:
https://github.com/jpedrotg23

---

# ⭐ Apoie o Projeto

Se gostou do projeto:

- ⭐ Dê uma estrela
- 🍴 Faça um fork
- 🧙 Compartilhe com sua party
- ⚔️ Contribua com melhorias

---

<p align="center">
  <strong>"Grandes campanhas começam com grandes sistemas."</strong>
</p>
