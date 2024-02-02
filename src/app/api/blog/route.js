import Blog from "@/models/Blog";
import User from "@/models/User";
import { getAuthSession } from "@/utils/auth";
import dataBase from "@/utils/dataBase";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
    );
  }
 
  const { content, slug, des, banner, title } = await request.json();
  console.log(content, slug, des, banner, title);
  await dataBase();
  const Checkblog = await Blog.findOne({ title });

  console.log(Checkblog); 

  if (Checkblog) {  
    return new NextResponse(   
      JSON.stringify({
        success: false,
        message: "Sorry!!, Same Blog Title is already exists.",
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
  const blog = new Blog({
    content,
    slug,
    des,
    banner,
    title,
    userId:session?.user.id
  });


  

  try {
    await blog.save();
    return new NextResponse(
      JSON.stringify({
        success: true,
        message: "Blog has been created!!",
      }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    return new NextResponse(
      JSON.stringify({
        success: false,
        message: err.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};


export const GET = async (request) => {
  const { searchParams } = new URL(request.url);
    await dataBase();

    const page = +searchParams.get("page")  || 1;
    const limit = +searchParams.get("limit") || 4;
    const skip = (page - 1) * limit;

    console.log(console.log(skip,page,limit));

    const blog = await Blog.find().skip(skip).limit(limit);
    try {
      return new NextResponse(
        JSON.stringify({
          success: true,
          blog,
          message: "Blogs get successfully",
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    } catch (err) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: err.message,
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  };

