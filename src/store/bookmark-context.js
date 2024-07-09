import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const apiURL = "https://crudcrud.com/api/48f435f6a4e14cc4aa8eacd696aa6931/bookmarkLinks";

export const BookmarkContext = createContext();

const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);
  const [editBookmark, setEditBookmark] = useState(null);

  useEffect(() => {
    getDataFromServer();
  }, []);

  const getDataFromServer = () => {
    axios
      .get(apiURL)
      .then(response => {
        setBookmarks(response.data);
      })
      .catch(error => console.error(error));
  };

  const addBookmark = (bookmarkDetails) => {
    axios
      .post(apiURL, bookmarkDetails)
      .then(() => {
        getDataFromServer();
      })
      .catch(error => console.error(error));
  };

  const updateBookmark = (id, updatedDetails) => {
    axios
      .put(`${apiURL}/${id}`, updatedDetails)
      .then(() => {
        getDataFromServer();
        setEditBookmark(null);
      })
      .catch(error => console.error(error));
  };

  const deleteBookmark = (id) => {
    axios
      .delete(`${apiURL}/${id}`)
      .then(() => {
        getDataFromServer();
      })
      .catch(error => console.error("Error deleting bookmark:", error));
  };

  return (
    <BookmarkContext.Provider
      value={{
        bookmarks,
        editBookmark,
        addBookmark,
        updateBookmark,
        deleteBookmark,
        setEditBookmark,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};

export default BookmarkProvider;
