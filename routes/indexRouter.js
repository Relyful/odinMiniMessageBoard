const { Router } = require('express');
const { format } = require('date-fns');
const controller = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", controller.indexGet);
indexRouter.get('/new', controller.getNew);
indexRouter.get("/messageDet/:user/:text/:added", controller.getMessage)
indexRouter.post('/new', controller.newPost);

module.exports = indexRouter;