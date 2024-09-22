import React, { useState } from 'react';

const Comment = ({ comment, addReply }) => {
  const [replyText, setReplyText] = useState('');

  const handleReply = () => {
    if (replyText.trim()) {
      addReply(comment.id, replyText);
      setReplyText('');
    }
  };

  return (
    <div style={{ marginLeft: '20px', marginBottom: '10px' }}>
      <p><strong>{comment.author}</strong>: {comment.text}</p>
      <div>
        {comment.replies.map(reply => (
          <Comment key={reply.id} comment={reply} addReply={addReply} />
        ))}
      </div>
      <input
        type="text"
        placeholder="Reply..."
        value={replyText}
        onChange={(e) => setReplyText(e.target.value)}
      />
      <button onClick={handleReply}>Reply</button>
    </div>
  );
};

export default Comment;
