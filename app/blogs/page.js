// import Items from "@/components/Items/Items";
import React from "react";
import BlogItems from "../blog-items/page";

const Blogs = () => {
  return (
    <div>
      <h1 className="text-2xl lg:text-5xl font-bold text-center my-10 lg:my-20">
        Blogs
      </h1>
      <BlogItems />
    </div>
  );
};

export default Blogs;
