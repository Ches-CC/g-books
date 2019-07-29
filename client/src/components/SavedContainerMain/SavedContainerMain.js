import React, { Component } from "react";
import SavedContainerSecondary from "./SavedContainerSecondary"
import SavedTitle from "./SavedTitle";

class SavedContainerMain extends Component {
    


    render(){
        return (
            <div>
                <SavedTitle />
                <SavedContainerSecondary />                
            </div>
        );
    }
}

export default SavedContainerMain;
