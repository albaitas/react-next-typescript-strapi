import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BlogCardProps } from '../types';

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const truncateBlogDesc = blog.attributes.description.length > 80 ? blog.attributes.description.substring(0, 80) + '...' : blog.attributes.description;

  const imageUrl = process.env.NEXT_PUBLIC_API_URL + blog.attributes.img.data.attributes.url;

  return (
    <div className='rounded-lg shadow-md p-2 mb-4 overflow-hidden border border-gray-600 cursor-pointer'>
      <Link href={`/blog/${blog.id}`}>
        <div className='relative w-full h-1' style={{ paddingBottom: '100%' }}>
          <Image src={imageUrl} priority width={360} height={360} alt='Picture of the author' />
        </div>
        <div className='p-2'>
          <h2 className='text-xl font-semibold mb-2 overflow-ellipsis'>{blog.attributes.title}</h2>
          <p className='text-gray-600'>{truncateBlogDesc}</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
