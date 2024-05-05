import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

type articleProps = {
  article: {
    publishedAt: string;
    author: string;
    title: string;
    body: string;
  };
  loading: boolean;
  user: any;
};
export default function Result({ article, user, loading }: articleProps) {
  console.log(article, loading, user, '><><><><><><><><>');
  const removeExtraChars = (content: string) => {
    if (content == '[Removed]') return null;
    else return content.replace(/\[\+\d+ chars\]/g, '');
  };

  return (
    <>
      {loading ? (
        <div>
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="my-5">
              <Skeleton count={1} className="w-[150px]" />
              <Skeleton count={1} className="w-[300px]" />
              <Skeleton count={1} className="w-[500px] h-[100px]" />
            </div>
          ))}
        </div>
      ) : (
        <div className={`my-5 border rounded-md px-5 py-2 font-nunito`}>
          <h2 className=" font-semibold text-lg my-2">{user?.name}</h2>
          <h3 className="font-medium my-1">{article?.title}</h3>
          <p className="font-light text-sm">
            {removeExtraChars(article?.body)}
          </p>
        </div>
      )}
    </>
  );
}
