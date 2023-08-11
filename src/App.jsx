import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import { myContext } from './Pages/Context'
import { CreatePost } from './Pages/CreatePost'
import { PostList } from './Pages/PostList'
import { PostContent } from './Pages/PostContent'

function App() {
  const [blog,setBlog] = useState([])

  return (
    <myContext.Provider value={{blog,setBlog}} >
      <Router>
        <nav>
          <Link  to='/blogs'>Home</Link>
          <Link  to='/createblog'>Create Post</Link>
        </nav>
        <Routes>
          <Route path='/createblog' element={<CreatePost/>}></Route>
          <Route path='/blogs' element={<PostList/>}></Route>
          <Route path='/blogs/:id' element={<PostContent/>}></Route>
        </Routes>
      </Router>
    </myContext.Provider>
  )
}

export default App
