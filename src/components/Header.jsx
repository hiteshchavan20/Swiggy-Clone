import React, { useState } from 'react';
import { RxCaretDown } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";
import { MdHelpOutline } from "react-icons/md";
import { PiSignInBold } from "react-icons/pi";
import { FaCartArrowDown } from "react-icons/fa";




export default function Header() {
    const [toggle,setToggle]=useState(false);

    const showSideMenu=()=>{
        setToggle(true)
    }
    const hideSideMenu=()=>{
        setToggle(false)
    }
    const links=[
        {
            icon:<CiSearch/>,
            name:"Search"
        },
        {
            icon:<BiSolidOffer/>,
            name:"Offers",
            sup:"New"
        },
        {
        icon:<MdHelpOutline/>,
        name:"Help"
        },
        {
            icon:< PiSignInBold/>,
            name:"SignIn"
        },
        {
            icon:<FaCartArrowDown/>,
            name:"Cart"
        },

        
    ]
    return (
        <>
        <div className='balckOverlay w-full h-full fixed' onClick={hideSideMenu} style={{
            opacity:toggle?1:0 ,visibility:toggle?"visible":"hidden"}}>

                <div onClick={(e)=>e.stopPropagation()}className='w-[500px] h-full bg-white duration-[400ms]' style={{left:toggle?'0%':'-100%'}}></div>
            </div>
        <header className='  p-[15px] shadow-xl text-[#686b78]'>
            <div className="max-w-[1200px] mx-auto  flex items-center">
                <div className='w-[100px]  '>
                    <img src="./public/images/swiggy-logo.png" alt="" className='w-full' />
                </div>
                <div >
                    <span className='font-bold border-b-[3px] border-[black] '>Panvel </span>Navi-Mumbai,<RxCaretDown fontSize={25} className='inline  text-[#fc8019]' onClick={showSideMenu} />
                </div>
                <nav className='list-none flex gap-10 ml-auto font-semibold text-[18px] '>
                    {
                        links.map((link,index)=>{
                           return <li key={index} className='flex items-center gap-2 hover:text-[#fc8019]'>
                            {link.icon}
                            {link.name}
                            <sup><i>{link.sup}</i></sup>
                           </li>
                        })

                        
                    }
                </nav>
            </div>
        </header>
        </>
    )
}
