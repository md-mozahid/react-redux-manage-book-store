import { Provider } from 'react-redux'
import Home from './components/Home'
import Header from './layout/Header'
import store from './redux/store'

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Home />
      </Provider>
    </>
  )
}

export default App
