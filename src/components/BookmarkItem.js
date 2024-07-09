import React from 'react';

const BookmarkItem = ({ bookmark, onDelete, onEdit }) => {
  return (
    <div className="bookmark-item">
      <label>{bookmark.websiteTitle}</label>
      <a href={bookmark.websiteURL} target="_blank" rel="noopener noreferrer">
        {bookmark.websiteURL}
      </a>
      <div>
        <button className="delete" onClick={() => onDelete(bookmark._id)}>Delete</button>
        <button className="edit" onClick={() => onEdit(bookmark)}>Edit</button>
      </div>
    </div>
  );
};

export default BookmarkItem;
