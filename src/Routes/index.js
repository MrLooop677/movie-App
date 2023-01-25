import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Home from "../Pages/home/Home";
import MovieInfo from "../Pages/movie-info/MovieInfo";
import ErrorPage from "../Pages/errorPage/ErrorPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "movieinfo",
        element: <MovieInfo />,
      },
    ],
  },
]);
