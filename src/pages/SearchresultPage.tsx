
import { IoSearchOutline } from "react-icons/io5";



import Result from "../components/Search/Result";
import { useState } from "react";

import useFetchArticles from "../hooks/useFetchArticles";

export default function SearchresultPage() {
    const [query, setQuery] = useState("");
    const { loading, articles, fetchArticles } = useFetchArticles();
  const handleSearch = async(e: any) => {
      e.preventDefault()
      fetchArticles(query);
  }
    
  return (
    <div className=''>
          <form action=""onSubmit={handleSearch}>
              <div className='flex items-center border rounded-md px-5'>
              <input
                  type="text"
                  name="query"
                  value={query}
                  className="focus:outline-none py-2 flex-1 font-nunito"
                  placeholder="Search articles by author name or title"
                  onChange={(e)=>setQuery(e.target.value)}
              />
            <button className=" py-[13px]"><IoSearchOutline  className=""/></button>
          </div>
          </form>
      <h2 className='font-nunito'>Search results</h2>
          
          <div className="mt-[50px] h-[600px] overflow-y-scroll w-full no-scrollbar">
              {
                  articles?.map((article, index)=> <Result key={index} article={article} loading={loading} />)
              }
          </div>
    </div>
  )
}
