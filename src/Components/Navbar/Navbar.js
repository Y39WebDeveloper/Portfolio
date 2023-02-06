import { CollapseKit } from '../'
import './Navbar.css'

const Navbar = () => {
  return (
    <CollapseKit>
        <ul className='navbar'>
            <li className='navbar-item'><a href='/'>Works</a></li>
            <li className='navbar-item'><a href='/'>Blog</a></li>
            <li className='navbar-item'><a href='/'>Contact</a></li>
        </ul>
    </CollapseKit>
  )
}

export default Navbar