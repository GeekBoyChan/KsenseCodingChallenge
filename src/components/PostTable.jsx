import React from 'react';
import PostEntry from './PostEntry.jsx';

let PostTable = ({ selectedUsersPosts }) => {
  return (
    <div id='PostTable'>
      <h4 className='title'>User's Posts</h4>
      {!selectedUsersPosts && <p className='message'>No user selected</p>}
      {selectedUsersPosts &&
        selectedUsersPosts.map((post) => {
          return <PostEntry post={post} key={post.id} />;
        })}
    </div>
  );
};

export default PostTable;
