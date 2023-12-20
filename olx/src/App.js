import React,{useEffect,useContext} from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Create from './Pages/Create'
import ViewPost from './Pages/ViewPost'
import { FirebaseContext, authContext } from "./store/Context";
import Post from "./store/PostContext";

function App() {
  const {setUser} = useContext(authContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(()=> {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    })
  })
  return (
    <div>
      <Post>

      <Router>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/viewpost" element={<ViewPost/>}/>
        </Routes>
      </Router>
      </Post>
    </div>
  );
}

export default App;
