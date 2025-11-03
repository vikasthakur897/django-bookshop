# 📚 BookShop — Django + React + PostgreSQL + TailwindCSS

A full-stack Book Shop web application built with **Django (backend)**, **React (frontend)**, **PostgreSQL (database)**, **TailwindCSS (styling)**, and **Pipenv** for environment management.

---

## 🚀 Tech Stack

- **Backend:** Django (Python)
- **Frontend:** React + TailwindCSS (Vite)
- **Database:** PostgreSQL
- **Environment:** Pipenv
- **API:** Django REST Framework

---

## ⚙️ Prerequisites

Make sure you have the following installed:

- Python ≥ 3.10  
- Node.js ≥ 18  
- PostgreSQL ≥ 14  
- Pipenv  
- Git  

---

## 🛠️ Backend Setup (Django)

```bash
# Clone the repository
git clone https://github.com/vikasthakur897/django-bookshop.git

cd django-bookshop

# Create and activate virtual environment
pipenv install --dev
pipenv shell

# Install Django and required dependencies
pipenv install django djangorestframework psycopg2-binary corsheaders

# Create Django project
django-admin startproject backend .

# Apply migrations
python manage.py migrate

# Run the Django development server
python manage.py runserver

```

## 🧩 Database Configuration (PostgreSQL)

In your Django project’s ``` settings.py ```, configure PostgreSQL:

```
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'bookshop_db',
        'USER': 'postgres',
        'PASSWORD': 'yourpassword',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```

then run:

```
python manage.py migrate
```

## 💻 Frontend Setup (React + TailwindCSS)

```
# Navigate to frontend folder
cd frontend


# Install dependencies
npm install


# Start frontend
npm run dev
```

## 🔗 Connecting React & Django

- Install and configure CORS in Django:

```
pipenv install django-cors-headers
```

Add to ```INSTALLED_APPS``` and middleware in ```settings.py```:

```
INSTALLED_APPS = [
    ...,
    'corsheaders',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    ...,
]

CORS_ALLOW_ALL_ORIGINS = True
```

- In React, use Axios or Fetch to call your Django API.


## 🌍 Run the Project

Start Django Server

```
pipenv shell
python manage.py runserver
```

Start React Frontend

```
cd frontend
npm run dev
```

## Access:

- Backend API: http://127.0.0.1:8000/

- Frontend App: http://127.0.0.1:5173/