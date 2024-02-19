import './App.css';
import { React } from 'react';
import { Signin } from './pages/auth/Signin';
import { Signup } from './pages/auth/Signup';
import { Preview } from './pages/pocketNotes/Preview';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from "react-hot-toast";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Signup />} />
          <Route exact path='/login' element={<Signin />} />
          <Route exact path='/preview' element={<Preview />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
export default App;