// Import our routes for HTML routes and API routes
const routes = require('express').Router();
const htmlRoutes = require('./htmlRoutes')
const apiRoutes = require('./apiRoutes')


routes.use('/api', apiRoutes)
routes.use(htmlRoutes)

module.exports = routes;