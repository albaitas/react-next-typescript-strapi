import { ReactNode } from 'react';

export interface CategoryContextType {
  category: string;
  changeCategory: (category: string) => void;
}
export interface CategoryProviderProps {
  children: ReactNode;
}
export interface CategoryProps {
  cat: {
    id: string;
    attributes: {
      title: string;
    };
  };
}
export interface CategoryData {
  id: string;
  attributes: {
    title: string;
  };
}

export interface CategoriesProps {
  categories: {
    data: CategoryData[];
  };
}
export interface Blog {
  id: string;
  attributes: {
    title: string;
    description: string;
    img: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    categories: {
      data: {
        attributes: {
          title: string;
        };
      }[];
    };
  };
}
export interface BlogsProps {
  blogs: {
    data: Blog[];
  };
}
export interface BlogCardProps {
  blog: {
    id: string;
    attributes: {
      title: string;
      description: string;
      img: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
    };
  };
}
export interface Params {
  id: number;
}
