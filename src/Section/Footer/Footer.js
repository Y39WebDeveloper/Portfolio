import './Footer.css'
import { FaFacebookSquare, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
        <ul>
              <li><FaFacebookSquare /></li>
              <li><FaInstagram /></li>
              <li><FaTwitter /></li>
              <li><FaLinkedin /></li>
        </ul>
        <p>Copyright &copy;2020 All rights reserved </p>
    </footer>
  )
}

export default Footer