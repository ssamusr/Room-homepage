import './App.css'
import { Footer, Main } from './components'
import { Header } from './components/Header/Header'
import { Provider } from './context/HeroProvider'

function App () {
  return (
    <>
      <Provider>
        <Header />
        <Main />
        <Footer />
      </Provider>
    </>
  )
}

export default App
