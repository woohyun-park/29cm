import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Nav from "./components/Nav";
import "./App.css";
import Shop from "./components/Shop";
import WeLove from "./components/WeLove";
import MyPage from "./components/MyPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
        <Nav />
      </>
    ),
  },
  {
    path: "/home",
    element: (
      <>
        <Header />
        <Home />
        <Nav />
      </>
    ),
  },
  {
    path: "/shop",
    element: (
      <>
        <Header />
        <Shop />
        <Nav />
      </>
    ),
  },
  {
    path: "/welove",
    element: (
      <>
        <Header />
        <WeLove />
        <Nav />
      </>
    ),
  },
  {
    path: "/mypage",
    element: (
      <>
        <Header />
        <MyPage />
        <Nav />
      </>
    ),
  },
]);

function App({ url }) {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
