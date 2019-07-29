import React, { Component } from "react";
import SearchContainerSecondary from "./SearchContainerSecondary";
import SearchTitle from "./SearchTitle";

class SearchContainerMain extends Component {
  

  render() {
    return (
      <div>
        <SearchTitle />
        <SearchContainerSecondary />
      </div>
    );
  }
}

export default SearchContainerMain;