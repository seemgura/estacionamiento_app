# 🚗 Aplicación Web de Estacionamiento

Esta es una aplicación web desarrollada con **Node.js** y **Express.js** que permite gestionar una lista de vehículos en un estacionamiento. Ofrece una interfaz gráfica básica y funcionalidades CRUD (Crear, Leer, Actualizar y Eliminar) simuladas con un arreglo en memoria.

---

## 🧩 Funcionalidades

- ✅ Consultar todos los registros de vehículos
- ✅ Consultar un vehículo por posición
- ✅ Agregar nuevos vehículos
- ✅ Editar vehículos existentes
- ✅ Eliminar vehículos

---

## 📁 Estructura del Proyecto

```
estacionamiento_app/
├── public/
│   └── index.html        # Interfaz gráfica (frontend)
├── server.js             # Lógica del servidor (backend)
└── package.json          # Dependencias y configuración
```

---

## 🚀 Despliegue en Render

### 1. Crear una cuenta en [Render](https://render.com)

### 2. Subir este proyecto a un repositorio en GitHub

### 3. Crear un nuevo Web Service en Render

- Inicia sesión en [https://render.com](https://render.com)
- Haz clic en **New → Web Service**
- Conecta tu cuenta de GitHub
- Selecciona tu repositorio `estacionamiento_app`

### 4. Configuración del servicio

- **Environment**: `Node`
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Root Directory**: (déjalo vacío)

### 5. Crear el servicio

Render instalará las dependencias y desplegará la aplicación automáticamente. Al finalizar, te dará una URL pública donde podrás ver y probar tu app.

---

## 🌐 Acceso a la App

- **Inicio (index.html)**: `/`
- **Obtener todos los vehículos**: `/vehiculos`
- **Obtener vehículo individual**: `/vehiculos/:id`
- **Agregar vehículo (POST)**: `/vehiculos`
- **Editar vehículo (PUT)**: `/vehiculos/:id`
- **Eliminar vehículo (DELETE)**: `/vehiculos/:id`

---

## 🛠 Tecnologías Utilizadas

- Node.js
- Express.js
- HTML/CSS básico
- Fetch API

---

## ⚠️ Nota

Actualmente los datos se almacenan en un arreglo en memoria, lo que significa que **los cambios se pierden si se reinicia el servidor**. Para una solución con persistencia real, se recomienda integrar una base de datos como PostgreSQL o MongoDB.

---

## ✍️ Autor

Desarrollado para fines educativos por [Tu Nombre Aquí].
