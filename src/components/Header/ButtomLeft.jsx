import { useContext } from 'react'
import { HeroContext } from '../../context/HeroProvider'
import { IconAngleLeft } from '../Icons'

export function ButtomLeft ({ index, setIndex }) {
  const bbdd = useContext(HeroContext)

  const handlePrevius = () => {
    if (index === 0) {
      return setIndex(bbdd.length - 1)
    } else {
      setIndex(index - 1)
    }
  }

  return (
    <button
      onClick={handlePrevius}
      className='bg-black w-1/2 h-full lg:hover:bg-light-gray'
      aria-label='backward button'
    >
      <IconAngleLeft className='mx-auto' />
    </button>

  )
}
