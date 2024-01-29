import { getAuthSession } from "@/utils/auth";

import { NextResponse } from "next/server";
import { uploadImage } from "@/utils/upload-image";


// export const GET = async (req) => {
//   const { searchParams } = new URL(req.url);

//   const page = searchParams.get("page");
//   const cat = searchParams.get("cat");

//   const POST_PER_PAGE = 4;

//   const query = {
//     take: POST_PER_PAGE,
//     skip: POST_PER_PAGE * (page - 1),
//     where: {
//       ...(cat && { catSlug: cat }),
//     },
//   };






  
  
//   try {
//     const [posts, count] = await prisma.$transaction([
//       prisma.post.findMany(query),
//       prisma.post.count({ where: query.where }),
//     ]);
//     return new NextResponse(JSON.stringify({ posts, count }, { status: 200 }));
//   } catch (err) {
//     console.log(err);
//     return new NextResponse(
//       JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
//     );
//   }
// };


// cloudinary.v2.config({
//   cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
//   api_key: process.env.CLOUDINARY_CLIENT_API,
//   api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
// });





    


// CREATE A POST
export const POST = async (req) => {
  // const session = await getAuthSession();
 
  // if (!session) {
  //   return new NextResponse(
  //     JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
  //   );
  // } 

  const formData = await req.formData();
  try { 

    
    
    const image = formData.get("image");

    const data = await uploadImage(image,"nextjs-Image")
    

  
    return new NextResponse(JSON.stringify({Url:data.secure_url}, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
