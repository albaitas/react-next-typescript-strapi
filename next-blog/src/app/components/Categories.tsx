'use client';
import React, { useContext, useLayoutEffect } from 'react';
import Category from './Category';
import { Context } from '../context/Context';
import { CategoriesProps } from '../types';

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
  const { changeCategory } = useContext(Context);

  useLayoutEffect(() => {
    if (categories.data.length > 0) {
      changeCategory(categories.data[0].attributes.title);
    }
  }, [categories]);

  return (
    <div className='flex gap-6 mb-8'>
      {categories.data.map((category) => (
        <div key={category.id}>
          <Category cat={category} />
        </div>
      ))}
    </div>
  );
};

export default Categories;
