import React, { useContext } from 'react'
import styles from './style.module.css'
import { FavoriteContext } from '../context/FavoriteContext'

const FavoritePosts = () => {
  const { favorites, clearAll } = useContext(FavoriteContext)

  const favEntries = Object.entries(favorites)

  return (
    <div className={styles.favorites}>
      <div>
        Favorites count: {favEntries.length}
        <button onClick={clearAll}>Clear all</button>
      </div>
      <ul>
        {
          favEntries.map(entry => <li>{entry[0]}. {entry[1]}</li>)
        }
      </ul>
    </div>
  )
}

export default FavoritePosts