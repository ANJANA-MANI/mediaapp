
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';
import Landing from './Pages/Landing';
import Watchhistory from './Pages/Watchhistory';
function App() {
  return (
    <div className="App">
    <Header/>
<Routes>
  <Route path='/' element={<Landing/>}/>
  <Route path='/Home' element={<Home/>}/>
  <Route path='/Watchhistory' element={<Watchhistory/>}/>
</Routes>
    

    <Footer/>
    </div>
  );
}

export default App;
