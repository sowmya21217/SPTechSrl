import React from "react";
import  { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import {  createBrowserRouter, RouterProvider } from "react-router-dom";
import About  from "./Pages/About/About";
import Services from "./Pages/Services/Service";
import Career from "./Pages/Career/Career";
import Contacts from "./Pages/Contacts/Contacts";
import { InfoDataFive, InfoDataSeven, InfoDataSix } from "./data/InfoData";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App /> ,
  },
  {
    path: "About",
    element: <About {...InfoDataFive} />,
  },
  {
    path: "Services",
    element: <Services {...InfoDataSix}/>,
  },
  {
    path: "Career",
    element: <Career {...InfoDataSeven}/>,
  },
  {
    path: "Contacts",
    element: <Contacts />,
  },

]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);



