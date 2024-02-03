import Image from "next/image";



const Img = ({url,caption}) => {
  return (
    <div className="md:w-[700px] flex justify-center items-center p-6 w-[99%]">
        <Image src={url} alt="blog-img" width={1000} height={1000} className="md:w-[70%]"/>
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
    return <p className={"my-[10px] md:text-lg "} dangerouslySetInnerHTML={{ __html: data.text }}></p>;
  }
  if (type === "header") {
    if (data.level === 1) {
      return (
        <h1
          className="text-2xl font-bold md:text-4xl"
          dangerouslySetInnerHTML={{ __html: data.text }}
        ></h1>
      );
    }

    if (data.level === 2) {
      return (
        <h2 
          className="text-xl font-bold md:text-3xl"
          dangerouslySetInnerHTML={{ __html: data.text }}
        ></h2>
      );
    }

    if (data.level === 3) {
      return (
        <h3
          className="text-lg font-bold md:text-2xl"
          dangerouslySetInnerHTML={{ __html: data.text }}
        ></h3>
      );
    }
    if (data.level === 4) {
      return (
        <h4
          className="text-base font-bold md:text-xl"
          dangerouslySetInnerHTML={{ __html: data.text }}
        ></h4>
      );
    }
    if (data.level === 5) {
      return (
        <h5
          className="text-sm font-bold md:text-base"
          dangerouslySetInnerHTML={{ __html: data.text }}
        ></h5>
      );
    }
    if (data.level === 6) {
      return ( 
        <h6
          className="text-xs font-bold md:text-lg"
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
