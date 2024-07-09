import React, { useContext } from 'react';
import { BookmarkContext } from '../store/bookmark-context';
import BookmarkItem from './BookmarkItem';

const BookmarkList = () => {
  const { bookmarks, deleteBookmark, setEditBookmark } = useContext(BookmarkContext);

  return (
    <div>
      {bookmarks.map((bookmark) => (
        <BookmarkItem
          key={bookmark._id}
          bookmark={bookmark}
          onDelete={deleteBookmark}
          onEdit={setEditBookmark}
        />
      ))}
    </div>
  );
};

export default BookmarkList;
