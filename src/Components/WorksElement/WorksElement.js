import { Link } from 'react-router-dom'
import './WorksElement.css'

const WorksElement = (props) => {
  return (
    <Link to='/work-detail' className='works-element'>
        <img src={props.img} className='work-img' alt='work'/>
        <div className='work-content'>
            <h2>{props.title}</h2>
            <div><span>{props.date}</span><span>{props.category}</span></div>
            <p>{props.content}</p>
        </div>
    </Link>
  )
}

export default WorksElement