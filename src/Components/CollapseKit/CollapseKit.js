import './CollapseKit.css'

const CollapseKit = (props) => {
    function collapseShow() { 
        document.querySelector(".collapse").classList.toggle('show');
        document.querySelector(".collapse-btn").classList.toggle('active');
    };
  return (
      <>
          <div className='collapse-btn' onClick={collapseShow}>
              <span></span>
              <span></span>
              <span></span>
          </div>
          <div className='collapse' id='collapse'>
              {props.children}
          </div>
      </>
  )
}

export default CollapseKit