import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostIt = () => {
  const [postIts, setPostIts] = useState([]);
  const [text, setText] = useState('');

  // Fetch Post-Its from API
  useEffect(() => {
    axios.get('http://localhost:5000/api/postits')
      .then(response => setPostIts(response.data))
      .catch(error => console.error(error));
  }, []);

  // Handle add new Post-It
  const handleAdd = () => {
    if (!text) return;

    axios.post('http://localhost:5000/api/postits', { text })
      .then(response => {
        setPostIts([...postIts, response.data]);
        setText('');
      })
      .catch(error => console.error(error));
  };

  // Handle edit Post-It
  const handleEdit = (id) => {
    const newText = prompt('Enter new text');
    if (!newText) return;

    axios.put(`http://localhost:5000/api/postits/${id}`, { text: newText })
      .then(response => {
        setPostIts(postIts.map(postIt => postIt._id === id ? response.data : postIt));
      })
      .catch(error => console.error(error));
  };

  // Handle delete Post-It
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/postits/${id}`)
      .then(() => {
        setPostIts(postIts.filter(postIt => postIt._id !== id));
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Post-It Notes</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a new Post-It"
      />
      <button onClick={handleAdd}>Add</button>

      <div className="post-it-list">
        {postIts.map((postIt) => (
          <div key={postIt._id} className="post-it">
            <p>{postIt.text}</p>
            <button onClick={() => handleEdit(postIt._id)}>Edit</button>
            <button onClick={() => handleDelete(postIt._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostIt;
