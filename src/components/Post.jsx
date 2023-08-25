import React, { useContext, useEffect, useState } from 'react'
import { FavoriteContext } from '../context/FavoriteContext'
import styles from './style.module.css'

const Post = ({ id, title, body }) => {
  const {favorites, addToFav, removeFromFav} = useContext(FavoriteContext)
  const [inFav, setInFav] = useState(false)

  useEffect(() => {
    setInFav(favorites.hasOwnProperty(id))
  }, [favorites, id])

  const favBtnHandle = () => {
    if (inFav) {
      removeFromFav({ id })
      setInFav(!inFav)
      return
    }

    addToFav({ id, title })
    setInFav(!inFav)
  }

  return (
    <section className={styles.post}>
      <h1>{id}. { title }</h1>
      <p>{ body }</p>
      <button className={styles.favButton} onClick={favBtnHandle}>
        { inFav ? 'Remove' : 'Add' } to favorites
      </button>
    </section>
  )
}

export default Post