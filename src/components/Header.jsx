import { useContext, useState } from 'react'
import { HeroContext } from '../context/HeroProvider'
import { Navbar } from './Navbar'
import { IconAngleLeft, IconAngleRight, IconArrow } from './Icons'

export function Header () {
  const [index, setIndex] = useState(0)
  const bbdd = useContext(HeroContext)

  const handlePrevius = () => {
    if (index === 0) {
      return setIndex(bbdd.length - 1)
    } else {
      setIndex(index - 1)
    }
  }

  const handleNext = () => {
    if (index === bbdd.length - 1) {
      return setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  return (
    <header className='grid grid-cols-3 grid-rows-[7fr_1fr_8fr] lg:grid-cols-7 lg:grid-rows-[7fr_1fr]'>

      <div className='col-start-1 col-end-4 row-start-1 row-end-3 relative lg:col-start-1 lg:col-end-5 lg:row-start-1 lg:row-end-3'>
        <Navbar />
        <img src={bbdd[index].imgHero} alt={bbdd[index].alt} className='object-cover w-full h-full hidden lg:block' />
        <img src={bbdd[index].imgHeroMobile} alt={bbdd[index].alt} className='object-cover w-full h-full lg:hidden' />
      </div>

      <div className='col-start-3 col-end-4 row-start-2 row-end-3 z-[1] lg:col-start-5 lg:col-end-6 lg:row-start-2 lg:row-end-3'>
        <button
          onClick={handlePrevius}
          className='bg-black w-1/2 h-full lg:hover:bg-light-gray'
        >
          <IconAngleLeft className='mx-auto' />
        </button>
        <button
          onClick={handleNext}
          className='bg-black w-1/2 h-full lg:hover:bg-light-gray'
        >
          <IconAngleRight className='mx-auto' />
        </button>
      </div>

      <article className='flex flex-col justify-center items-start gap-6 p-10 col-start-1 col-end-4 row-start-3 row-end-4 lg:px-28 lg:col-start-5 lg:col-end-8 lg:row-start-1 lg:row-end-3'>
        <h1 className='text-3xl font-bold lg:text-4xl'>{bbdd[index].title}</h1>
        <p className='text-base text-dark-gray h-48 lg:h-36'>{bbdd[index].text}</p>
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
