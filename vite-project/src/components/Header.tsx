import logo from '../assets/images/logo.svg'
import {  Link } from "react-router-dom";
import { Bars3Icon } from '@heroicons/react/24/solid'
import { useContext, useEffect, useState } from 'react';
import { Context, ContextType  } from '../ContextProvider';


export function Header () {

  const {isVisible, setIsVisible} = useContext(Context) as ContextType
  
  // closes nav menu on screen resize if still open
  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth > 640) {
      setIsVisible(true)
      } else if(window.innerWidth < 640){
        setIsVisible(false)
      }
    }
    
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  },[])
  
  return (
        <header className='sm:flex  sm:items-center p-8 pb-0 sm:pb-0 sm:p-12 lg:p-20'>

          <div className='flex justify-between items-center sm:justify-center sm:items-center '>
            {/* logo */}
            <Link to='/'><img src={logo} alt="" /></Link>
            {/* hamburger */}
            <button onClick={() => setIsVisible(prev => !prev)}>
              <Bars3Icon className="h-10 w-10 text-slate-400 sm:hidden"/>
            </button>
          </div>
          
          {/* nav */}
          <div className={`${isVisible ? "block" : "hidden"}  
          bg-slate-700 text-slate-100 rounded-lg h-70 font-bold text-2xl sm:flex sm:justify-between w-full sm:items-center sm:font-medium sm:text-base sm:bg-transparent sm:text-slate-500 sm:pl-5 `}>

            <div className='flex flex-col items-center  gap-3 pt-3 sm:pt-0 sm:flex-row  sm:items-center'>  
              <Link to='/features'>Features</Link>
              <Link to='/pricing'>Pricing</Link>
              <Link to='/resources'>Resources</Link>
              <hr className='w-5/6 my-2 sm:hidden'/>
            </div>
           
            {/* login and sign up */}
            <div className='flex flex-col justify-center items-center gap-4 pt-3 pb-6 sm:pt-0 sm:pb-0 sm:flex-row sm:justify-center sm:items-center '>
              <button>Login</button>
              <button className='bg-teal-400  rounded-full text-slate-100 font-bold p-1 px-10 sm:px-5 hover:bg-teal-300'> Sign Up</button>
            </div>
            
          </div>

        </header>
  )
}
