import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import CreateBlogs from "../pages/CreateBlogs";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Blogs from "../pages/Blogs";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/create" element={<CreateBlogs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    );
};

export default AllRoutes;
