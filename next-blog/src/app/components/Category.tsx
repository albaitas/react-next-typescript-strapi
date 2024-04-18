'use client';
import React, { useContext } from 'react';
import { Context } from '../context/Context';
import { CategoryProps } from '../types';

const Category: React.FC<CategoryProps> = ({ cat }) => {
  const { category, changeCategory } = useContext(Context);

  const handleClick = () => {
    changeCategory(cat.attributes.title);
  };

  return (
    <div onClick={handleClick} className={`${cat.attributes.title === category ? 'bg-[#ffffff] text-black' : 'bg-[#af8533]'}  p-4 rounded-lg shadow-md cursor-pointer`}>
      {cat.attributes.title}
    </div>
  );
};

export default Category;
