import {useState} from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import SearchConsole from "./pages/SearchConsole";
import "./assets/styles/global.scss"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/search",
    element: <SearchResults/>,
  },
  {
    path: "/search-console",
    element: <SearchConsole/>,
  },
]);

const App = () => {
  return (
      <RouterProvider router={router} />
  )
}

export default App
