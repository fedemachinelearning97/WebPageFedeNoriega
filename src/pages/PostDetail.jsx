import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import blogData from '../data/blogData.json';

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const foundPost = blogData.find((p) => p.id === parseInt(id));
    if (foundPost) {
      setPost(foundPost);
    } else {
      navigate('/blog');
    }
  }, [id, navigate]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8 text-white bg-black md:w-10/12 mx-auto space-y-6 pt-10">
      <button
        onClick={() => navigate('/blog')}
        className="px-4 py-2 bg-lime-600 text-white rounded hover:bg-lime-400 transition duration-300"
      >
        Volver al Blog
      </button>
      <h1 className="text-5xl font-bold mb-4 text-center">{post.title}</h1>
      <img src={post.image} alt={post.title} className="w-full rounded-lg shadow-lg h-96 object-cover" />
      <p className="text-lg mt-6">{post.content}</p>
    </div>
  );
};

export default PostDetail;
