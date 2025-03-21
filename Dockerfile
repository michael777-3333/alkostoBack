# Usa la imagen base de Node.js
FROM node:18 as builder


# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos del proyecto a la imagen
COPY package*.json ./
RUN npm install

# Copia el resto del código
COPY . .

# Compila el proyecto
RUN npm run build

ENV PORT=8080 
# Expone el puerto en el que correrá NestJS
EXPOSE 8080

# Comando para iniciar la aplicación
CMD ["npm", "run", "start:prod"]
