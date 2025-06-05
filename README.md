# Portafolio Personal

---

## ⚙️ Tech Stack
- **React** – Desarrollo de UI basado en componentes.
- **Vite** – Herramienta de construcción ultrarrápida.
- **TailwindCSS** – CSS utilitario para estilizado ágil.
- **Lucide Icons** – Paquete de íconos limpio y elegante.
- **Radix UI** – Primitivas de componentes accesibles.


---

## ⚡️ Funcionalidades

- 🌑 **Modo Claro/Oscuro**  
  Guarda la preferencia de tema en localStorage con transiciones suaves.

- 💫 **Fondos Animados**  
  Estrellas, meteoros, efectos al hacer scroll y elementos con brillo.

- 📱 **Navegación Responsiva**  
  Menús de escritorio y móvil con efecto glassmorphism.

- 👨‍💻 **Sección de “Hero” & “Sobre Mí”**  
  Presenta quién eres con animaciones de entrada y botones interactivos.

- 📊 **Grid de Habilidades**  
  Barras de progreso filtrables y categorías con ancho animado.

- 🖼️ **Proyectos Destacados**  
  Muestra capturas de pantalla, tech stacks y enlaces a GitHub/demo.

- 📩 **Sección de Contacto**  
  Íconos sociales + formulario responsivo con notificaciones toast.


---

## 👌 Quick Start

### Prerrequisitos
- ⭐ **Node.js**  
  Asegúrate de tener instalado Node.js (versión ≥ 14.x).  
- ⭐ **Git**  
  Para clonar el repositorio y seguir el historial de cambios.  

- ⭐ **Docker**  
  Para contenerizar la aplicación y ejecutarla en un entorno aislado.  
  - [Instalar Docker Desktop](https://www.docker.com/products/docker-desktop)  
  - Verifica con:
    ```bash
    docker --version
    ```

### Clonar y Ejecutar en Desarrollo
## Node.js
```bash
# 1. Clona el repositorio
git clone https://github.com/tu-usuario/react-tailwind-portfolio.git

# 2. Instala dependencias
npm install

# 3. Inicia el servidor de desarrollo
npm run dev
 ```
La aplicaciones estara disponible en http://localhost:5173

## Docker
```bash
# 1. Clona el repositorio
git clone https://github.com/tu-usuario/react-tailwind-portfolio.git



# 3. Construir la imagen Docker con su contenedor
docker-compose up --build -d

# 4. (Al terminar) Eliminar la contenedor con sus volumenes
docker compose down -v
 ```
La aplicaciones estara disponible en http://localhost:3000

