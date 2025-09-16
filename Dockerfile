FROM node:20-alpine3.21

# Diretório de trabalho
WORKDIR /usr/src/app

# Copiar arquivos de configuração primeiro
COPY package*.json ./
COPY tsconfig.json ./

# Instalar dependências
RUN npm install

# Copiar o código da aplicação
COPY . .

# Compilar TypeScript
RUN npm run build

# Expor porta
EXPOSE 3000

# Comando de inicialização
CMD ["npm", "run", "dev"]
