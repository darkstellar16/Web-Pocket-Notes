import './App.css';
import { Signin } from './pages/auth/Signin';
import { Signup } from './pages/auth/Signup';
import { Preview } from './pages/pocketNotes/Preview';

function App() {
  return (
    <div className="App">
      {/* <Preview /> */}
      <Signup />
      {/* <Signin /> */}
    </div>
  );
}

export default App;
