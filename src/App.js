import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './containers/home/Home';
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
import Activate from './components/auth/Activate'
import Error404 from './containers/errors/Error404';

function App() {
  return (

    <Provider store ={store}>
      <Router>
        <Routes>
          {/* Eroor Display */}
          <Route path='*' element={<Error404/>}/>
          <Route exact path='/' element={<Home/>}/>
          {/* Authentication  */}
          <Route path='/signup' element = {<Signup/>}/>
          <Route path='/login' element = {<Login/>}/>
          <Route path='/activate/:uid/:token' element = {<Activate/>}/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
