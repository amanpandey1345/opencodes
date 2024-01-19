"use client";
import BlogContent from "@/Components/EditorTools/BlogContent";
import axios from "axios";
import Link from "next/link";

import React, { useEffect, useState } from "react";

const page = ({ params }) => {

  const { slug } = params;

  console.log(slug);
  const [blog, setblog] = useState({});
  useEffect(() => {
    handleData();
  }, []);

  const handleData = async () => {
    let { data } = await axios.get(`http://localhost:3000/api/blog/${slug}`);
    console.log(data);
    setblog(data.blog);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full min-h-screen gap-4 p-4">
        <div className="w-[700px] flex justify-between ">
          {/* <button
            onClick={() => router.back()}
            className="px-6 py-2 text-white bg-blue-500 rounded-lg cursor-pointer"
          >
            Back
          </button> */}
                <Link href={`/blog`}>
            <button className="px-6 py-2 text-white bg-blue-500 rounded-lg cursor-pointer">
              Blog
            </button>
          </Link>
          <Link href={`/update-blog/${slug}`}>
            <button className="px-6 py-2 text-white bg-blue-500 rounded-lg cursor-pointer">
              Edit
            </button>
          </Link>
    
        </div>
        <img
          src={blog?.banner}
          alt=""
          className=" aspect-video bg-white w-[700px] border-4 border-neutral-200 rounded-lg transition-all"
        />

        <h1 className="w-[700px] text-5xl font-semibold">{blog?.title}</h1>
        <div className="w-[700px]"> 
          {
            blog.content &&
              blog.content[0].blocks.map((block, i) => {
                return (
                  <div className="" key={i}>
                    <BlogContent block={block} />
                  </div>
                );
              })
            // console.log(blog?.content[0])
          }
        </div>
      </div>
    </>
  );
};

export default page;
