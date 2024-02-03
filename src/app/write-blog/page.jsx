"use client";
// import Tejs from "@/Components/EditorTools/Tejs";
import { uploadCloudImg } from "@/utils/uploadCloudImg";
import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useState } from "react";
import toast, { ToastBar, Toaster } from "react-hot-toast";
import dynamic from 'next/dynamic'

const Tejs = dynamic(
  () => import('@/Components/EditorTools/Tejs'),
  { ssr: false }
)
const blogStructure = {
  title: "",
  banner: "",
  content: [],
  tags: [],
  des: "",
  cat: "",
};

export const EditorContext = createContext();

const page = () => {
  const router = useRouter();
  const [blog, setBlog] = useState(blogStructure);
  const [editorState, setEditorState] = useState("editor");
  const [textEditor, setTextEditor] = useState({ isReady: false });
  const [banner, setBanner] = useState("");
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [cat, setCat] = useState("");
  const [content, setContent] = useState("");

  const handleEditorChange = (newContent) => {
    setContent(newContent);
    console.log(newContent);
  };
  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handlevalieEvent = async () => {
    const data = await editorState.save();
    console.log(data);
    return data;
  };
  const handlePublishEvent = async () => {
    const contents = await handlevalieEvent();
    // console.log(handlevalieEvent());
    // setContent(contents);
    // console.log(content);
    // console.log(contents);

          if(!banner.length){
            return toast.error("Upload a blog banner to publish it")
          }
          if(!title.length){
            return toast.error("Write blog title to publish it")
          }
          if(!des.length){
            return toast.error("Write blog description to publish it")
          }

    if (!contents.blocks.length) {
      return toast.error("Write blog content to publish it");
    }
    // console.log("Article data:", contents);
    // console.log(banner, title, des, contents, "Tech", slugify(title));
    let loadingblog;
    try {
       loadingblog = toast.loading("Publishing....");
      const { data } = await axios.post(`/api/blog`, {
        banner,
        title,
        des,
        content: contents,  
        cat: cat || "Tech",
        slug: slugify(title),
      });

      // console.log(data);
      if (data.success) {
        toast.dismiss(loadingblog);
        toast.success("Published 👍🏻");
        router.push(`/blog/${slugify(title)}`);
      } else {
        toast.dismiss(loadingblog);
        toast.error(data.message);
        console.log(data);
      }
    } catch (error) {
      toast.dismiss(loadingblog);
      toast.error(error.response.data.message); 
    } 
    
  };
  const handleImg = async (e) => {
    // console.log(e.target.files[0]);
    let imgs = e.target.files[0];
    if (imgs) {
      let loadingImg = toast.loading("uploading....");
      const img = await uploadCloudImg(e.target.files[0]);
      if (img) {
        toast.dismiss(loadingImg);
        toast.success("Uploaded👍🏻");

        setBanner(img);
      }

      // console.log(img);
    }
  };
  const handleKeyDown = (e) => {
    // console.log(e);
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  };

  return (
    <EditorContext.Provider
      value={{
        blog,
        setContent,
        content,
        setBlog,
        editorState,
        setEditorState,     
        setTextEditor,
        textEditor,
      }}
    >
      <Toaster />
      <div className="flex flex-col items-center justify-center w-full h-auto min-h-screen gap-3 p-4">
        <label htmlFor="Img" className="w-full">
          <img
            src={banner}
            alt=""
            className=" aspect-video bg-white md:w-[700px] border-4 border-neutral-200 rounded-lg transition-all w-[99%]"
          />
          <input 
            type="file"
            id="Img"
            hidden
            accept=".png, .jpg, .jpeg"
            onChange={handleImg}
          />
        </label>

        <textarea
          defaultValue={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={handleKeyDown}
          name=""
          id=""
          className="resize-none text-4xl font-medium w-full md:w-[80%] leading-tight placeholder:opacity-40 h-20 outline-none "
          placeholder="Blog Title"
        ></textarea>
        <textarea 
          defaultValue={des}
          onChange={(e) => setDes(e.target.value)}
          name=""
          id=""
          className="resize-none text-2xl font-normal w-full md:w-[80%] leading-tight placeholder:opacity-40 h-40 outline-none "
          placeholder="Blog Description"
        ></textarea>

        <Tejs />
        <button
          onClick={handlePublishEvent}
          className="px-6 py-3 bg-green-500 rounded-lg "
        >
          Publish Blog
        </button>
      </div>
    </EditorContext.Provider>
  );
};

export default page;
