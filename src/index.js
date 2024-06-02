import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
 
import {
 createBrowserRouter,
 RouterProvider,
} from "react-router-dom";
import IndexPage from './pages/IndexPage';
import RecipeListPage from './pages/RecipeListPage';
import RecipePage from './pages/RecipePage';
import CommunityPage from './pages/CommunityPage';
const router = createBrowserRouter([
 {
  path: "/",
  element: <IndexPage />,
 },
 
 {
  path: "/recipe",
  element: <RecipeListPage />,
 },

 {
  path: "/recipe/:recipe_id",
  element: <RecipePage />,
 },
 {
  path: "/community",
  element: <CommunityPage />,
 },
]);
 
ReactDOM.createRoot(document.getElementById("root")).render(
 <RouterProvider router={router} />
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
