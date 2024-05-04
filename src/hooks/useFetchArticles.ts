import { useState } from 'react';

const useFetchArticles = () => {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  const fetchArticles = async (query:string) => {
    setLoading(true);
    try {
      const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=7cc1cb81583e40848c40b32ad061a385`);
      if (!response.ok) {
        throw new Error('Failed to fetch articles');
      }
      const { articles } = await response.json();
      setArticles(articles);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return { loading, articles, fetchArticles };
};

export default useFetchArticles;
