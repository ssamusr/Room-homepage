export function NavLink ({ link }) {
  return (
    <li className='relative'>
      <a href='#' className='Link Link:after Link:hover:after'>{link}</a>
    </li>
  )
}
