import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './componet/Home';
import Servicesprovide from './componet/Servicesprovide';
import Client from './componet/Client';
import Blogs from './componet/Blogs';
import ClientReView from './componet/ClientReView';
import Lastblog from './componet/Lastblog';
import ContactUs from './componet/ContactUs';
import Last from './componet/Last';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/service' element={<Servicesprovide/>}/>
        <Route path='/client' element={<Client/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/clientReview' element={<ClientReView/>}/>
        <Route path='/Lastblog' element={<Lastblog/>}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>
        <Route path='/last' element={<Last/>}/>
      </Routes>
    </Router>
  );
}

export default App;



{/* <ClientReView/>
<Lastblog/>
<ContactUs/>
<Last/> */}