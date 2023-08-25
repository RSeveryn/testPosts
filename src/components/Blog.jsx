import React from 'react'
import styles from './style.module.css'
import PostList from './PostList'
import FavoritePosts from './FavoritePosts'

const Blog = () => {
  return (
    <div className={styles.blog}>
      <PostList />
      <FavoritePosts />
    </div>
  )
}

export default Blog