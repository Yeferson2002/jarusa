# Guía de Despliegue - Jarusa

Esta guía te ayudará a desplegar el proyecto **Jarusa** (Backend y Frontend) desde cero.

Repositorio: [https://github.com/Yeferson2002/jarusa.git](https://github.com/Yeferson2002/jarusa.git)

---

## 1. Backend (Render)

Para que la aplicación funcione, primero necesitamos desplegar el servidor.

1.  Ve a **[Render.com](https://render.com/)** y crea un **"New Web Service"**.
2.  Conecta tu repositorio de GitHub `jarusa`.
3.  Configura los siguientes campos:
    *   **Name:** `jarusa-backend` (o el que prefieras)
    *   **Root Directory:** `backend` (Muy importante)
    *   **Environment:** `Node`
    *   **Build Command:** `npm install`
    *   **Start Command:** `node server.js`
4.  **Environment Variables (Variables de Entorno):**
    Agrega las siguientes variables (usando los datos de tu base de datos TiDB):

    | Key | Value |
    | :--- | :--- |
    | `DB_HOST` | `gateway01.us-east-1.prod.aws.tidbcloud.com` |
    | `DB_PORT` | `4000` |
    | `DB_USER` | `2v2MvEpU6CPHHGH.root` |
    | `DB_PASSWORD` | `lrMg7m6ABD0cekrU` |
    | `DB_NAME` | `test` |
    | `JWT_SECRET` | *(Inventa una clave segura, ej: jarusa_secret_123)* |

5.  Haz clic en **"Create Web Service"** y espera a que el despliegue finalice.
6.  **Copia la URL** que te da Render (ej: `https://jarusa-backend.onrender.com`).

---

## 2. Frontend (Vercel)

Una vez que el backend está listo, desplegamos la web.

1.  Ve a **[Vercel.com](https://vercel.com/)** y haz clic en **"Add New..."** -> **"Project"**.
2.  Importa el repositorio `jarusa`.
3.  **Project Settings:**
    *   **Framework Preset:** Vite (lo detectará automáticamente).
    *   **Root Directory:** `./` (Déjalo vacío).
4.  **Environment Variables:**
    Agrega la variable para conectar con el backend:

    | Name | Value |
    | :--- | :--- |
    | `VITE_API_URL` | *(Pega aquí la URL de tu backend de Render)* |

5.  Haz clic en **"Deploy"**.

---

## ¡LISTO! 🎉

Tu proyecto **Jarusa** debería estar funcionando con su nueva URL de Vercel (ej: `jarusa.vercel.app`).
