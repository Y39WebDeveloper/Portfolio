import "./Work.css"
import {WorkData2} from "../../Data/WorkData";
import { WorksElement } from "../../Components";

const Work = () => {
    const works = WorkData2.map(work => {
    return <WorksElement key={work.id} img={work.img} title={work.title} date={work.date} category={work.category} content={work.content} />
  });
  return (
    <>
        <div className='work'>
            <h1 className='page-title'>Works</h1>
            <div className='work-container'>
                {works}
            </div>
        </div>
    </>
  )
}

export default Work