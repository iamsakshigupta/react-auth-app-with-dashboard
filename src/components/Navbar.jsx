import React, {useEffect} from 'react'

import { AiOutlineMenu } from 'react-icons/ai'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import avatar from '../data/avatar.jpg'
import {UserProfile} from '.'
import { useStateContext } from '../context/ContextProvider'

const Navbar = () => {
  const {activeMenu,setActiveMenu,isClicked, setIsClicked, handleClick,screenSize,setScreenSize}= useStateContext();
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  const NavButton=({title, customFunc, icon, color, dotColor}) => (
    <TooltipComponent content={title} position='BottomCenter'>
      <button type='button' onClick={customFunc} style={{color}} className='relative text-xl rounded-full p-3 hover:bg-light-gray' >
        <span style={{background:dotColor}} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'>
          
        </span>
        {icon}
      </button>
    </TooltipComponent>
  )
  

  return (
    <div className='flex justify-between m-auto p-2  relative'>
      <NavButton  title='Menu' customFunc={() => setActiveMenu((prevActiveMenu)=>(!prevActiveMenu))} color='blue' icon={<AiOutlineMenu/>} />
      <div className='flex'>
        <TooltipComponent title='Profile' position='BottomCenter'>
          <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'onClick={() => handleClick('userProfile')} >
            <img className='rounded-full w-8 h-8' src={avatar}  alt="" />
            <span className='text-gray-400 text-14'>Hi,</span> {' '}
            <span className='text-gray-400 font-bold ml-1 text-14'>Michael</span>
            <MdKeyboardArrowDown className='text-gray-400 text-14'/>
          </div>
        </TooltipComponent>
        
        {isClicked.userProfile && <UserProfile/>}
       
      </div>
    </div>
  )
}

export default Navbar