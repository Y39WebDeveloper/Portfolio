import './Post.css'

const Post = (props) => {
  return (
    <div className='post'>
        <h2>{props.title}</h2>
        <div><span>{props.date}</span><span>{props.category}</span></div>
        <p>{props.content}</p>
    </div>
  )
}

export default Post