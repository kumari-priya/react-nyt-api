import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getArticles: function(query) {
    return axios.get("/api/articles", { params: { q: query}});
  }
};
