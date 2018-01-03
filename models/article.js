const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  keyword: { type: String, required: true },
  headline: { type: String, required: true },
  snippet: String,
  date: { type: Date, default: Date.now }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
