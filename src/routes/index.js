const { Router } = require('express');

const usersRoutes = require('./users.routes');
const dishesRoutes = require("./dishes.routes");
const sessionsRouter = require("./sessions.routes");

const routes = Router();
routes.use('/users', usersRoutes);
routes.use("/dishes", dishesRoutes);
routes.use("/sessions", sessionsRouter);

module.exports = routes;