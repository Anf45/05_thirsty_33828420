# Thirsty Student Shop

## Overview
Thirsty Student is a Node.js + Express web application that uses **EJS**  to render dynamic pages for a drinks shop.

The project:
- Express routes and EJS templating
- Dynamic data rendering
- GET and POST forms (search + register)
- Customer survey form with multiple select categories
- Shared navigation partial
- Styling via an external CSS file

## Routes
| Route | Description |
|-------|--------------|
| `/` | Home page – dynamic list of drink categories & sub-items |
| `/about` | Shop locations, managers & addresses |
| `/search` | Search form (GET) |
| `/register` | Registration form (POST) |
| `/survey` | Customer survey (GET + POST results) |

## Running the app
```bash
npm install
node index.js
