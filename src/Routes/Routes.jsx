import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import ListedBooks from "../Pages/ListedBooks/ListedBooks";
import PagesToReads from "../Pages/PagesToReads/PagesToReads";
import BookDetails from "../Pages/BookDetails/BookDetails";
import SignUp from "../Components/SignUp/SignUp";
import SignIn from "../Components/SignIn/SignIn";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        // loader: () => fetch("booksData.json"),
        Component: Home,
      },
      {
        path: "/listedBooks",
        // loader: () => fetch("booksData.json"),
        Component: ListedBooks,
      },

      { path: "/pagesToReads", Component: PagesToReads },
      { path: "/login", Component: SignIn },
      { path: "/signup", Component: SignUp },
  
      {
        path: "bookDetails/:id",
        // loader: () => fetch("booksData.json"),
        Component: BookDetails,
      },
    ],
  },
]);
