import { useContext } from 'react'
import { HeroContext } from '../../context/HeroProvider'
import { IconAngleRight } from '../Icons'

export function ButtomRight ({ index, setIndex }) {
  const bbdd = useContext(HeroContext)

  const handleNext = () => {
    if (index === bbdd.length - 1) {
      return setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  return (
    <button
      onClick={handleNext}
      className='bg-black w-1/2 h-full lg:hover:bg-light-gray'
      aria-label='forward button'
    >
      <IconAngleRight className='mx-auto' />
    </button>
  )
}
