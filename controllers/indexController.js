const path = require("path");
const db = require("../db/queries");
const { format } = require("date-fns");

exports.indexGet = async (req, res) => {
  const result = await db.getAllMessages();
  const messages = result.map(msg => ({
    ...msg,
    added: format(new Date(msg.added), "dd.MM.yyyy HH:mm")
  }));
  res.render("index", { messages });
};

exports.newPost = async (req, res) => {
  console.log(req);
  const newMes = req.body;
  db.postNewMessage(newMes.username, newMes.text);
  res.redirect("/");
}

exports.getMessage = async (req, res) => {
  console.log(req.params);
  const {user, text, added} = req.params;
  res.render("messageDetails", { user, text, added});
};

exports.getNew = async (req, res) => {
  res.render('form');
};