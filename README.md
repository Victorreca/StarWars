# 🚀 Star Wars Starships Explorer

Aplicación web desarrollada con **Angular 19** para explorar naves del universo Star Wars. Permite listar, visualizar detalles, gestionar usuarios y proteger rutas para ofrecer una experiencia personalizada a cada usuario/a.

---

## 📄 Descripción

Esta aplicación permite explorar un listado de naves espaciales extraídas desde una API externa, visualizar su información detallada, gestionar usuarios mediante **login/register** con **Firebase**, y proteger rutas para que solo los usuarios autenticados puedan acceder a determinadas secciones.

---

## ✨ Características

### **1️⃣ Listado de naves**

- Se muestra un listado con:
  - **Nombre**
  - **Modelo**
- Implementado **scroll infinito** para cargar más naves a medida que el usuario se desplaza.

### **2️⃣ Detalle de naves**

- Cada nave tiene su propia ficha con información detallada:
  - **Nombre, modelo, longitud, costo, tripulación, velocidad, etc.**
- Se accede mediante **routing dinámico** (`/starship/:id`).
- Se renderizan:
  - **Pilotos de la nave**
  - **Películas en las que aparece**

### **3️⃣ Paginación con Scroll Infinito**

- Mejor experiencia con **scroll infinito**, cargando nuevas naves según necesidad.

### **4️⃣ Navegación y estilos personalizados**

- Navbar superior con enlaces a:
  - **Inicio**
  - **Listado de naves**
  - **Login/Register (si no está autenticado)**
- Maquetación inspirada en la web oficial de Star Wars.

### **5️⃣ Autenticación de usuarios/as**

- **Login y registro con Firebase**.
- Validaciones:
  - **Email único al registrarse**.
  - **Redirección automática al login si intenta acceder a contenido restringido**.
- Integración de **Google Sign-In**.

### **6️⃣ Protección de rutas con AuthGuard**

- Solo usuarios autenticados pueden ver el listado de naves y sus detalles.
- Si un usuario no registrado intenta acceder, se redirige al **login** y luego a la página original.

### **7️⃣ Tests unitarios con Jasmine y Karma**

- Se han creado tests unitarios para:
  - **PilotsComponent**
  - **StarshipsComponent**
  - **StarshipGalleryComponent**
- Se mockean servicios y se testea la correcta visualización de la información.

---

## 💻 Tecnologías utilizadas

- **Angular 19** con Standalone Components
- **TypeScript**
- **SCSS** para estilos personalizados
- **Tailwind 4** para estilos predefinidos
- **Reactive Forms** para validaciones avanzadas
- **RxJS** para manejar asincronía
- **Firebase Authentication** para login y registro
- **Cloudinary** para almacenamiento y gestión de imágenes
- **Jasmine/Karma** para tests unitarios

---

## 📋 Requisitos

- Navegador web moderno.
- Node.js y npm instalados. Descarga desde [nodejs.org](https://nodejs.org/)
- Angular CLI instalado globalmente:

```bash
npm install -g @angular/cli
```

---

## 🛠️ Instalación

### **1️⃣ Clonar el repositorio**

```bash
git clone https://github.com/Victorreca/StarWars
```

### **2️⃣ Ingresar al proyecto**

```bash
cd StarWars
```

### **3️⃣ Instalar dependencias**

```bash
npm install
```

### **4️⃣ Iniciar la aplicación**

```bash
ng serve -o
```

Esto abrirá la aplicación en `http://localhost:4200`.

---

## 🛠️ Uso

1️⃣ Accede a la aplicación en `http://localhost:4200`. 2️⃣ Navega por el listado de naves. 3️⃣ Haz clic en una nave para ver sus detalles. 4️⃣ Regístrate o inicia sesión para desbloquear contenido.

---

## 🤝 Contribuciones

1️⃣ Realiza un **fork** del repositorio. 2️⃣ Crea una **nueva rama** para tus cambios:

```bash
git checkout -b nombre-rama
```

3️⃣ Realiza tus cambios y súbelos al repositorio remoto. 4️⃣ Crea un **pull request** detallando las modificaciones.

---

### 📌 Autor

Desarrollado por **Víctor Redondo** 👨‍💻🚀
