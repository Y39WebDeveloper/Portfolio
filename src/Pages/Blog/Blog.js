import { BlogElement } from '../../Components'
import './Blog.css'

const Blog = () => {
  return (
    <>
        <div className='blog'>
            <h1 className='page-title'>Blog</h1>
            <div className='blog-container'>
                <BlogElement/>
                <BlogElement/>
                <BlogElement/>
            </div>
        </div>
    </>
  )
}

export default Blog