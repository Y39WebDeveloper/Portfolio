import { NavLink } from 'react-router-dom'
import { CollapseKit } from '../'
import './Navbar.css'

const Navbar = () => {
  return (
    <CollapseKit>
        <ul className='navbar'>
            <li className='navbar-item'><NavLink className={({ isActive }) => (isActive ? "active" : "")} to='/'>Home</NavLink></li>
            <li className='navbar-item'><NavLink className={({ isActive }) => (isActive ? "active" : "")} to='/work'>Works</NavLink></li>
            <li className='navbar-item'><NavLink className={({ isActive }) => (isActive ? "active" : "")} to='/blog'>Blog</NavLink></li>
        </ul>
    </CollapseKit>
  )
}

export default Navbar