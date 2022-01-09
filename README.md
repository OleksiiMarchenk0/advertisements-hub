# Angular 12 / Django Rest Framework / SQLite app

This is an application showing how to make FrontEnd in Angular and Backend in Python&Django and how to integrate them.

## What this repo contains
* frontend-angular - The Angular app source code lives here
* python-django - Django project with all important files
* docker-compose.yml - file which should combine Dockerfiles

## Requirements
* Python 3.5 or higher (Python 2.x is not supported by Django 2.x)
* [Pipenv](https://pipenv.readthedocs.io/)
* Node v8.x or higher
* NPM v5.x or higher

## Contenerizing project (Docker)
Open a terminal at the repo root, and run the following for running the whole project
```bash
docker-compose up
```
* Backend app will be available at http://127.0.0.1:8000
* Frontend app will be available at http://localhost:4200/
## Setup project without Docker
### Backend
Open project in [PyCharm](https://www.jetbrains.com/pycharm/download/#section=mac). In PyCharm terminal use following commands:
```bash
pipenv shell
cd python-django/AdvertisementsHub_Django
python manage.py runserver
```
Your app will be available at http://127.0.0.1:8000.
### Frontend
Open a terminal at the repo root, and run the following for running Angular project:

```bash
cd frontend-angular
npm install
npm start -o
```
Your app will be available at http://localhost:4200 by default.
### API Endpoints
* http://127.0.0.1:8000/offers - returns list of offers
*  http://127.0.0.1:8000/offers/5 - returns offer with id eq 5
*  http://127.0.0.1:8000/category/ - returns list of categories
*  http://127.0.0.1:8000/category/1 - returns category with id eq 1
###  Database
This project uses a SQLite database, which lives in the file `db.sqlite3`. SQLite3 support should be available out of the box on most modern operating systems.
### Logging into the app

The database included in this repository contains one user. The following is his username and password, which you may use for testing:

- admin / admin

## Tests
For testing API you can use ```tests.py``` file. For running test use following command in the next directory.
Verify if backend server is running before you will start testing
```bash
cd python-django
cd AdvertisementsHub_Django/advertisement_hub
python manage.py test
```









