import './App.css';
import './Projects.css';
import { Routes, Route, Link} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './About';

function App() {
  return (
   <div>
   <Nav/>

    <Routes>
<Route path={"/"} element={<Home />}/>
<Route path={"/about"} element={<About/>}/>
<Route path={"/project"} element={<Projects/>}/>
<Route path={"/contact"} element={<div>Contact</div>}/>



    </Routes>
   </div>
  );
}

export default App;
