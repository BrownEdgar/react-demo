import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addCount, getCount } from './features/counter/counterSlice'
import { getAllPosts, getPosts } from './features/posts/postsSlice';

export default function App() {
  const [currentId, setCurrentId] = useState(true)

  useEffect(() => {
    dispatch(getPosts())

  }, [])

  const handleClick = () => {
    dispatch(addCount('6'))
  }

  return (
    <div>
      <h1 >{count}</h1>
      <button onClick={handleClick}>add count</button>
      <footer>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sed labore dicta, sunt enim veritatis neque officia nulla quisquam eligendi.</p>
      </footer>
    </div>
  )
}
