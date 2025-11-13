# Landing Page Django Setup

This repository now runs the landing page inside a Django project so you can iterate on the site with Python back-end features later.

## Requirements

- Python 3.12 (bundled with `py` on Windows)

## Initial Setup

```powershell
cd C:\Users\ASUS\OneDrive\Desktop\landingpage
py -m venv venv
.\venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
python -m pip install -r requirements.txt
```

## Running the Site Locally

```powershell
cd C:\Users\ASUS\OneDrive\Desktop\landingpage
.\venv\Scripts\Activate.ps1
python manage.py runserver
```

Open http://127.0.0.1:8000/ to view the landing page. The thank-you page lives at http://127.0.0.1:8000/thank-you/.

## Project Structure Highlights

- `landingpage_site/` – Django project configuration.
- `main/` – App serving the landing page.
  - `templates/main/` – `index.html` and `thankyou.html`.
  - `static/main/style.css` – Stylesheet referenced via Django static files.

## Database

SQLite (`db.sqlite3`) is created automatically after running `python manage.py migrate`.

## Next Steps

- Add a form handler if you want to persist form submissions instead of redirecting to WhatsApp.
- Configure deployment settings (`DEBUG`, `ALLOWED_HOSTS`, static hosting) before going to production.


