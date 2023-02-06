import { Post } from '../../Components'
import PostData from '../../Data/PostData'
import './Posts.css'

const Posts = () => {
    const posts = PostData.map(post => {
        return <Post key={post.id} title={post.title} date={post.date} category={post.category} content={post.content} />
    });
  return (
    <section className='posts'>
        <h3>Recent posts</h3>
        <div className='posts-container'>
            {posts}
        </div>
    </section>
  )
}

export default Posts