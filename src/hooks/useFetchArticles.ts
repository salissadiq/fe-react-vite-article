import { useState } from 'react';

const useFetchArticles = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([])
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("")

  const fetchArticles = async (query: string) => {
    setLoading(true);
    try {
    const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await usersResponse.json();

      const user = users.find((user: any) => user.name === query);
      setUser(user)
    if (user) {

      const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
      const posts = await postsResponse.json();
      setLoading(false);
      return setArticles(posts);
    }
    const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?title=${encodeURIComponent(query)}`);
      const posts = await postsResponse.json();
      const getUserById = await fetch(`https://jsonplaceholder.typicode.com/users?id=${posts[0].userId}`);
      const returnedUser = await getUserById.json()
      setUser(returnedUser[0]);
      setArticles(posts);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      setError(error);
    console.error('Error:', error.message);
    return null;
  }
  };

  return { loading, articles, fetchArticles, user, error };
};

export default useFetchArticles;
