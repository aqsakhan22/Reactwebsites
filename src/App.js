import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Navbar from './components/inc/Navbar';
import About from './components/pages/About';
import Contactus from './components/pages/Contactus';
import Home from './components/pages/Home';

import './App.css';
import Footer from './components/pages/Footer';

function App() {
  return (
  <>
<Router>
<Navbar/>

{/* new version in old version we use switch not routes*/}
<Routes>
 <Route path="/" exact element={<Home/>}/>
 <Route path="/contact" exact element={<Contactus/>}/>
 <Route path="/about"exact element={<About/>}/>



</Routes>
<Footer/>




</Router>

  </>
  );
}

export default App;
