import { Detail_1, Detail_2, Detail_3 } from '../../Assets/Images'
import './WorksDetails.css'

const WorksDetails = () => {
  return (
      <>
          <div className='work-detail'>
              <h1 className='page-title'>Designing Dashboards with usability in mind</h1>
              <div className='work-info'>
                  <span>2020</span>Dashboard, User Experience Design
              </div>
              <p className='work-text'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              <img src={Detail_1} className='main-img' alt='detail'/>
              <div className='work-content'>
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </div>
              <div className='work-gallery'>
                <img src={Detail_2} alt='detail'/>
                <img src={Detail_3} alt='detail'/>
              </div>
          </div>
      </>
  )
}

export default WorksDetails