import {ndown} from "nayan-media-downloader";
import { NextResponse } from "next/server";

export const POST = async (req)=>{
    const {u} = await req.json();
    console.log(u);

    const ress = await ndown(u)
    console.log(ress);
    return new NextResponse(
        JSON.stringify({
          success: true,
          data : ress.data,
          message: "Done......",
        }),
        {
          status: 201,
          headers: { "Content-Type": "application/json" },
        }
      );
}