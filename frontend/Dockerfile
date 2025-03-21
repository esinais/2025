# Usar a imagem do Node.js para construir o projeto
FROM node:20.16.0

# WORKDIR /app

# COPY package*.json ./

# RUN npm install

# COPY . .

# RUN npm run build

# # Usar o NGINX para servir a aplicação
# FROM nginx:alpine
# COPY --from=build /app/build /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
# Definir o diretório de trabalho
WORKDIR /app/frontend

# Copiar os arquivos de dependências e instalá-las
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copiar o código da aplicação para dentro do container
COPY . .

# Buildar a aplicação
RUN yarn build

# Usar uma imagem NGINX para servir o frontend
#FROM nginx:alpine
#COPY --from=0 /app/frontend/build /usr/share/nginx/html

# Expor a porta 80 para o NGINX
EXPOSE 3000

# Comando para iniciar o servidor NGINX
#CMD ["nginx", "-g", "daemon off;"]
CMD ["serve", "-s", "build"]