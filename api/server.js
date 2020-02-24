const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const AuthRouter = require('../routers/auth-router');
const PokeRouter = require('../routers/pokemon-router');
const TeamsRouter = require('../routers/teams-router');
const UsersRouter = require('../routers/users-router');
const server = express();

//global middleware
server.use(express.json()); //middleware needed to parse JSON
server.use(helmet()); //middleware that adds a layer of security to the server
server.use(cors()); //middleware that allows cross domain communication from the browser

//endpoints
server.get('/', (req, res) => {
  res.status(200).json({ you: `are the best like no one ever was` });
});

//routes
server.use('/api/auth', AuthRouter);
server.use('/api/pokemon', PokeRouter);
server.use('/api/teams', TeamsRouter);
server.use('/api/users', UsersRouter);

module.exports = server