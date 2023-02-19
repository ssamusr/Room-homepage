import './App.css'
import { Footer, Header, Main } from './components'
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
