'use client';
import React, { createContext, useState } from 'react';
import { CategoryContextType, CategoryProviderProps } from '../types';

const initialCategoryContext: CategoryContextType = {
  category: '',
  changeCategory: () => {}
};

export const Context = createContext<CategoryContextType>(initialCategoryContext);

export const CategoryProvider: React.FC<CategoryProviderProps> = ({ children }) => {
  const [category, setCategory] = useState<string>(initialCategoryContext.category);

  const changeCategory = (cat: string) => {
    setCategory(cat);
  };

  const categoryContextValue: CategoryContextType = {
    category,
    changeCategory
  };

  return <Context.Provider value={categoryContextValue}>{children}</Context.Provider>;
};
