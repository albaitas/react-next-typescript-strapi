import Blogs from './components/Blogs';
import Categories from './components/Categories';

async function fetchData(endpoint: string) {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
    }
  };

  try {
    const res = await fetch(`http://127.0.0.1:1337/api/${endpoint}`, options);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    throw new Error('Failed to fetch data');
  }
}

export default async function Home() {
  try {
    const [categories, blogs] = await Promise.all([fetchData('categories'), fetchData('blogs?populate=*')]);

    return (
      <div>
        <Categories categories={categories} />
        <Blogs blogs={blogs} />
      </div>
    );
  } catch (error) {
    return <div>Failed to load data</div>;
  }
}
