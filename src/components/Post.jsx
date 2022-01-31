import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Button from './Button';

const Post = ({ post, deletePost }) => {
  return (
    <Card>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
      <Button onClick={() => deletePost(post.id)}>Delete Post</Button>
    </Card>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
};

export default Post;
