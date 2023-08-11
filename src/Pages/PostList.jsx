import { useContext } from "react"
import { myContext } from "./Context"
import { useNavigate } from "react-router-dom"

const listStyle ={
  display:'flex',
  justifyContent:'center',
  backgroundColor:'#555555',
  margin:'2% 7% 0 7%',
  borderRadius:'10px',
  height:'100px',
  alignItems:'center',
  color:'#F8F0FB'
}

export const PostList = () => {
  const {blog} = useContext(myContext)
  console.log(blog,'andiiiiiiii');
  const title = blog.filter((value)=> value.title)
  const nav = useNavigate()
  return (
    <div  className="card">
      {title.map((value)=>
        <div key={value.id}>
          <p style={listStyle} onClick={()=>nav(`/blogs/${value.id}`)}>{value.title}</p>
        </div>)}
    </div>
  )
}
