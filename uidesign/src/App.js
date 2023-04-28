import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Postajob } from './components/Postajob';
import { Employersignup } from './components/Employersignup';
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
import AlumniRegister from './components/AlumniRegister';
>>>>>>> c219df5 (alumni)
>>>>>>> 2b956c4 (first commit)
>>>>>>> ea8c2cc (first)

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
       <Routes>
        <Route path="/home" exact element={ <Home/> } />
        <Route path="/postnewjob" exact element={ <Postajob/> } />
        <Route path="/employsignup" exact element={ <Employersignup/> } />
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
        <Route path='/alumni' exact element={ <AlumniRegister/> } />
>>>>>>> c219df5 (alumni)
>>>>>>> 2b956c4 (first commit)
>>>>>>> ea8c2cc (first)
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
