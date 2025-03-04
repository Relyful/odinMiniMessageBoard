const { Router } = require('express');
const { format } = require('date-fns')

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: format(new Date(), "yyyy-MM-dd")
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: format(new Date(), "yyyy-MM-dd")
  }
];


const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", { messages });
});
indexRouter.get('/new', (req, res) => {
  res.render('form');
});
indexRouter.get("/messageDet/:user/:text/:added", (req, res) => {
  console.log(req.params);
  const {user, text, added} = req.params;
  res.render("messageDetails", { user, text, added});
})

indexRouter.post('/new', (req, res) => {
  console.log(req.body);
  const newMes = req.body;
  messages.push({ user: newMes.name, text: newMes.text, added: format(new Date(), "yyyy-MM-dd")});
  res.redirect("/");
})

module.exports = indexRouter;