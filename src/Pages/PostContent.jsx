import { useContext } from "react";
import { useParams } from "react-router-dom"
import { myContext } from "./Context";

const listStyle ={
     display:'flex',
     justifyContent:'center',
     backgroundColor:'#555555',
     margin:'2% 7% 0 7%',
     borderRadius:'10px',
     height:'70vh',
     alignItems:'center',
     color:'#F8F0FB'
   }
export const PostContent = () => {
     const {id} = useParams();
     const bid = id
     const {blog} = useContext(myContext)
     const spBlog = blog.filter((i)=> i.id == bid)

  return (
    <div style={listStyle}>{spBlog.map((value)=>
     <div  key={value.id}>
          <h1>{value.title}</h1>
          <h5 style={{margin:'5% 0 0 0'}}>{value.content}</h5>
     </div>)}
     
   </div>
  )
}
