import React, { useEffect, useState } from 'react'
import Post from './Post'
import styles from './style.module.css'

const PostList = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(p => setPosts(p))
  }, [])

  return (
    <ul>
      {
        posts.map(post =>
          <li className={styles.postItem} key={post.id}>
            <Post body={post.body} id={post.id} title={post.title} />
          </li>)
      }
    </ul>
  )
}

export default PostList