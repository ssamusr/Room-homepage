import './App.css'
import { IconAngleLeft, IconAngleRight, IconArrow } from './components/Icons'

function App () {
  return (
    <>
      <header className='grid grid-cols-3 grid-rows-[7fr_1fr_8fr] lg:grid-cols-7 lg:grid-rows-[7fr_1fr]'>

        <div className='col-start-1 col-end-4 row-start-1 row-end-3 lg:col-start-1 lg:col-end-5 lg:row-start-1 lg:row-end-3'>
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

      <main className='grid lg:grid-cols-7'>
        <section className='lg:col-start-1 lg:col-end-3'>
          <img src='public/assets/images/Img-dark.jpg' alt='' className='object-cover w-full h-full' />
        </section>

        <section className='flex flex-col justify-center items-start gap-6 p-10 lg:px-16 lg:col-start-3 lg:col-end-6'>
          <h2 className='text-lg font-bold uppercase tracking-[0.2em] lg:text-2xl'>About our furniture</h2>
          <p className='text-base text-dark-gray'>Our multifunctional collection blends design and function to suit your individual taste.Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
        </section>

        <section className='lg:col-start-6 lg:col-end-8'>
          <img src='public/assets/images/Img-light.jpg' alt='' className='object-cover w-full h-full' />
        </section>
      </main>

      <footer className='flex flex-col items-center p-4'>
        <p className='text-base text-dark-gray italic'>Challenge by <a href='https://www.frontendmentor.io?ref=challenge' target='_blank' rel='noreferrer' className='underline'>Frontend Mentor</a></p>
        <p className='text-base text-dark-gray italic'>Coded by <a href='#'>Your Name Here</a></p>
      </footer>
    </>

  )
}

export default App
