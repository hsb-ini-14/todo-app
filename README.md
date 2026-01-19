# 📝 To-Do App

A clean and responsive **To-Do App** built with **React, Vite, and Tailwind CSS**.  
This project demonstrates CRUD operations, localStorage persistence, and basic state management with filters for better task organization.

🔗 **Live Demo:** https://hsb-ini-14.github.io/todo-app

---

## ✨ Features

* ➕ Add new tasks with validation  
* ✏️ Edit existing tasks  
* ✅ Mark tasks as completed  
* 🗑️ Delete tasks  
* 🔍 Filter tasks (All / Pending / Completed)  
* 💾 Persistent storage using `localStorage`  
* 📱 Fully responsive UI  
* 🎨 Styled with Tailwind CSS  
* ⚡ Built using Vite for fast development  

---

## 🛠️ Tech Stack

* **React** – UI components & state management  
* **Vite** – Fast build tool & dev server  
* **Tailwind CSS** – Utility-first styling  
* **nanoid** – Unique ID generation  
* **GitHub Pages** – Deployment  

---

## 📁 Project Structure

```text
todo-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Completed.jsx
│   │   ├── CreateTodo.jsx
│   │   ├── DeleteTodo.jsx
│   │   ├── FilterTodos.jsx
│   │   └── ReadTodo.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── vite.config.js
├── package.json
└── README.md
```

---

## 🚀 Getting Started

Follow these steps to run the project locally:

### 1️⃣ Clone the repository

```bash
git clone https://github.com/hsb-ini-14/todo-app.git
cd todo-app
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start the development server

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:5173
```

---

## 🌍 Deployment to GitHub Pages

This project is deployed using **gh-pages**.

### Steps used:

1. Install gh-pages

```bash
npm install --save-dev gh-pages
```

2. Set base path in `vite.config.js`

```js
export default defineConfig({
  base: "/todo-app/",
});
```

3. Add scripts to `package.json`

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

4. Deploy

```bash
npm run deploy
```

---

## 🧩 How It Works

* Tasks are stored in a `todos` state inside `App.jsx`  
* On first load, tasks are initialized from `localStorage` (or a default task is added)  
* Any change to tasks is synced back to `localStorage` using `useEffect`  
* Users can:
  - Add tasks (`CreateTodo.jsx`)
  - Edit task text (`ReadTodo.jsx`)
  - Mark tasks as completed (`Completed.jsx`)
  - Delete tasks (`DeleteTodo.jsx`)
  - Filter tasks (`FilterTodos.jsx`)  

---

## 📸 Preview

> to be added later

---

## 🙌 Acknowledgements

* UI styling powered by [Tailwind CSS](https://tailwindcss.com/)  
* Build tool by [Vite](https://vitejs.dev/)  
* Unique IDs generated using [nanoid](https://github.com/ai/nanoid)

---

## 👤 Author

**Harsh Singh Bhaduria**

* GitHub: https://github.com/hsb-ini-14

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub — it really helps! 😊
