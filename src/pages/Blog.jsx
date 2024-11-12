import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import blogData from '../data/blogData.json';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(blogData);
  }, []);

  return (
    <div className="p-8 bg-black text-white pt-24">
      <h1 className="text-5xl font-bold text-center mb-12">Blog</h1>
      <div className="space-y-12">
        {posts.map((post) => (
          <div key={post.id} className="flex flex-col md:flex-row items-center bg-gray-800 p-6 rounded-lg shadow-lg space-y-4 md:space-y-0 md:space-x-8">
            <img src={post.image} alt={post.title} className="w-full md:w-1/3 rounded-lg h-64 object-cover" />
            <div className="md:w-2/3">
              <h2 className="text-3xl font-semibold">{post.title}</h2>
              <p className="text-lg text-gray-300 mt-2">{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className="mt-4 inline-block px-4 py-2 bg-lime-600 text-white rounded-lg hover:bg-lime-400 transition duration-300">
                Leer más
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
