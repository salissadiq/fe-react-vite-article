import { IoSearchOutline } from 'react-icons/io5';

import Result from '../components/Search/Result';
import { useEffect, useState } from 'react';

import useFetchArticles from '../hooks/useFetchArticles';

export default function SearchresultPage() {
  const [query, setQuery] = useState('');
  const { loading, articles, fetchArticles, user } = useFetchArticles();
  const handleSearch = async (e: any) => {
    e.preventDefault();
    fetchArticles(query);
  };

  useEffect(() => {
    fetchArticles('Leanne Graham');
  }, []);
  console.log(articles, user);

  return (
    <div className="">
      <form role="form" action="" onSubmit={handleSearch}>
        <div className="flex items-center border rounded-md px-5">
          <input
            type="text"
            name="query"
            value={query}
            className="focus:outline-none py-2 flex-1 font-nunito"
            placeholder="Search articles by author name or title"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className=" py-[13px]">
            <IoSearchOutline className="" />
          </button>
        </div>
      </form>

      <div
        data-testid="results"
        className="mt-[50px] h-[600px] overflow-y-scroll w-full no-scrollbar"
      >
        {articles?.length > 0 && (
          <h2 className="font-nunito">
            Search results: {articles?.length} found
          </h2>
        )}
        <h2 className="font-nunito"></h2>
        {articles?.map((article, index) => (
          <Result key={index} article={article} loading={loading} user={user} />
        ))}
      </div>
    </div>
  );
}
