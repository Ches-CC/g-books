import React, { Component } from "react";
// import CardDisplay from "../CardDisplay";
import API from "../../utils/API";

class ContainerSecondary extends Component {
  state = {
    books: [],
    authors: [],
    description: "",
    image: "",
    link: "",
    title: ""
  };

  componentDidMount() {
    this.loadBooks();
    console.log(this.state.books);
  }

  loadBooks = () => {
    API.getBooks().then(res => this.setState({ books: res.data }));
  };


  render() {
    return (
      <div>
        <div className="row">
          <div className="col-6 mx-auto">
            {this.state.books.map(book => (
              <div className="card" key="books._id">
                <div className="card-img">{book.image}</div>
                <div className="card-header">{book.title}</div>
                <div className="card-body">
                  <p>{book.authors}</p>
                  <p>{book.description}</p>
                </div>
                <div className="card-footer">{book.link}</div>
                <button className="btn">View</button>
                <button className="btn">Save</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ContainerSecondary;
