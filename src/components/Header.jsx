import { IconAngleLeft, IconAngleRight, IconArrow } from './Icons'
import { Navbar } from './Navbar'

export function Header () {
  return (
    <header className='grid grid-cols-3 grid-rows-[7fr_1fr_8fr] lg:grid-cols-7 lg:grid-rows-[7fr_1fr]'>

      <div className='col-start-1 col-end-4 row-start-1 row-end-3 relative lg:col-start-1 lg:col-end-5 lg:row-start-1 lg:row-end-3'>
        <Navbar />
        <img src='public/assets/images/DT-Img-Hero1.jpg' alt='' className='object-cover w-full h-full' />
      </div>

      <div className='col-start-3 col-end-4 row-start-2 row-end-3 lg:col-start-5 lg:col-end-6 lg:row-start-2 lg:row-end-3 lg:z-[1]'>
        <button className='bg-black w-1/2 h-full lg:hover:bg-light-gray'>
          <IconAngleLeft className='mx-auto' />
        </button>
        <button className='bg-black w-1/2 h-full lg:hover:bg-light-gray'>
          <IconAngleRight className='mx-auto' />
        </button>
      </div>

      <article className='flex flex-col justify-center items-start gap-6 p-10 col-start-1 col-end-4 row-start-3 row-end-4 lg:px-28 lg:col-start-5 lg:col-end-8 lg:row-start-1 lg:row-end-3'>
        <h1 className='text-3xl font-bold lg:text-4xl'>Discover innovative ways to decorate</h1>
        <p className='text-base text-dark-gray'>We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.</p>
        <button className='flex items-center gap-6 uppercase font-bold tracking-[0.3em] lg:tracking-[0.8em] lg:hover:text-light-gray lg:hover:fill-light-gray'>
          Shop Now
          <span>
            <IconArrow />
          </span>
        </button>
      </article>
    </header>
  )
}
