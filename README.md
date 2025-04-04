# esinais v. 2025

🚧 Em construção... 🚧

# e-Sinais Web

![Badge de Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)

O e-Sinais é um software educacional que realiza a tradução de português para sinais em LIBRAS com o objetivo de proporcionar aos surdos uma melhor experiência no aprendizado de novas palavras.

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação e Configuração](#instalação-e-configuração)
  - [Pré-requisitos](#pré-requisitos)
  - [Banco de Dados](#banco-de-dados)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Histórico de Desenvolvimento](#histórico-de-desenvolvimento)
- [Uso da Aplicação](#uso-da-aplicação)
- [Testes](#testes)
- [Deployment](#deployment)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Sobre o Projeto

Detalhes sobre a motivação do projeto, problema que resolve e usuários-alvo.

## Tecnologias Utilizadas

- **Frontend:** React
- **Backend:** Node.js com Express
- **Banco de Dados:** MySQL com ORM Sequelize


## Instalação e Configuração

### Pré-requisitos

obs.: o código desse repositório foi usado em um droplet linux na DigitalOcean, os comando abaixo servem para sistemas windows executados de forma local.

Ter instalado na máquina:
- (*caso Windows*) Microsoft Visual Studio Installer (Apenas os SDK's de desenvolvimento)  
  [Download](https://visualstudio.microsoft.com/pt-br/thank-you-downloading-visual-studio/?sku=Community&channel=Release&version=VS2022&source=VSLandingPage&cid=2030&passive=false)

- Microsoft Visual C++:
  - Microsoft Visual C++ 2005
  - Microsoft Visual C++ 2008
  - Microsoft Visual C++ 2010
  - Microsoft Visual C++ 2015

1. **Instalar o MySQL**  
   [Download](https://dev.mysql.com/downloads/file/?id=532678)

2. **Instalar o MySQL Workbench**  
   [Download](https://dev.mysql.com/downloads/file/?id=528765)

3. **Instalar o Node.js**  
   [Download](https://nodejs.org/dist/v20.16.0/node-v20.16.0-x64.msi)

4. **Instalar o gerenciador de pacotes Yarn** (No CMD do Windows):
   ```sh
   npm install --global yarn
   ```

5. **Baixar o FFMPEG**
   - Baixar este pacote: [ffmpeg-git-full.7z](https://www.gyan.dev/ffmpeg/builds/ffmpeg-git-full.7z)
   - Criar uma pasta `C:\ffmpeg` e descompactar o arquivo nesta pasta.
   - Certifique-se de que os arquivos estão diretamente na pasta `ffmpeg` (não deve haver subpastas adicionais).

6. **Configurar o FFMPEG**
   - Adicionar o caminho até a pasta `bin` do FFMPEG nas variáveis de ambiente do Windows (tanto do usuário quanto do sistema).

### Banco de Dados

1. Criar e configurar o banco de dados.
2. Rodar as migrations/seeds caso necessário.

### Backend

1. Acesse a pasta do backend:
   ```sh
   cd backend
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Configure as variáveis de ambiente (.env).
4. Caso o Node.js seja de uma versão diferente ou troque de ambiente, execute os seguintes comandos:
   ```sh
   npm cache clean --force
   rm -rf node_modules
   npm install
   npm rebuild canvas
   ```
5. Executar os seguintes comandos para o banco de dados:
   ```sh
   yarn sequelize db:create
   yarn sequelize db:migrate
   ```

   Caso
6. Importar o dump gerado para popular o banco de dados do MySQL, ou rodar o script do BD encontrado no diretório diretamente no MySQL (**Recomendado**).
7. Inicie o servidor:
   ```sh
   npm start
   ```

### Frontend

1. Acesse a pasta do frontend:
   ```sh
   cd frontend
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Inicie o frontend:
   ```sh
   npm start
   ```

## Estrutura do Projeto

```bash
📂 esinais2025
├── 📂 backend
│   ├── src
│   ├── config
│   ├── routes
│   ├── controllers
│   ├── models
│   └── tests
├── 📂 frontend
│   ├── src
│   ├── components
│   ├── pages
│   ├── services
│   ├── assets
│   └── tests
├── 📂 database
│   ├── migrations
│   ├── seeds
│   └── scripts
└── 📄 README.md
```

## Histórico de Desenvolvimento

- **2016** - [e-Texto](https://github.com/esinais/2016-eTexto).
- **2017** - [e-Sinais](https://github.com/esinais/2017) 
- **2022** - [e-Sinais Web]().
- **2025** - [Avaliação de Usabilidade e-Sinais Web](https://github.com/esinais/2025/blob/main/tcc/2025-TccFiladelfo.pdf)
- **2025** - [Redesign da Interface da versão 2022 com base na análise de 2025]() : em desenvolvimento...

## Uso da Aplicação

Explicação de como usar a aplicação (URLs, endpoints, credenciais de teste, etc.)....

## Deployment

Passos para realizar o deploy na DigitalOcean

## Contribuição

Se deseja contribuir, siga as diretrizes do repositório.

## Licença

[Apache-2.0 license ](LICENSE)

