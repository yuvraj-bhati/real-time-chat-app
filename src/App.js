import Sidebar from './Sidebar'
import './App.css';
import Chat from './Chat';

function App() {
  return (
    <div className="App">
     
     <div className="app__body">
      <Sidebar />
      <Chat />

     </div>
    </div>
  );
}

export default App;
