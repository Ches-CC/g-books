import React, { Component } from "react";
import Title from "../../components/Title";
import ContainerMain from "../../components/SearchContainer";
import ContainerSecondary from "../../components/ContainerSecondary";
import SearchContainer from "../../components/SearchContainer";

class SearchPage extends Component {
  

  render() {
    return (
      <div>
        <Title />
        <SearchContainer />
        <ContainerMain />
        <ContainerSecondary />
      </div>
    );
  }
}

export default SearchPage;
