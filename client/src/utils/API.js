import axios from "axios"

export default {
    getBooks: function() {
        return axios.get("/api/books");
    },
    updateBook: function(updateBook) {
        return axios.get("/api/books/update", updateBook)
    },
    addBook: function(addBook) {
        return axios.get("/api/books/add", addBook);
    },
    removeBook: function(id) {
        return axios.get("/api/books/remove/" + id);
    }
};
