import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavContact from './components/NavContact';
import Home from './components/Home';
import ListContacts from './components/ListContacts';
import Addcontact from './components/AddContact';
import UpdateContact from './components/UpdateContact';

function App() {
  return (
    <div>
     
      <NavContact/>


      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/ListContacts' element={<ListContacts/>}/>
        <Route path='/AddContact' element={<Addcontact/>} />
        <Route path='/UpdateContact/:id' element={<UpdateContact/>}/>
      </Routes>
    </div>
  );
}

export default App;
