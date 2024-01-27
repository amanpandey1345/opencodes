"use client"
import React, { useContext, useEffect, useRef, useState } from 'react'
// import EditorJS from '@editorjs/editorjs'
import { tools } from './EditorTools'
import { EditorContext } from '@/app/write-blog/page'
import dynamic from 'next/dynamic'
 

const EditorJS = dynamic(() => import('@editorjs/editorjs'), {
  loading: () => <p>Loading...</p>,
  ssr:false
})

const Tejs = () => {
   
    const [isMounted, setIsMounted] = useState(false)
    const ref = useRef()
    
    let {setTextEditor,textEditor,setContent,setEditorState, editorState} = useContext(EditorContext);
  const initializeEditor = async()=>{

  if(!ref.current){ 
    let editor = new EditorJS({
      holder:"editorjs",
      data:"",
       tools:tools,
      placeholder:"Let's write an awesome story"
    })
    ref.current = editor;
    setEditorState(ref.current)
  }
}
 
  

  
  useEffect(() => { 
    
    // if(typeof window != "undefined"){
    //   setIsMounted(true)
    // }
      setIsMounted(true)
  }, [])
  useEffect(() => {
    const init = async ()=>{
      await initializeEditor();
    }
    if(isMounted){
      init();
      return()=>{
        if(ref.current){
          ref.current.destroy();
        }
      }
    }

  }, [isMounted])
  
  const save=()=>{
    if(ref.current){
      ref.current.save().then((outputData)=>{
        console.log("Article data:",outputData);
        // alert(JSON.stringify(outputData));
        setContent(outputData)

      })
    }
  }   
  return (
    <div className='w-[100%] h-auto justify-center flex flex-col items-center' >
     <div  id="editorjs" className="EditorsOne" style={{width:"100%"}} >
     </div>
        {/* <button className="px-3 py-1 bg-blue-600" onClick={save}>Save Data</button> */}
    </div>
  )  
}
 
export default Tejs