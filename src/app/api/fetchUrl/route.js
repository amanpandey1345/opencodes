import axios from "axios";

import { NextResponse } from "next/server";

export const GET = async (request) => {

  

    const { searchParams } = new URL(request.url);

    const urls = searchParams.get("url");
  
    // console.log(request);   
  console.log(urls);
      try {   
        
    
        const {data} = await axios.get(urls);
        // console.log(data);
        return new NextResponse(
          JSON.stringify({
            success: 1,
            link:"urls"
            
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
   
  