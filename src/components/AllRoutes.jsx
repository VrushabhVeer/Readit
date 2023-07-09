import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import CreateBlogs from "../pages/CreateBlogs";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Myblogs from "../pages/Myblogs";
import PrivateRoutes from "./PrivateRoutes";
import Contact from "../pages/Contact";
import AllBlogs from "../pages/AllBlogs";
import SingleBlog from "../pages/SingleBlog";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/myblogs"
        element={
          <PrivateRoutes>
            <Myblogs />
          </PrivateRoutes>
        }
      />

      <Route
        path="/create"
        element={
          <PrivateRoutes>
            <CreateBlogs />
          </PrivateRoutes>
        }
      />
      <Route path="/blogs" element={<AllBlogs />} />
      <Route path="/blogs/:blogId" element={<SingleBlog />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AllRoutes;
