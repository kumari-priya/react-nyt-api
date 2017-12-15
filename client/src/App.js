import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import { RecipeList, RecipeListItem } from "./components/RecipeList";
import { Container, Row, Col } from "./components/Grid";

import axios from "axios";

class App extends Component {
  state = {
    articles: [],
    articleSearch: "california",
    isLoading: true,
  };

  getArticles() {
        // This variable will be pre-programmed with our authentication key
        // (the one we received when we registered)
        var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

        // queryURLBase is the start of our API endpoint. The searchTerm will be appended to this when
        // the user hits the search button
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
          authKey + "&q="+ this.state.articleSearch;

          console.log(url);

        axios.get(url)
            .then((response) => {
                console.log('this is response', response.data.response.docs);
                this.setState({
                    isLoading: false,
                    articles: response.data.response.docs,
                });
            });

  }

  componentDidMount() {
    console.log('component mounted!!!');
    this.getArticles();
  }

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      articleSearch: value
    });
    console.log('articleSearch',this.state.articleSearch);
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.getArticles();
  };


  handleSave = event => {
    alert('saved!');
  };


  render() {
    if (this.state.isLoading) {
        return (
            <h1>Loading...</h1>
        );
    }

    return (
      <div>
        <Nav />
        <Jumbotron />
        <Container>
        <Row>
          <Col size="md-12">
            <form>
              <Container>
                <Row>
                  <Col size="xs-9 sm-10">
                    <Input
                      name="articleSearch"
                      value={this.state.articleSearch}
                      onChange={this.handleInputChange}
                      placeholder="Search For an Article"
                    />
                  </Col>
                  <Col size="xs-3 sm-2">
                    <Button
                      onClick={this.handleFormSubmit}
                      type="success"
                      className="input-lg"
                    >
                      Search
                    </Button>
                  </Col>
                </Row>
              </Container>
            </form>
          </Col>
        </Row>
          <Row>
            <Col size="md-12">
              <Container>
                {this.state.articles.map(article => (
                  <Row key={article._id}>
                    <h1>{article.headline.main}</h1>
                    <p>{article.snippet}
                    </p>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleSave}
                        type="success"
                        className="input-lg"
                      >
                        Save
                      </Button>
                    </Col>
                  </Row>
                ))}
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
