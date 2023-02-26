import bgBoostDesktop from '../assets/images/bg-boost-desktop.svg'

export function BottomBanner () {
  return (
        <div className='bg-cover bg-slate-700 text-slate-100 flex flex-col gap-5 justify-center items-center py-10 px-3' style={{ backgroundImage: `url(${ bgBoostDesktop})` }}> 

          <p className=' text-2xl font-bold'>Boost your links today</p>
          <button className='bg-teal-400 py-4 px-7 rounded-full text-slate-100 text-xl font-bold hover:bg-teal-300'>Get Started</button> 
        
       </div>
 
  )
}
