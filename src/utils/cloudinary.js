import cloudinary from "cloudinary"

console.log(process.env.CLOUDINARY_CLIENT_NAME);

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,

  secure:true,
})
export default cloudinary