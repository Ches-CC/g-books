import React, { Component } from "react";

class CardDisplay extends Component {

    render(){
        return(
            <div className="row">
                <div className="col-8 mx-auto">
                    <div className="card">
                        <div className="card-img">Photo!</div>
                        <div className="card-header">Head</div>
                        <div className="card-body">Body</div>
                        <div className="card-footer">Footer</div>
                        <button className="btn">View</button>
                        <button className="btn">Save</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardDisplay;
