
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/home';
import { Page1 } from './Pages/page1';
import { Page2 } from './Pages/page2';
import { Page3 } from './Pages/page3';





function App() {
  return (

    <Router>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/page1' element={ <Page1 /> }/>
        <Route path='/page2' element={ <Page2 /> } />
        <Route path='/page3' element={ <Page3 /> } />
      
      </Routes>
    </Router>
  )

}
export default App
