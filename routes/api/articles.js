const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");
const axios = require("axios");

// Matches with "/api/books"
router.route("/")
  .get("/articles", (req, res) => {
    // This variable will be pre-programmed with our authentication key
    // (the one we received when we registered)
    var authKey = "c8b5eff77c2a44ad84b927d3fb22c80e";
    // queryURLBase is the start of our API endpoint. The searchTerm will be appended to this when
    // the user hits the search button
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
      authKey +"q=bitcoin";
    console.log('in API')
    axios
      .get(url, { params: req.query })
      .then(({ data: { results } }) => res.json(results))
      .catch(err => res.status(422).json(err));
  })
  .post(articlesController.create);
  
// Matches with "/api/articles/:id"
router
  .route("/:id")
  .get(articlesController.findById)
  .put(articlesController.update)
  .delete(articlesController.remove);

module.exports = router;
