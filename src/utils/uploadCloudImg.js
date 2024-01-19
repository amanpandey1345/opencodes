import axios from "axios";

export const uploadCloudImg = async (img) => {
  let imgUrl = null;


  const formData = new FormData();
  formData.append("image", img);
  const { data } = await axios.post(
    "http://localhost:3000/api/uploadImage",
    formData
  );


  imgUrl= data.Url;

  return imgUrl;
};
