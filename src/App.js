import Sidebar from './Sidebar'
import './App.css';
import Chat from './Chat';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ):(
        <div className="app__body">
   
     <Router>
      
      <Sidebar />
       <Routes>
      
          {/* <Route exact path="/" element={<Chat />}></Route> */}
          <Route path="/rooms/:roomId" element={<Chat />}></Route>
        </Routes>
      
    </Router>
      

     </div>

      )}
     
    </div>
  );
}

export default App;
