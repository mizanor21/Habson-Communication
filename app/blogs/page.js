// import Items from "@/components/Items/Items";
import React from "react";
import BlogItems from "../blog-items/page";

const Blogs = () => {
  return (
    <div className="font-[Inter] mb-10 lg:mb-20">
      <h1 className="text-2xl lg:text-5xl font-bold text-[#135c58] text-center my-10 lg:my-20">
        Blogs
      </h1>
      <BlogItems />
    </div>
  );
};

export default Blogs;
