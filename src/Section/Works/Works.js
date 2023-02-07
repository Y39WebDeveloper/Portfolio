import { WorksElement } from '../../Components'
import './Works.css'
import WorkData from '../../Data/WorkData'

const Works = () => {
  const works = WorkData.map(work => {
    return <WorksElement key={work.id} img={work.img} title={work.title} date={work.date} category={work.category} content={work.content} />
  });
  return (
    <section className='works'>
        <h3>Featured Works</h3>
        <div className='work-container'>
          {works}
        </div>
    </section>
  )
}

export default Works