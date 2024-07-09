import React, { useState, useContext, useEffect } from 'react';
import { BookmarkContext } from '../store/bookmark-context';

const BookmarkForm = () => {
  const [webName, setWebName] = useState('');
  const [webUrl, setWebUrl] = useState('');
  const { addBookmark, editBookmark, updateBookmark } = useContext(BookmarkContext);

  useEffect(() => {
    if (editBookmark) {
      setWebName(editBookmark.websiteTitle);
      setWebUrl(editBookmark.websiteURL);
    } else {
      setWebName('');
      setWebUrl('');
    }
  }, [editBookmark]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const bookmarkDetails = { websiteTitle: webName, websiteURL: webUrl };
    if (editBookmark) {
      updateBookmark(editBookmark._id, bookmarkDetails);
    } else {
      addBookmark(bookmarkDetails);
    }
    setWebName('');
    setWebUrl('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="webName">Website title</label>
      <input
        type="text"
        id="webName"
        value={webName}
        onChange={(e) => setWebName(e.target.value)}
        required
      />
      <br />
      <label htmlFor="webUrl">Website URL</label>
      <input
        type="url"
        id="webUrl"
        value={webUrl}
        onChange={(e) => setWebUrl(e.target.value)}
        required
      />
      <br />
      <button type="submit">{editBookmark ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default BookmarkForm;
