# Etapa 1: Construcción con Node
FROM node:18-alpine AS builder

# 1. Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# 2. Copia package.json y package-lock.json (o yarn.lock) y luego instala dependencias
COPY package*.json ./
RUN npm install

# 3. Copia todo el código fuente al contenedor
COPY . ./

# 4. Ejecuta el build de producción
RUN npm run build

# Etapa 2: Servir con Nginx
FROM nginx:alpine

# 5. Elimina la página por defecto de Nginx
RUN rm -rf /usr/share/nginx/html/*

# 6. Copia la carpeta build generada en la etapa anterior a la ruta estática de Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# 7. Expone el puerto 80 (el contenedor de Nginx escuchará aquí)
EXPOSE 80

# 8. Instrucción por defecto para iniciar Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]
