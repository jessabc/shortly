import { useState } from 'react';

// linkData (saved short links from api from InputForm.tsx, maps each object to the card below)
interface Props {
  data: Link
  // Link is from types.d.ts:
  // originalLink: string,  
    // shortLink: string,
}

export function LinkCard ({data}:  Props) {

  const {originalLink, shortLink} = data
  const [isCopied, setIsCopied] = useState(false)

  const copyText = () => {
    navigator.clipboard.writeText(shortLink)
          .then(() => {
            setIsCopied(true)
          })
  }

  return (
        <div className='bg-slate-100 flex flex-col mb-2 mt-2 m-8 sm:flex-row sm:items-center sm:m-12 sm:my-2 lg:mx-20 lg:my-2'> 
          <p className='text-slate-700 font-semibold p-3'>{originalLink}</p>
          <hr className='sm:hidden'/>
          <p className='p-3 text-teal-400 font-semibold sm:ml-auto'>{shortLink}</p>
          <button onClick={copyText} className={`m-3 py-2  rounded-lg text-slate-100 text-lg font-bold sm:w-24 ${isCopied ? "bg-slate-700 " : " bg-teal-400 hover:bg-teal-300"}`}>
          {isCopied ? 'Copied!' : 'Copy' } </button> 
       </div>
  )
}
