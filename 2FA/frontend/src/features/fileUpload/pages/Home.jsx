import { useRef, useState } from "react"
import { DeleteOutlined , UploadOutlined  } from '@ant-design/icons';
const Home = () => {
  const fileRef = useRef()
  const [file , setFile] = useState()
  return (
    <div className="h-screen flex items-center justify-center flex-col gap-4">
      <h2 className="text-center text-4xl" >Handling Files  </h2>

      <input type="file" name="fileInput" ref={fileRef} className="hidden"/>

      <button className="h-60 sm:w-[30%] border-2 border-dotted rounded-md mt-3 w-full hover:bg-zinc-900 cursor-pointer">
        <div className="flex items-center justify-center flex-col gap-4">
          <UploadOutlined className=" text-5xl" />
          <h4 className="text-2xl">Upload files</h4>
        </div>
      </button>
          
      <div className="flex justify-between sm:w-[30%] w-full px-2">
        <h3 className="text-2xl">Your File : <span className="font-semibold">  File Name </span></h3>
        <span className="cursor-pointer text-gray-400 hover:text-red-400"><DeleteOutlined className="text-2xl" /></span>
      </div>

    </div>
  )
}

export default Home