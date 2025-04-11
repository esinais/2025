# e-Sinais Web

![Badge de Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)

O e-Sinais é um software educacional que realiza a tradução de português para sinais em LIBRAS com o objetivo de proporcionar aos surdos uma melhor experiência no aprendizado de novas palavras do português escrito.

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
   - [Motivação](#-motivação)
   - [Problema que Resolve](#-problema-que-resolve)
   - [Público-Alvo](#-público-alvo)
   - [Recursos Principais](#-recursos-principais)
- [Histórico de Desenvolvimento e Produções](#histórico-de-desenvolvimento-e-produções)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação e Configuração](#instalação-e-configuração)
  - [Pré-requisitos](#pré-requisitos)
  - [Banco de Dados](#banco-de-dados)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Deployment](#deployment)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Sobre o Projeto

### Motivação  
A inclusão de pessoas surdas no sistema educacional brasileiro ainda enfrenta desafios significativos, como a escassez de recursos pedagógicos adaptados e a falta de profissionais qualificados em Libras (Língua Brasileira de Sinais). O **e-Sinais Web** surge como uma ferramenta educacional inovadora, desenvolvida para:  
- Promover a **educação bilíngue** (Libras e Português) conforme previsto na Lei nº 13.146/2015 (Estatuto da Pessoa com Deficiência).  
- Facilitar a tradução de textos escritos em Português para Libras, tornando o aprendizado mais acessível e intuitivo.  
- Estimular a colaboração entre usuários na construção de um banco de dados de sinais, fortalecendo a comunidade surda e ouvintes interessados.  

---

### Problema que Resolve  
Muitos surdos têm dificuldade em compreender textos em Português escrito, já que Libras é sua primeira língua. Além disso, educadores muitas vezes não possuem ferramentas adequadas para apoiar o ensino inclusivo. O **e-Sinais Web** resolve essas lacunas ao:  
1. **Traduzir palavras e frases** do Português para Libras usando GIFs e recursos visuais.  
2. **Cadastrar sinais colaborativamente**, permitindo que usuários contribuam com novos sinais e revisem traduções existentes.  
3. **Tratar homônimos e sinônimos**, garantindo traduções mais precisas e contextualizadas.  
4. Oferecer uma **interface responsiva**, acessível em diferentes dispositivos (computadores, tablets, celulares).  

---

### Público-Alvo  
O software é destinado a:  
- **Comunidade surda:** Estudantes e profissionais que utilizam Libras como primeira língua e buscam recursos para compreender textos em Português.  
- **Educadores:** Professores e intérpretes de Libras que necessitam de ferramentas pedagógicas inclusivas.  
- **Ouvintes interessados:** Pessoas que desejam aprender Libras ou apoiar a inclusão de surdos.  
- **Instituições de ensino:** Escolas e universidades que buscam implementar práticas educacionais acessíveis.  

---

### Recursos Principais  
- Tradução de palavras e frases para Libras.  
- Cadastro colaborativo de sinais via webcam ou upload de arquivos.  
- Sistema de *ranking* para incentivar a contribuição de usuários.  
- Interface intuitiva e adaptável a diferentes dispositivos.  

---

## Histórico de Desenvolvimento e Produções
- **2013** - [LIBROL: Software Tradutor de Português para LIBRAS](https://github.com/esinais/2025/blob/main/artigos/2013-CSBC-CarvalhoEtAl.pdf).
- **2013** - [SLIDES AP - LIBROL: Software Tradutor de Português para LIBRAS](https://github.com/esinais/2025/blob/main/artigos/2013-CSBC-CarvalhoEtAl-Slides.pdf).
- **2014** - [Avaliação da Compreensão de Textos Jornalísticos em Português, em LIBROL e em LIBRAS por Estudantes Surdos](https://github.com/esinais/2025/blob/main/artigos/2014-CSBC-SilvaEtAl.pdf).
- **2014** - [SLIDES AP - Avaliação da Compreensão de Textos Jornalísticos em Português, em LIBROL e em LIBRAS por Estudantes Surdos](https://github.com/esinais/2025/blob/main/artigos/2014-CSBC-SilvaEtAl-Slides.pdf).
- **2016** - [e-Texto Software](https://github.com/esinais/2016-eTexto).
- **2016** - [e-Sinais: Software Tradutor de Português Sinalizado para Sinais em LIBRAS](https://github.com/esinais/2025/blob/main/artigos/2016-CSBC-SilvaEtAl.pdf).
- **2016** - [SLIDES AP - e-Sinais: Software Tradutor de Português Sinalizado para Sinais em LIBRAS](https://github.com/esinais/2025/blob/main/artigos/2016-CSBC-SilvaEtAl-Slides.pdf).
- **2017** - [e-Sinais Software](https://github.com/esinais/2017)
- **2017** - [Avaliação do Software Educacional e-Sinais no EnsinoAprendizagem da Língua Portuguesa Escrita e da LIBRAS](https://github.com/esinais/2025/blob/main/artigos/2017-WIE-Ara%C3%BAjoEtAl.pdf).
- **2017** - [SLIDES AP - Avaliação do Software Educacional e-Sinais no EnsinoAprendizagem da Língua Portuguesa Escrita e da LIBRAS](https://github.com/esinais/2025/blob/main/artigos/2017-WIE-AraujoEtAl-Slides.pdf). 
- **2022** - [e-Sinais: Sistema Web Responsivo e Colaborativo no EnsinoAprendizado da Língua Portuguesa Escrita e da LIBRAS](https://github.com/esinais/2025/blob/main/tcc/2022-TccOliveira.pdf).
- **2022** - [SLIDES AP - e-Sinais: Sistema Web Responsivo e Colaborativo no EnsinoAprendizado da Língua Portuguesa Escrita e da LIBRAS](https://github.com/esinais/2025/blob/main/tcc/2022-TccOliveira-Slides.pdf).
- **2023** - [Uma Ferramenta Colaborativa para o Apoio do EnsinoAprendizado do Português Escrito para a Diminuição da Desigualdade Educacional dos Surdos](https://github.com/esinais/2025/blob/main/artigos/2023-WIE-OlivieraEtAl.pdf).
- **2023** - [SLIDES AP - Uma Ferramenta Colaborativa para o Apoio do EnsinoAprendizado do Português Escrito para a Diminuição da Desigualdade Educacional dos Surdos](https://github.com/esinais/2025/blob/main/artigos/2023-WIE-OlivieraEtAl-Slides.pdf).
- **2025** - [Avaliação de Usabilidade do Software Educacional e-Sinais Web em um Ambiente Web](https://github.com/esinais/2025/blob/main/tcc/2025-TccFiladelfo.pdf)
- **2025** - Redesign da Interface da versão 2022 com base na análise de 2025() : em desenvolvimento...

---

## Tecnologias Utilizadas

- **Frontend:** React
- **Backend:** Node.js com Express
- **Banco de Dados:** MySQL com ORM Sequelize

---

## Instalação e Configuração

### Pré-requisitos
**executando localmente em uma máquina com  Windows*

Ter instalado na máquina:
- Microsoft Visual Studio Installer (Apenas os SDK's de desenvolvimento)  [Download](https://visualstudio.microsoft.com/pt-br/thank-you-downloading-visual-studio/?sku=Community&channel=Release&version=VS2022&source=VSLandingPage&cid=2030&passive=false)

- Microsoft Visual C++:
  - Microsoft Visual C++ 2005
  - Microsoft Visual C++ 2008
  - Microsoft Visual C++ 2010
  - Microsoft Visual C++ 2015

1. **Instalar o MySQL**  [Download](https://dev.mysql.com/downloads/file/?id=532678)

2. **Instalar o MySQL Workbench**  [Download](https://dev.mysql.com/downloads/file/?id=528765)

3. **Instalar o Node.js v.20.16**  [Download](https://nodejs.org/dist/v20.16.0/node-v20.16.0-x64.msi)

4. **Instalar o gerenciador de pacotes Yarn** (No CMD do Windows):
   ```sh
   npm install --global yarn
   ```

5. **Baixar o FFMPEG**
   - Baixar este pacote: [ffmpeg-git-full.7z](https://www.gyan.dev/ffmpeg/builds/ffmpeg-git-full.7z)
   - Criar uma pasta `C:\ffmpeg` e descompactar o arquivo nesta pasta.
   - Certifique-se de que os arquivos estão diretamente na pasta `ffmpeg` (não deve haver subpastas adicionais).
   - Exemplo ffmpeg -> ffmpeg -> arquivos o correto é apenas ffmpeg -> arquivos


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

   Caso o sequelize não funcione:
    - Importar e restaurar no banco o dump.sql (backend/Script_BD) gerado para popular o banco de dados do MySQL, ou rodar o script do BD encontrado no diretório diretamente no MySQL.
    - (**Recomendado**) Ou crie o banco e digite o comando para popular o banco
     ```mysql
     mysql -u root -p esinais < /home/usuario/dump.sql
     ```
     o arquivo dump.sql está dentro da pasta Script_BD do banckend.
6. Inicie o servidor:
   ```sh
   npm start
   ```
   ou
      ```sh
   npm run dev
   ```
*obs.: pela forma como o código está estruturado a depender de como sua API está é preciso ir nas seguintes pastas e seus arquivos index.js e mudar de acordo o seu uso.*

**Pastas e arquivos:**
```bash
frontend > Components
		> Edit-sinais
		> Edit-usuarios
		> Enable-sinais
		> Search-sinais
```

Os arquivos index.js dentro dessas pastas podem precisar ser alterados

![](https://github.com/esinais/2025/blob/main/outros/arquivos_para_modificar.PNG)

Caso haja alteração no arquivo **configApi.js**
![](https://github.com/esinais/2025/blob/main/outros/api.PNG)

Exemplo de um trecho no código
![](https://github.com/esinais/2025/blob/main/outros/exIndexJS.PNG)

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
 
---

## Estrutura Base do Projeto

```bash
📂 esinais2025
├── 📂 backend
│   ├── Prints_Conf
│   ├── Script_BD
│   └── src
├── 📂 frontend
│   ├── public
│   └── src
├── 📂 material_complementar
├── 📂 tcc
├── 📄 LICENSE
└── 📄 README.md
```

---

## Deployment
*obs.: O código desse repositório foi hospedado na [DigitaOceam](https://www.digitalocean.com) para testes.*

*Caso tenha um email institucional pode acessar o [GSDP](https://education.github.com/pack) para ter acesso de forma gratuita tanto para o droplet quanto para o domínio por um período de tempo.*

### Pré-requisitos para Deployment
- Droplet na Digital Ocean com Ubuntu 22.04 LTS (mínimo 2GB RAM).
- Domínio configurado com DNS apontando para o IP do Droplet.
- Acesso SSH ao servidor.

#

### Passo a Passo para Deployment

#### 1. Configuração Inicial do Droplet
Documentação da digitalocean para criar um droplet: [Droplets](https://docs.digitalocean.com/products/droplets/). Após criação siga os passos abaixo.

```bash
# Conectar via SSH em terminal local, após esse comando a senha cadastrada no droplet da digitalocean vai ser solicitada
ssh root@seu_ip

# Atualizar o sistema
sudo apt update && sudo apt upgrade -y

# Instalar dependências básicas
sudo apt install -y git curl build-essential
```

#### 2. Instalação do Banco de Dados (MySQL)
```bash
# Instalar MySQL
sudo apt install -y mysql-server

# Configurar segurança do MySQL
sudo mysql_secure_installation

# Acessar o MySQL
sudo mysql

# Criar usuário e o banco de dados (no prompt do MySQL)
CREATE DATABASE esinais;
CREATE USER 'usuario'@'localhost' IDENTIFIED BY 'senha_segura';
GRANT ALL PRIVILEGES ON esinais.* TO 'usuario'@'localhost';
FLUSH PRIVILEGES;
EXIT;

# Popule o banco
mysql -u root -p esinais < /home/usuario/dump.sql
```

#### 3. Configuração do Backend
```bash
# Clonar repositório
git clone https://github.com/esinais/2025.git
cd esinais/2025/backend

# Instalar dependências
npm cache clean --force
rm -rf node_modules
npm install
npm rebuild canvas

# Configurar variáveis 
nano src/config/database.js

# Exemplo no local
module.exports = {
    host: "localhost",
    dialect: 'mysql',
    username: 'root',
    password: 'suaSenha',
    database: 'esinais',
    define: {
        timestamp: true,
        underscored: true,
    }, 
};

# Instalar PM2 para gerenciamento de processos
sudo npm install -g pm2

# Iniciar o backend
pm2 start npm --name "backend" -- start

# Configurar para iniciar automaticamente
pm2 startup
pm2 save
```
#### 4. Configuração do Frontend
```bash
cd ../frontend

# Instalar dependências
npm install

# Iniciar o frontend
pm2 start npm --name "frontend" -- start

# Configurar para iniciar automaticamente
pm2 startup
pm2 save
```

#### 5. Instalar e configurar o Apache
```bash
# Instale o servidor web
sudo apt install apache2 -y

# Verifique o status do Apache
sudo systemctl status apache2

#Ative o firewall (UFW) e libere tráfego HTTP/HTTPS
sudo ufw allow 'Apache Full'
sudo ufw enable
```
#### 6. Configurar o Domínio no Apache
```bash
# Crie um diretório para seu site
sudo mkdir -p /var/www/seu_dominio/html

# Configure as permissões
o chown -R $USER:$USER /var/www/seu_dominio/html
sudo chmod -R 755 /var/www/seu_dominio

# Crie um arquivo de configuração do site
sudo nano /etc/apache2/sites-available/seu_dominio.conf
```
Cole o seguinte conteúdo (substitua 'seu_dominio' pelo seu domínio):
```sh
<VirtualHost *:80>
    ServerAdmin admin@seu_dominio
    ServerName seu_dominio
    ServerAlias www.seu_dominio
    DocumentRoot /var/www/seu_dominio/html
    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```

```bash
# Ative o site e recarregue o Apache
sudo a2ensite seu_dominio.conf
sudo systemctl reload apache2
```

#### 7. Configurar SSL (HTTPS)
```bash
# Instale o Certbot para HTTPS gratuito (Let's Encrypt)
sudo apt install certbot python3-certbot-apache -y
sudo certbot --apache -d seu_dominio -d www.seu_dominio

# Siga as intruções no terminal para validar o certificado
# Se tudo ocorrer bem acesse no navegador https://seu_dominio
```
*obs.: caso não funcione com certbot é recomendável um certificado próprio*

#### 8. Configurações Adicionais para a Câmera
Para que a câmera funcione via HTTPS:
1. Certifique-se de que o domínio está acessível via https://.
2. No frontend, configure a API para usar HTTPS:
```js
import axios from "axios";


export default axios.create({
    //baseURL:'http://localhost:8080'
    //baseURL:'http://157.230.14.156:8080'	
    baseURL:'https://web.esinais.software:8080', //URL de producao com HTTPS
}) //
```
3. No navegador, acesse seu domínio (ex: web.esinais.software) e permita acesso à câmera em contexto seguro (HTTPS).

---

## Observações Importantes
- Firewall: Verifique se as portas 80 (HTTP), 443 (HTTPS) e 3000 (backend) estão abertas.

---

## Links Úteis:
- [Guia Oficial do MySQL](https://dev.mysql.com/doc/refman/8.0/en/)
- [Certbot Official Guide](https://certbot.eff.org/instructions)

---

## Licença

[Apache-2.0 license ](LICENSE)

*Desenvolvido com pela comunidade do IFBA - Campus Vitória da Conquista para promover a inclusão e a acessibilidade.* 
