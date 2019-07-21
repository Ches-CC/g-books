import React, { Component } from "react";
import ContainerMain from "../../components/SearchContainer";
import API from "../../utils/API";

class SearchPage extends Component {
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
        <div>
          {this.state.books.map(books => (
            <div className="card" key={books._id}>
              <p>Description</p>
              <p>{books.description}</p>
            </div>
          ))}
        </div>

        <ContainerMain />
      </div>
    );
  }
}

export default SearchPage;
