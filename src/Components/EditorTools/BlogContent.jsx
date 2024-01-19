import Image from "next/image";



const Img = ({url,caption}) => {
  return (
    <div className="w-[700px] flex justify-center items-center p-6">
        <Image src={url} alt="blog-img" width={1000} height={1000} className="w-[70%]"/>
        {
            caption.lenght ? <p className="w-full my-3 text-base text-center text-gray-300 md:mb-12">
                {caption}
            </p>:""
        }
    </div>
  ) 
}
const Quote = ({quote,caption}) => {
  return (
    <div className="p-3 pl-5 border-l-4 border-purple-500 bg-purple-500/10">
        <p className="text-xl leading-10 md:text-2xl">{quote}</p>
        {
            caption.lenght ? <p className="w-full text-base text-purple-500 ">
                {caption}
            </p>:""
        }
    </div>
  ) 
}
const List = ({style,items}) => {
  return (
    <ol className={`pl-5 ${style === "ordered"? "list-decimal":"list-disc"}`} >
       {
        items.map((listItem,i)=>{
            return <li key={i} className="my-4"
            dangerouslySetInnerHTML={{__html:listItem}}
            ></li>
        })
       }
    </ol>
  ) 
}



const BlogContent = ({ block }) => {
  let { type, data } = block;
  if (type === "paragraph") {
    return <p dangerouslySetInnerHTML={{ __html: data.text }}></p>;
  }
  if (type === "header") {
    if (data.level === 1) {
      return (
        <h1
          className="text-4xl font-bold"
          dangerouslySetInnerHTML={{ __html: data.text }}
        ></h1>
      );
    }

    if (data.level === 2) {
      return (
        <h2
          className="text-3xl font-bold"
          dangerouslySetInnerHTML={{ __html: data.text }}
        ></h2>
      );
    }

    if (data.level === 3) {
      return (
        <h3
          className="text-2xl font-bold"
          dangerouslySetInnerHTML={{ __html: data.text }}
        ></h3>
      );
    }
    if (data.level === 4) {
      return (
        <h4
          className="text-xl font-bold"
          dangerouslySetInnerHTML={{ __html: data.text }}
        ></h4>
      );
    }
    if (data.level === 5) {
      return (
        <h5
          className="text-base font-bold"
          dangerouslySetInnerHTML={{ __html: data.text }}
        ></h5>
      );
    }
    if (data.level === 6) {
      return ( 
        <h6
          className="text-lg font-bold"
          dangerouslySetInnerHTML={{ __html: data.text }}
        ></h6>
      );
    }
  } 
  if(type === "image"){
    return <Img  url={data.file.url} caption={data.caption}/>
  }

  if(type === "quote"){
    return <Quote  quote={data.text} caption={data.caption}/>
  }

  if(type === "list"){
    return <List  style={data.style} items={data.items}/>
  }
  

};

export default BlogContent;
