import { IconGithub, IconLinkedin, IconTwitter } from './Icons'

export function Footer () {
  return (
    <footer className='flex flex-col items-center p-4'>
      <p className='text-base text-dark-gray italic'>Challenge by <a href='https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq' target='_blank' rel='noreferrer' className='underline' aria-label='Frontend Mentor'>Frontend Mentor</a></p>
      <p className='flex items-center text-base text-dark-gray italic'>Coded by @ssamusr</p>
      <div className='flex gap-4'>
        <a href='https://twitter.com/ssamusr' target='_blank' rel='noreferrer' aria-label='Twitter'>
          <IconTwitter className='w-5 fill-dark-gray hover:fill-[#1DA1F2]' />
        </a>
        <a href='https://github.com/ssamusr' target='_blank' rel='noreferrer' aria-label='Github'>
          <IconGithub className='w-5  fill-dark-gray hover:fill-[#181717]' />
        </a>
        <a href='https://www.linkedin.com/in/samuelsrodriguez/' target='_blank' rel='noreferrer' aria-label='Linkedin'>
          <IconLinkedin className='w-5  fill-dark-gray hover:fill-[#0A66C2]' />
        </a>
      </div>
    </footer>
  )
}
