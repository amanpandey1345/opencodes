import Pagination from '@/Components/pagination/Pagination';
import moment from 'moment';
import Link from 'next/link';
import React from 'react'

const getData = async () => {
  "use server"
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/blog`,
    {
      cache: "no-store",
    }
  );

  // if (!res.ok) {
  //   // throw new Error("Failed");
  // }
  
  const {blog}= await res.json()

  return blog;
};  
const page = async({ searchParams }) => {
  const blog = await getData();
  // const blog = await handleGetApi()
  // const res = await fetch(`${process.env.NEXTAUTH_URL}/api/blog`);
  // const {blog} = await res.json();
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;
    
  return ( 
    <> 
    <div className="flex flex-wrap items-center justify-center w-full min-h-screen gap-6 p-4 bg-pink-300">

      {/* card */}

      {
        blog.map((item,i)=>
        <Link href={`/blog/${item.slug}`}>
      <div key={i} className="md:w-[700px] md:h-[500px] flex flex-col items-center bg-white/80 rounded-lg gap-2 hover:translate-y-[-10px] transition-all w-[99%] h-auto "> 
        <img src={item.banner} alt="" className='flex w-[700px] h-[350px] rounded-2xl' />
        <h1 className='text-3xl font-semibold text-center'>{item.title}</h1>
        <h1 className='flex items-center justify-between w-full p-2'> 
          <span className='flex gap-2'>

          <span className='px-4 py-1 '>Written by Hanif</span>
          <span className='px-4 py-1 rounded-xl bg-neutral-200'>Tech</span>
          </span>
          <span className='px-4 py-1 text-sm rounded-xl bg-neutral-200'>{moment(item.createdAt).fromNow()}</span>
        </h1>
      </div>
      </Link>
        )
      }
      
      
     
    </div>
    {/* <Pagination />  */}
    </>
  )
}

export default page 