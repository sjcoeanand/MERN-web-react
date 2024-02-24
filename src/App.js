import './App.css';
import {Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { Chats } from './pages/Chats';
function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" Component={Home} exact />
          <Route path="/chats" Component={Chats}  exact/>
        </Routes>
      </div>
  );
}

export default App;
