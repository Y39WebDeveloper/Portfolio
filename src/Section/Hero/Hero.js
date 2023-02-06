import { HeroImg } from '../../Assets/Images'
import './Hero.css'
const Hero = () => {
  return (
    <section className='hero'>
        <div className='hero-content'>
              <h1>Hi, I am John,<br/>Creative Technologist</h1> 
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              <button>Download Resume</button>
        </div>
        <div className='hero-img'>
            <img src={HeroImg} alt='hero' />
        </div>
    </section>
  )
}

export default Hero