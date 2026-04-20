

# README.md

# AI-Based ENT Clinical Decision Support System

An intelligent healthcare platform designed to assist ENT specialists with faster screening, patient management, and AI-powered diagnostic support.

## 🚀 Features

### ✅ Current Prototype Modules

* 🎤 Voice Disorder Screening (WAV upload + AI prediction)
* 👨‍⚕️ Patient Management System
* 📊 Clinical Dashboard
* 🖥️ Premium React Frontend UI
* ⚡ FastAPI Backend APIs
* 💾 SQLite Database Support

### 🔜 Planned Modules

* Audiogram Interpretation
* Vertigo Risk Prediction
* Treatment Recommendation Engine
* PDF Medical Reports
* Doctor Login & Role Management
* Cloud Deployment

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* JavaScript
* CSS

### Backend

* FastAPI
* Python

### AI / ML

* Scikit-learn
* Librosa
* NumPy
* Pandas

### Database

* SQLite (Prototype)
* PostgreSQL (Production Ready Future Upgrade)

---

## 📁 Project Structure

```text
ent-ai-system/
│── backend/
│── frontend/
│── storage/
│── docs/
│── data/
```

---

## ⚙️ Installation

## Backend

```bash
cd backend
pip install -r requirements.txt
python -m uvicorn app.main:app --reload
```

Backend runs at:

```text
http://127.0.0.1:8000
```

Swagger Docs:

```text
http://127.0.0.1:8000/docs
```

---

## Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

---

## 🎯 Prototype Goal

To demonstrate how Artificial Intelligence can support ENT clinics by improving screening efficiency, reducing triage time and digitizing workflows.

---

## ⚠️ Disclaimer

This system is a prototype clinical decision support tool and is not intended to replace licensed medical diagnosis.

NOTE: This project is currently a prototype under development.

It is not yet production deployed, not medically certified, and not intended to replace licensed clinical diagnosis.
---

## 📌 Future Roadmap

* Multi-hospital deployment
* Real-time analytics dashboard
* EMR Integration
* AI model optimization using clinical datasets
* Secure patient authentication system

---

## 👨‍💻 Developer

Built as an AI healthcare innovation project using modern full-stack architecture.

---
