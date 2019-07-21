import React, { Component } from "react";
import Title from "../../components/Title";
import ContainerMain from "../../components/SearchContainer";
import ContainerSecondary from "../../components/ContainerSecondary";
import SavedTitle from "../../components/SavedTitle";

class SavedPage extends Component {
  

  render() {
    return (
      <div>
        <Title />
        <SavedTitle />
        <ContainerMain />
        <ContainerSecondary />
      </div>
    );
  }
}

export default SavedPage;
