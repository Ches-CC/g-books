import React, { Component } from "react";
import Title from "../../components/Shared/Title";
import SearchContainerMain from "../../components/SearchContainerMain";

class SearchPage extends Component {
  
  render() {
    return (
      <div>
        <Title />
        <SearchContainerMain />
      </div>
    );
  }
}

export default SearchPage;
