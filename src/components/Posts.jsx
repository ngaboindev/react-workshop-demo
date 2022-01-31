import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './Post';

let url = `https://jsonplaceholder.typicode.com`;

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(`${url}/posts`);
      return res;
    } catch (error) {
      setLoading(false);
      setError(error);
      console.error(error);
    }
  };

  const deletePost = async (id) => {
    try {
      await axios.delete(`${url}/posts/${id}`);
      return;
    } catch (error) {
      setLoading(false);
      setError(error);
      console.error(error);
    }
  };

  useEffect(async () => {
    const { data } = await fetchPosts();
    setLoading(false);
    setPosts(data || 'no posts');
  }, []);

  return (
    <>
      <div className="flex-container">
        {loading && <p>loading...</p>}
        {error && <p>Error occured</p>}
        <h1>posts</h1>
        <div className="flex-card-container">
          {!loading &&
            !error &&
            posts.map((post) => (
              <Post post={post} key={post.id} deletePost={deletePost} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Posts;
