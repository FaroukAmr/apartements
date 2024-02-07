# Apartements App

## Prequesites

You need to have the following installed on your machine:

- [Node.js](http://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [MongoDB](https://www.mongodb.com/) (optional, for db logging)

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
