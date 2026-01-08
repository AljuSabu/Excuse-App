import { useState } from "react"
import axios from "axios"

function App() {

  const[excuse,setExcuse]=useState("an excuse")

  const fetchData = async(reason)=>{
    try{
      const{data} = await axios.get(`https://excuser-three.vercel.app/v1/excuse/${reason}`)
      setExcuse(data[0].excuse);
      
    }
    catch(error){
      console.log(error);
    }
  }

  return (
    <>
    <div className="min-h-screen w-full bg-[url(https://plus.unsplash.com/premium_photo-1663852248346-1c1d660b3ac1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center">
      <div className="lg:flex h-screen justify-between lg:mr-5 xl:mr-10">
        <div className="flex justify-center items-center text-shadow-lg/70 font-permanent text-white py-23 md:py-40 lg:py-0    text-2xl md:text-5xl lg:text-3xl xl:text-4xl 2xl:text-6xl    lg:ml-20 xl:ml-30 2xl:ml-40">Lets make some excuses</div>
        <div className="flex flex-col justify-between lg:w-140 xl:w-170 2xl:w-250">
          <span className="font-semibold font-gloria text-center min-h-40 p-5 lg:p-10 lg:mt-30 xl:mt-40 2xl:mt-50    text-lg md:text-3xl lg:text-xl xl:text-2xl 2xl:text-4xl">{excuse}</span>
          <div className="text-black font-bold font-gloria flex justify-center items-center mt-10 lg:mt-0    text-base md:text-2xl lg:text-lg xl:text-xl 2xl:text-xl    gap-5 md:gap-10 xl:gap-15 2xl:gap-20    lg:mb-55 xl:mb-80 2xl:mb-90">
            <button onClick={()=>{fetchData("funny")}} className="shadow-md active:shadow-inner hover:text-white hover:bg-green-600 active:scale-95 transition-all duration-150 shadow-black/50 rounded-md md:rounded-lg xl:rounded-xl bg-green-500 h-10 md:h-14 lg:h-10 xl:h-12 2xl:h-14    w-20 md:w-32 lg:w-24 xl:w-28 2xl:w-32">Funny</button>
            <button onClick={()=>{fetchData("office")}} className="shadow-md active:shadow-inner hover:text-white hover:bg-red-600 active:scale-95 transition-all duration-150  shadow-black/50 rounded-md md:rounded-lg xl:rounded-xl bg-red-500 h-10 md:h-14 lg:h-10 xl:h-12 2xl:h-14    w-20 md:w-32 lg:w-24 xl:w-28 2xl:w-32">Company</button>
            <button onClick={()=>{fetchData("developers")}} className="shadow-md active:shadow-inner hover:text-white hover:bg-blue-600 active:scale-95 transition-all  duration-150 shadow-black/50 rounded-md md:rounded-lg xl:rounded-xl bg-blue-500 h-10 md:h-14 lg:h-10 xl:h-12 2xl:h-14    w-20 md:w-32 lg:w-24 xl:w-28 2xl:w-32">Developer</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App

