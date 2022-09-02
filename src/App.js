import Sidebar from './Sidebar'
import './App.css';
import Chat from './Chat';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import Login from './Login';

function App() {
  const [user,setUser] = useState(null);
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
