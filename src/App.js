import './App.css';
import {Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { Chats } from './pages/Chats';
import { Container } from '@chakra-ui/react'
function App() {
  return (
      <div className="App">
        <Container>
        <Routes>
          <Route path="/" Component={Home} exact />
          <Route path="/chats" Component={Chats}  exact/>
        </Routes>
        </Container>
      </div>
  );
}

export default App;
