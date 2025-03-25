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