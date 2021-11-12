import React from 'react';

const PostEntry = ({ post }) => {
  let { title, body } = post;
  return (
    <div id='PostEntry'>
      <h5 className='postTitle'>Title: {title}</h5>
      <p className='postBody'>Body: {body}</p>
    </div>
  );
};

export default PostEntry;
