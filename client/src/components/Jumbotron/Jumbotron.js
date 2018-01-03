import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
  <div className="jumbotron text-center">
    <h1>NYT Articles</h1>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://api.nytimes.com/svc/search/v2/"
    >
      Powered by NYT
    </a>
  </div>
);

export default Jumbotron;
