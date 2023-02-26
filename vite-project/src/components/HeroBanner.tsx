import { useContext } from 'react'
import illustrationWorking from '../assets/images/illustration-working.svg'
import { Context, ContextType  } from '../ContextProvider';

export function HeroBanner () {
  const {isVisible} = useContext(Context) as ContextType

  return (
        <div className='flex flex-col justify-center items-center sm:flex-row p-8 pt-0 sm:p-12 sm:py-0  lg:p-20'>
          
          {/* hide hero image if at mobile and menu visible */}
          <img src={illustrationWorking} alt=""  className={`sm:order-1 sm:w-1/2 sm:block ${isVisible ? 'hidden' : 'block'} `}/>

          <div className='flex flex-col justify-center items-center gap-7 mt-8 text-center sm:text-left sm:items-start'>
            <h1 className='text-slate-700 text-4xl font-extrabold'>More than just shorter links</h1>
            <p className='text-slate-500 text-lg font-medium opacity-70'>Build your brand’s recognition and get detailed insights  on how your links are performing.</p>
            <button className='bg-teal-400 py-4 px-7 rounded-full text-slate-100 text-xl font-bold hover:bg-teal-300'>Get Started</button>
          </div>

        </div>
 
  )
}
