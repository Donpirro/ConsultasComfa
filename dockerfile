# Usar una imagen base de Node.js
FROM node:16

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar el archivo package.json
COPY package.json ./

# Instalar dependencias usando npm
RUN npm install

# Copiar el resto del código
COPY . .

# Compilar TailwindCSS (si es necesario)
RUN npm run build:css

# Exponer el puerto 3000
EXPOSE 3000

# Iniciar la aplicación
CMD ["npm", "start"]