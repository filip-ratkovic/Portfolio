import './App.css';
import { Routes, Route, Link} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';

function App() {
  return (
   <div>
   <Nav/>

    <Routes>
<Route path={"/"} element={<Home />}/>
<Route path={"/about"} element={<div>about</div>}/>
<Route path={"/contact"} element={<div>contact</div>}/>
<Route path={"/project"} element={<div>project</div>}/>



    </Routes>
   </div>
  );
}

export default App;
