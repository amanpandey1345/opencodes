"use client";
// import EditBlogEditor from "@/Components/EditorTools/EditBlogEditor";

import { uploadCloudImg } from "@/utils/uploadCloudImg";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";
import toast, { ToastBar, Toaster } from "react-hot-toast";
import dynamic from 'next/dynamic'

const EditBlogEditor = dynamic(
  () => import('@/Components/EditorTools/EditBlogEditor'),
  { ssr: false }
)

export const EditorContexts = createContext();
      
const page = ({params}) => {
  const { id } = params;
 
  const router = useRouter();
  const [blog, setBlog] = useState();
  const [editorState, setEditorState] = useState("editor");
  const [textEditor, setTextEditor] = useState({ isReady: false });
  const [banner, setBanner] = useState("")
  const [title, setTitle] = useState(""); 
  const [des, setDes] = useState("");
  const [cat, setCat] = useState(""); 
  const [content, setContent] = useState("");
  const [ids, setIds] = useState("");
 
  const handleEditorChange = (newContent) => {
    setContent(newContent);
    console.log(newContent);
  };

useEffect(() => {
  handleGet()
}, [])
 

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handlevalieEvent = async () => {
    const data = await editorState.save();
    // console.log(data);
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
      const { data } = await axios.put(`/api/blog/${ids}`, {
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

 


  const handleGet=async()=>{
    const res = await fetch(`/api/blog/${id}`)
    const d = await res.json();
    setBanner(d.blog.banner)
    setContent(d.blog.content)
    setTitle(d.blog.title)
    setDes(d.blog.des)
    setIds(d.blog._id)
  }  
  const handleImg = async (e) => {
    console.log(e.target.files[0]);
    let imgs = e.target.files[0];
    if (imgs) {
      let loadingImg = toast.loading("uploading....");
      const img = await uploadCloudImg(e.target.files[0]);
      if (img) {
        toast.dismiss(loadingImg);
        toast.success("Uploaded👍🏻");

        setBanner(img);
      }

      console.log(img);
    }
  };
  const handleKeyDown = (e) => {
    // console.log(e);
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  };

  return (
    <EditorContexts.Provider
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
      <div className="md:w-[700px] flex justify-between w-[99%]">
        <button onClick={()=>router.back()} className='px-6 py-2 text-white bg-blue-500 rounded-lg cursor-pointer'>Back</button>
       <Link href={`/blog`}><button className='px-6 py-2 text-white bg-blue-500 rounded-lg cursor-pointer'>Blog</button></Link>
      </div>
        <label htmlFor="Img">
          <img
            src={banner}
            alt=""
            
            className=" aspect-video bg-white w-[700px] border-4 border-neutral-200 rounded-lg transition-all"
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
 
        <EditBlogEditor content={content} />
        <button
          onClick={handlePublishEvent}
          className="px-6 py-3 bg-green-500 rounded-lg "
        >
          Publish Blog
        </button> 
      </div>
    </EditorContexts.Provider>
  );
};

export default page;
