import { useState } from 'react';
import bgShortenDesktop from '../assets/images/bg-shorten-desktop.svg'
import React from 'react';

// props from Home.tsx
interface Props  {
  setLinkData: React.Dispatch<React.SetStateAction<Link[]>>;
}

export function InputForm ({setLinkData}: Props) {

  const [input, setInput] = useState('')
  const [isError, setIsError] = useState(false);

  // this function fetches shortlink from api using the input, then saves that link to setInput hook; provides error if fails to fetch from api
  const getLink = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()

    fetch(`https://api.shrtco.de/v2/shorten?url=${input}`)
      .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
              throw 'error'
            }
          }) 
      .then((data) => {
          setLinkData((prev) => {
            const newLink = {
              originalLink: data.result.original_link,
              shortLink: data.result.full_short_link3
            }
            setIsError(false)
            return [...prev, newLink]
          })
            setInput('')
          })
      .catch((error) => {
          console.log(error)
          setIsError(true)
        })
  }

  return (
 
            <form 
              className='bg-cover flex flex-col justify-center  bg-slate-600 p-5 rounded-lg   mx-8 my-0 sm:m-12 sm:mb-0 lg:mx-20 sm:grid sm:grid-cols-4 sm:gap-3' 
              style={{ backgroundImage: `url(${ bgShortenDesktop})` }} > 

              <input 
                type="text" 
                placeholder='Shorten a link here...' 
                value={input} onChange={(e) => setInput(e.target.value)} 
                className={`p-2 rounded-lg font-medium outline-none text-slate-700 sm:col-span-3 ${isError ? 'border-2 border-rose-400' : ''} `}/>

              {isError && <p className='text-rose-400 italic text-sm pt-1 sm:order-1 sm:w-full'> Please add a link</p>}
              
              <button onClick={getLink} className='bg-teal-400  rounded-lg text-slate-100 font-bold py-2 w-full text-lg mt-5 sm:mt-0 hover:bg-teal-300'>Shorten It!</button> 
              
            </form>

  )
}

