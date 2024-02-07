# Apartements App

## Prequesites

You need to have the following installed on your machine:

- [Node.js](http://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [MongoDB](https://www.mongodb.com/) (optional, for saving logging to db)

## Installation

1. Clone the repository

```sh
git clone https://github.com/FaroukAmr/apartements.git
cd apartements
```

2. Backend installation

```sh
cd server
npm install
```

**Note:** You need to setup your environment variables in a .env file in the server folder. You can use the .env.example file as a template. You also need PostgreSQL to be running.

```sh
npm run create-seed-db
```

3. Frontend installation

```sh
cd client
npm install
```

4. Mobile installation

```sh
cd mobile
npm install
```

**Note:** In order to be able to talk to the backend in your emulator/expo app, you need to change the `url` in the `mobile/hook/useFetch.ts` file to your local IP address. The browser works fine though.

## Sample API requests

1. Create an apartment

```sh
curl -X POST localhost:8080/apartements
-H "Content-Type: application/json"
-d '{
    "price": "1000000",
    "location": "Cairo",
    "developer": "TMG",
    "bedrooms": "2",
    "bathrooms": "2",
    "type": "Apartement",
    "area": "Rehab",
    "image": "path",
    "description": "Rehab city apartement",
    "name": "Rehab city apt"
}'
```

**Note:** Image is nullable

2. Get all apartments

```sh
curl localhost:8080/apartements
```

3. Get an apartment by id

```sh
curl localhost:8080/apartements/65dba4f2-504a-4419-9f3c-0cf0da8e76a6
```
