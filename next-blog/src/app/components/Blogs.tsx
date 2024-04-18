'use client';
import React, { useContext } from 'react';
import BlogCard from './BlogCard';
import { Context } from '../context/Context';
import { BlogsProps } from '../types';

const Blogs: React.FC<BlogsProps> = ({ blogs }) => {
  const { category } = useContext(Context);

  const filteredBlogs = blogs.data.filter((blog) => {
    return blog.attributes.categories.data.some((cat) => cat.attributes.title === category);
  });

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
      {filteredBlogs.map((blog) => (
        <div key={blog.id}>
          <BlogCard blog={blog} />
        </div>
      ))}
    </div>
  );
};

export default Blogs;
