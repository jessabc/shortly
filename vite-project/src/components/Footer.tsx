import facebookIcon from '../assets/images/icon-facebook.svg'
import twitterIcon from '../assets/images//icon-twitter.svg'
import pinterestIcon from '../assets/images//icon-pinterest.svg'
import instagramIcon from '../assets/images//icon-instagram.svg'

export function Footer () {
  return (
    <footer className=' bg-slate-700 text-slate-300 flex flex-col justify-center items-center gap-1 sm:flex-row  sm:items-start sm:w-full sm:justify-start sm:px-10 sm:py-10'>

      <p className='font-bold text-4xl text-slate-100 mt-8 sm:m-0'>Shortly</p>

      <div className='text-center my-4 sm:text-left sm:m-0 sm:ml-auto sm:mr-5'>
        <h5 className='font-semibold text-slate-100 m-4 sm:m-0 sm:mb-2'>Features</h5>
        <div className='flex flex-col gap-2'>
          <a href="">Link Shortening</a>
          <a href=""> Branded Links</a>
          <a href="">Analytics</a>
        </div>
      </div>

      <div className='text-center my-4 sm:text-left sm:m-0 sm:mr-5'>
        <h5 className='font-semibold text-slate-100  m-4 sm:m-0 sm:mb-2'>Resources</h5>
        <div className='flex flex-col gap-2'>
          <a href="">Blog</a>
          <a href=""> Developers</a>
          <a href="">Support</a>
        </div>
      </div>

      <div className='text-center my-4 sm:text-left sm:m-0 sm:mr-5'>
        <h5 className='font-semibold text-slate-100  m-4 sm:m-0 sm:mb-2'>Company</h5>
        <div className='flex flex-col gap-2'>
          <a href="">About</a>
          <a href=""> Our Team</a>
          <a href="">Careers</a>
          <a href="">Contact</a>
        </div>
      </div>

      <div className='flex my-7 gap-3 sm:m-0'>
        <img src={facebookIcon} alt="" />
        <img src={twitterIcon} alt="" />
        <img src={pinterestIcon} alt="" />
        <img src={instagramIcon} alt="" />
      </div>
      
    </footer>
  )
}


