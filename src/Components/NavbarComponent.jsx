import React from 'react'
import { MdContactPhone} from 'react-icons/md'
import { PiAddressBookLight} from 'react-icons/pi'
import { TiHomeOutline } from 'react-icons/ti'
import { NavLink } from 'react-router-dom'

const NavbarComponent = () => {
  return (
    <>
    <div className=" w-full h-[65px] flex items-center justify-end absolute "> 
    {/* <ul className='flex gap-[60px]  pr-[180px] flex-wrap '>
            <li> <NavLink to='/' className={({ isActive }) => isActive ? "px-[24px] gap-[2px] flex items-center font-semibold hover:bg-gradient-to-r from-[#FA5252] to-[#df9006] text-white transition-all bg-gradient-to-r from-[#FA5252] to-[#df9006] py-[10px] rounded-[10px] text-[16px]" : " px-[24px] transition-all font-semibold bg-white hover:bg-gradient-to-r from-[#FA5252] to-[#df9006] hover:text-white bg-white  py-[10px] rounded-[10px] text-[16px] flex items-center gap-[2px] "  } ><TiHomeOutline /> Home </NavLink> </li>
            <li> <NavLink to='/about' className={({ isActive }) => isActive ? "px-[24px] flex items-center gap-[2px] font-semibold bg-gradient-to-r from-[#FA5252] to-[#df9006] transition-all  py-[10px] rounded-[10px] hover:bg-gradient-to-r from-[#FA5252] to-[#df9006] text-white text-[16px]" : " px-[24px] transition-all font-semibold hover:bg-gradient-to-r from-[#FA5252] to-[#df9006] bg-white py-[10px] hover:text-white rounded-[10px] flex items-center gap-[2px]  "  } > <PiAddressBookLight/> About </NavLink> </li>
            <li> <NavLink to='/contact' className={({ isActive }) => isActive ? "px-[24px] flex items-center gap-[2px] font-semibold bg-gradient-to-r from-[#FA5252] to-[#df9006] transition-all  hover:bg-gradient-to-r from-[#FA5252] to-[#df9006] text-white py-[10px] rounded-[10px] text-[16px]" : " px-[24px] transition-all hover:text-white font-semibold hover:bg-gradient-to-r from-[#FA5252] to-[#df9006]  bg-white  py-[10px] rounded-[10px] flex items-center gap-[2px] "  } > <MdContactPhone /> Contact </NavLink> </li>
          </ul> */}
    </div>
      
    </>
  )
}

export default NavbarComponent
