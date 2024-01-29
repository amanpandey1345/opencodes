import Blog from "@/models/Blog";
import { getAuthSession } from "@/utils/auth";
import dataBase from "@/utils/dataBase";
import { NextResponse } from "next/server";

export const GET = async (req,{params}) => {


  const { id } = params;
    await dataBase();

  const blog = await Blog.findOne({
    slug:id

  });

  
    
  if(!blog){
    return new NextResponse(
        JSON.stringify({
          success: false,
          message: " Sorry, Invaild slug",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
  }
  
  
    try {
    
      return new NextResponse(
        JSON.stringify({
          success: true,
          blog,
          message: " blog get successfully",
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


  export const PUT = async (req,{params}) => {
  
  //   const session = await getAuthSession();

  // if (!session) {
  //   return new NextResponse(
  //     JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
  //   );
  // }
    const {id} = params

    const { content, slug, des, banner, title } = await req.json();
    await dataBase();
    // console.log(content[0]);
  const b2 = await Blog.findOne({slug:slug});
  if(b2.id !== id){
    return new NextResponse(
        JSON.stringify({
          success: false,
          message: "Sorry!!, Same slug is already exists in other blog ",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
  }
  
    try {

      const blog = await Blog.findByIdAndUpdate(id, { 
        content, slug, des, banner, title
       }, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      });
  
      return new NextResponse(
        JSON.stringify({
          success: true,
          blog,
          message: " Password Change Successfully successfully",
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
