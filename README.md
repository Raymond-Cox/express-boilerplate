# mentorship-node-kickoff

Kickoff project to get our feet wet with Node.js and Express.

## Setup

Begin by installing the npm dependencies required to run the project:

```bash
npm install
```

## Running the server

Reference the `package.json` file for available scripts. The start script will run a localhost express server on port 3000.

```bash
npm run start
```

Open http://localhost:3000 in your web browser. You should see Hello World!

## Routes

### User(s)

Currently these routes are responding with hardcoded sample data from `{root}/data/users.json`.

#### Single-user lookups

- [/user/:userid](http://localhost:3000/user/1) will (currently) echo the userid parameter sent to the route.

#### Multi-user lookups

- [/users](http://localhost:3000/users) will return all users.
