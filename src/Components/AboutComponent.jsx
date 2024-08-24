import React, { useEffect } from "react";
import "./HomeCompo.css";
import Aos from "aos";
import "aos/dist/aos.css";

const AboutComponent = () => {

 
    useEffect(()=>{
      Aos.init();
      Aos.refresh();
    },[])
  


  return (
    <>
      <div className=" flex flex-col justify-center bg-black text-white ">
        <div className="w-[1300px] flex flex-col">


<div className="flex  justify-between items-center">
           <div className="w-[50%] h-[100vh]">
             {/* about me start */}
             <div className="flex items-center gap-[50px] pl-[75px] pt-10  ">
            <h1 className=" text-[40px] font-roboto font-bold text-white ">About Me</h1>
            <div className=" w-[200px] h-[3px] bg-white "></div>
          </div>
          {/* about me start */}


          {/* about me photo start */}
          <div className="flex w-full items-end h-[628px]">
            <div className=" w-[600px] overflow-hidden rounded-[10px] mt-[30px] ml-[75px] ">
              <img src="photos/Abdulkader.png" alt="me" />
            </div>
          </div>
          {/* about me photo start */}
           </div>


          <div className=" w-[50%] flex flex-col justify-center h-[100vh]">
          <div className="w-[750px] text-start mt-[30px] ml-[75px] ">
                <h2 className=" text-[50px] text-white mb-[11px] font-poppins font-medium ">
                  who am i ?
                </h2>
                <p className=" text-[16px] font-poppins text-start font-normal ">
                  I'm Creative Director and UI/UX Designer from Sydney,
                  Australia, working in web development and print media. I enjoy
                  turning complex problems into simple, beautiful and intuitive{" "}
                </p>
                <p className=" text-[16px] font-poppins text-start font-normal ">
                  designs.
                </p>
                <p className=" text-[16px] font-poppins text-start font-normal pt-[11px] ">
                  My aim is to bring across your message and identity in the
                  most creative way. I created web design for many famous brand
                  companies.
                </p>
              </div>
          </div>
</div>



        </div>
      </div>
    </>
  );
};

export default AboutComponent;
