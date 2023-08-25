import Blog from './components/Blog'
import { FavoriteContextProvider } from './context/FavoriteContext'

function App() {
  return (
    <FavoriteContextProvider>
      <Blog />
    </FavoriteContextProvider>
  )
}

export default App;
