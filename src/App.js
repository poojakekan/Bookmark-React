import React from 'react';
import BookmarkProvider from './store/bookmark-context';
import BookmarkForm from './components/BookmarkForm';
import BookmarkList from './components/BookmarkList';
import './App.css';

const App = () => {
  return (
    <BookmarkProvider>
      <div className="App">
        <h1>Bookmark Website</h1>
        <BookmarkForm />
        <h3>All Bookmarks</h3>
        <BookmarkList />
      </div>
    </BookmarkProvider>
  );
};

export default App;
