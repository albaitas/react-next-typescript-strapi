import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Params } from '../../types';

async function fetchBlog(id: number) {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
    }
  };

  try {
    const res = await fetch(`http://127.0.0.1:1337/api/blogs/${id}?populate=*`, options);
    const response = await res.json();
    console.log('o', response.data.id);
    return response;
  } catch (err) {
    console.error(err);
  }
}

const BlogPage = async ({ params }: { params: Params }) => {
  const blog = await fetchBlog(params.id);

  const imageUrl = process.env.NEXT_PUBLIC_API_URL + blog.data.attributes.img.data.attributes.url;

  return (
    <div className='max-w-3xl mx-auto p-4'>
      <Link href='/'>{'< Back'}</Link>
      <div className='relative w-full h-96 overflow-hidden rounded-lg mt-5'>
        <Image priority width={360} height={360} sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' src={imageUrl} alt={''} />
      </div>
      <div className='mt-4'>
        <h1 className='text-3xl font-semibold'>{blog.data.attributes.title}</h1>
        <p className='text-gray-600 mt-2 text-justify'>{blog.data.attributes.description}</p>
        <div className='mt-4 flex items-center text-gray-400'>
          <span className='text-sm'>Published on {new Date(blog.data.attributes.publishedAt).toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
