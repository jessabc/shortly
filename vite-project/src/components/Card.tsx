// props from StatiscticsSection.tsx
interface  Props {
statsData: StatsData
// StatsData from types.d.ts, typing statisticsData:
// img: string,
// title:string,
// description: string
index: number
}

export function Card ({statsData, index}:  Props) {
  const {img, title, description} = statsData

  return (
        <div className={`${index === 1 ? "sm:mt-10 " : ""} ${index === 2 ? "sm:mt-20 " : ""} bg-slate-100 mb-20 last:mb-5 relative flex flex-col gap-3 text-center p-5 sm:text-left sm:h-fit`}> 
       
        <div className={`${index === 0 ? "hidden" :"" }bg-teal-400 h-1/3 w-2 absolute  ml-auto mr-auto left-0 right-0 text-center -top-20 sm:hidden `} ></div>
        <img src={img} alt="" className='bg-slate-700 p-4 rounded-full absolute ml-auto mr-auto left-0 right-0 text-center -top-7 sm:ml-0 sm:mr-0 sm:left-10'/>
        <h5 className='text-slate-700 text-lg font-bold pt-12'>{title}</h5>
        <p className='text-slate-500 text-medium font-medium opacity-70 pb-5'>{description}</p>

       </div>
 
  )
}
