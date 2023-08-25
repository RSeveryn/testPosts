import { createContext, useState } from 'react'

const defaultValue = {
  favorites: {},
  addToFav: () => {},
  removeFromFav: () => {},
  clearAll: () => {}
}

const FavoriteContext = createContext(defaultValue)

const FavoriteContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState({})

  const addToFav = ({ id, title }) => {
    if (favorites.hasOwnProperty(id)) return
    setFavorites(prevFav => ({
      ...prevFav,
        [id]: title
    }))
  }

  const removeFromFav = ({ id }) => {
    setFavorites(currFav => {
      const newFav = {...currFav}
      delete newFav[id]
      return newFav
    })
  }

  const clearAll = () => {
    setFavorites({})
  }

  return (
    <FavoriteContext.Provider value={{ favorites, addToFav, removeFromFav, clearAll }}>
      {children}
    </FavoriteContext.Provider>
  )
}

export { FavoriteContext, FavoriteContextProvider }