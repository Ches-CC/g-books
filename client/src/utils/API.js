import axios from "axios"

export default {
    getBooks: function() {
        return axios.get("/api/books");
    },
    updateBook: function() {
        return axios.get("/api/books/update")
    },
    addBook: function() {
        return axios.get("/api/books/add");
    },
    removeBook: function() {
        return axios.get("/api/books/remove");
    }
};
