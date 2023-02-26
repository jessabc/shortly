import {statisticsData} from '../statisticsData';
import { Card } from './Card';

export function StatisticsSection () {
  return (
        <div className='p-8 sm:px-12 lg:px-20'> 

          <div className='flex flex-col gap-3 text-center pb-10'>
            <h3 className='text-slate-700 text-2xl font-extrabold'>Advanced Statistics</h3>
            <p className='text-slate-500 text-medium font-medium opacity-70'>Track how your links are performing across the web with our advanced statistics dashboard.</p>
          </div>
         
          <div className='sm:flex sm:flex-row sm:gap-5 sm:relative'>
            <div className='sm:bg-teal-400 sm:w-5/6 sm:h-2 sm:absolute sm:top-32'></div>
            {/* statisticsData is provided data */}
            {statisticsData.map((statsData, index)=> <Card key={index} statsData={statsData} index={index}/>)}
          </div>

       </div>
  )
}



