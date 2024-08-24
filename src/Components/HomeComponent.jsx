import React, { useEffect, useRef } from "react";
import { FaDownload } from "react-icons/fa";
import "./HomeCompo.css";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaSquareFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";




const HomeComponent = () => {
 
  const Animation =()=>{
    useEffect(()=>{
      Aos.init();
      Aos.refresh();
    },[])
  }

  return (
    <>
     

      {/* main container start */}
      <div className="container snap-y snap-mandatory overflow-y-auto h-[100vh] ">

        
      {/* Section one start */}
      <section className="one h-[100vh] snap-start">


        <div className=" flex bg-black items-center">



          {/* section one right side */}
          <div className="bg-black h-screen ml-[85px] flex w-full flex-col justify-end items-start">
            <h1 className="text-[60px] font-bold text-center  font-DM text-white">
              Abdul Kader <br />
              Front-end <br /> React Developer
            </h1>
            <div className=" w-[300px] flex flex-col justify-center ml-[70px] mt-10 ">
              <a
                href="public/photos/resume.pdf"
                download="resume"
                className="px-[24px] flex gap-[10px] justify-center items-center font-semibold hover:bg-gradient-to-r from-[#FA5252] to-[#f0721e]  hover:text-white transition-all bg-[#fff] font-poppins active:scale-125 transition-all py-[10px] rounded-[50px] text-[16px] text-center"
              >
                {" "}
                <FaDownload /> Download CV{" "}
              </a>
              <ul className="flex justify-between mt-20 mb-16" >
                <li><Link to="https://www.facebook.com/profile.php?id=61557884580948&mibextid=LQQJ4d" >< FaSquareFacebook className="text-white text-[40px] hover:scale-110 transition-all " /></Link></li>
                <li><Link to="https://x.com/Kader_9595" >< FaXTwitter className="text-white text-[40px] hover:scale-110 transition-all " /></Link></li>
                <li><Link to="https://www.linkedin.com/in/andul-kader-b47a1517a/" >< FaLinkedinIn className="text-white text-[40px] hover:scale-110 transition-all " /></Link></li>
                <li><Link to="https://github.com/abdulkader3" >< FiGithub className="text-white text-[40px] hover:scale-110 transition-all " /></Link></li>
              </ul>
            </div>
          </div>
          {/* section one right side */}



          {/* section one left side */}
          <div className="w-full flex justify-end mr-20 h-[100vh] items-end ">
            <img
              className="w-[700px] h-[700px] "
              src="photos/shanto.png"
              alt="photos"
            />
          </div>
          {/* section one left side */}



        </div>


      </section>
      {/* section one end */}


      {/* section tow start */}
      <section className="tow h-[100vh] snap-start" >
        <About/>
      </section>
      {/* section tow end */}



      {/* section three start */}
      <section className=" three h-[100vh] snap-start">
        <Contact/>
      </section>
      {/* section three end */}


      </div>
      {/* main container end */}



      

    </>
  );
};

export default HomeComponent;
