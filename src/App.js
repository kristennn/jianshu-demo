import Header from './common/header'
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path='/detail' element={ <Detail /> } />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
