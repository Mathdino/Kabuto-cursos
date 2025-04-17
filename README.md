# Kabuto Cursos

Um sistema de gerenciamento de cursos desenvolvido com Vue.js.

## 🚀 Tecnologias Utilizadas

- Vue.js 3
- Vue Router
- Vuex
- Axios
- Tailwind CSS

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/kabuto-cursos.git
```

2. Instale as dependências:
```bash
npm install
```

## 🛠️ Scripts Disponíveis

### Desenvolvimento
```bash
npm run serve
```
Inicia o servidor de desenvolvimento com hot-reload.

### API
```bash
# Instale o json-server globalmente (se ainda não tiver instalado)
npm install -g json-server

# Inicie o servidor de API
json-server --watch api.json --port 3000
```

O servidor de API estará disponível em `http://localhost:3000` com os seguintes endpoints:
- GET /cursos - Lista todos os cursos
- GET /cursos/:id - Retorna um curso específico
- POST /cursos - Cria um novo curso
- PUT /cursos/:id - Atualiza um curso
- DELETE /cursos/:id - Remove um curso

### Produção
```bash
npm run build
```
Compila e minifica os arquivos para produção.

### Lint
```bash
npm run lint
```
Verifica e corrige problemas de estilo no código.

## 📦 Estrutura do Projeto

```
kabuto-cursos/
├── public/          # Arquivos estáticos
├── src/             # Código fonte
│   ├── assets/      # Recursos estáticos
│   ├── components/  # Componentes Vue
│   ├── views/       # Páginas
│   ├── router/      # Configuração de rotas
│   ├── store/       # Gerenciamento de estado
│   └── App.vue      # Componente raiz
└── package.json     # Dependências e scripts
```

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuição

Contribuições são bem-vindas! Por favor, leia as diretrizes de contribuição antes de enviar um pull request.

## 📫 Contato

Para mais informações, entre em contato através do email: matheusdino01@gmail.com