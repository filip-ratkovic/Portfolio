import './App.css';
import { Routes, Route, Link} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Projects from './components/Projects';

function App() {
  return (
   <div>
   <Nav/>

    <Routes>
<Route path={"/"} element={<Home />}/>
<Route path={"/about"} element={<div>About me</div>}/>
<Route path={"/project"} element={<Projects/>}/>
<Route path={"/contact"} element={<div>Contact</div>}/>



    </Routes>
   </div>
  );
}

export default App;
