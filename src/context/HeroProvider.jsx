import { createContext } from 'react'

import ImgHero1 from '../../public/assets/images/DT-Img-Hero1.jpg'
import ImgHero2 from '../../public/assets/images/DT-Img-Hero2.jpg'
import ImgHero3 from '../../public/assets/images/DT-Img-Hero3.jpg'
import ImgHeroMobile1 from '../../public/assets/images/MB-Img-Hero1.jpg'
import ImgHeroMobile2 from '../../public/assets/images/MB-Img-Hero2.jpg'
import ImgHeroMobile3 from '../../public/assets/images/MB-Img-Hero3.jpg'

const bbdd = [
  {
    id: 1,
    imgHero: ImgHero1,
    imgHeroMobile: ImgHeroMobile1,
    alt: 'Image Hero White Chairs',
    title: 'Discover innovative ways to decorate',
    text: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
  },
  {
    id: 2,
    imgHero: ImgHero2,
    imgHeroMobile: ImgHeroMobile2,
    alt: 'Image Hero Yellow Chair',
    title: 'We are available all across the globe',
    text: 'With stores all over the world, it\'s easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don\'t hesitate to contact us today.'
  },
  {
    id: 3,
    imgHero: ImgHero3,
    imgHeroMobile: ImgHeroMobile3,
    alt: 'Image Hero Black Chair',
    title: 'Manufactured with the best materials',
    text: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
  }
]

export const HeroContext = createContext()

export function Provider ({ children }) {
  return (
    <HeroContext.Provider value={bbdd}>
      {children}
    </HeroContext.Provider>
  )
}
