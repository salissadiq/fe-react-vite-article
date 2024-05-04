import { createBrowserRouter } from "react-router-dom";
import SearchresultPage from "../pages/SearchresultPage";
import CreateArticle from "../pages/CreateArticle";
import Main from "../layout/Main";


const router = createBrowserRouter([
   {
    path: "/",
    element: <Main/>,
    children: [
       {
    path: "/search",
    element: <SearchresultPage />,
      },
      {
    path: "/create-article",
    element: <CreateArticle />,
  },
    ]
  }
])

export default router