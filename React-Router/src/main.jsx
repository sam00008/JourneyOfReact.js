import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router";
import Layout from "./layout.jsx";
import Home from "./component/Home/Home.jsx";
import './index.css'
import Contact from "./component/Contact/Contact.jsx";
import About from "./component/About/About.jsx";
import Git from "./component/GitHub/GIt.jsx";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route
        loader={() => {
          return fetch(`https://api.github.com/users/sam00008`)
            .then((res) => res.json());
        }}
        path="git/:id"
        element={<Git />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
