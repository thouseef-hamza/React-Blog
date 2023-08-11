import { useContext } from 'react'
import { myContext } from './Context'
import { useNavigate } from 'react-router-dom'



export const CreatePost = () => {
  const nav = useNavigate()
  const {blog,setBlog} =  useContext(myContext)
  const handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.title.value
    const content = event.target.content.value
    setBlog([...blog,{title:title,content:content,id:Date.now()}])    
    nav('/blogs')
  }
 
  return (
    <div className='createPostPage'>
      <div className="Container">
        <h1>Create A Post</h1>
        <form onSubmit={handleSubmit}>
            <div className='input'>
              <label>Title:</label>
              <input placeholder='Title...' id='title' name='title'/>
            </div> 
            <div className='input'>
              <label>Post:</label>
              <textarea placeholder='Post...' id='content' cols="30" rows="10" name='content'></textarea>
              <button type='submit'>Submit</button>
            </div>
        </form>
      </div>
    </div>
  )
}
