# ShadowAgent

## Overview

ShadowAgent is an AI-based monitoring dashboard that helps organizations monitor multiple AI agents from one place. It allows users to view agent activity, detect suspicious behavior, and monitor system logs through a simple web interface.

---

## Features

* Monitor multiple AI agents
* View agent status in real time
* Detect suspicious or unusual activities
* Display system logs
* User-friendly dashboard
* Simple and clean interface

---

## Technologies Used

### Backend

* Python
* FastAPI
* Uvicorn

### Frontend

* React
* Vite
* HTML
* CSS
* JavaScript

---

## Project Structure

```
ShadowAgent/
│
├── agents/          # AI agents
├── frontend/        # React frontend
├── shadowagent/     # Backend modules
├── api.py           # API routes
├── app.py           # Main application
├── config.py        # Configuration
├── requirements.txt # Python dependencies
└── README.md
```

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/Ambika115/ShadowAgent.git
```

### 2. Open the project

```bash
cd ShadowAgent
```

### 3. Create a virtual environment

```bash
python -m venv .venv
```

### 4. Activate the virtual environment

**Windows**

```bash
.venv\Scripts\activate
```

### 5. Install the required packages

```bash
pip install -r requirements.txt
```

---

## Run the Backend

```bash
python app.py
```

or

```bash
uvicorn api:app --reload
```

---

## Run the Frontend

Go to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the application:

```bash
npm run dev
```

---

## Future Improvements

* AI-based threat detection
* Trust scoring for AI agents
* Authentication and user login
* Database integration
* Email alerts
* Analytics dashboard

---

## Author

**Ambika Korala**

B.Tech CSE (Cybersecurity)


