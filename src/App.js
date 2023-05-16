import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Todo from "./Components/Todo";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { useEffect, useState } from 'react';
import { auth } from './Firebase';
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user){
        setUsers(user)
      } else {
        setUsers(null)
      }
    })

  },[])
  return (
    <BrowserRouter>
      <Navbar user={users} />
      <Routes>
        <Route path="/todo" element={<Todo user={users} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
