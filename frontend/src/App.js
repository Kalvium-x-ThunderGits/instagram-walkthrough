import logo from "./logo.svg";
import React, { createContext, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Profie from "./components/Profie";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Createpost from "./components/Createpost";
import { LoginContext } from "./context/LoginContext";
import Modal from "./components/Modal";
import UserProfie from "./components/UserProfile";
import MyFolliwngPost from "./components/MyFollowingPost";
const API_URL = window.location.origin.replace('5173', '3000') + '/api';


function App() {
  const [userLogin, setUserLogin] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <LoginContext.Provider value={{ setUserLogin, setModalOpen }}>
          <Navbar login={userLogin} />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route exact path="/profile" element={<Profie />}></Route>
            <Route path="/createPost" element={<Createpost />}></Route>
            <Route path="/profile/:userid" element={<UserProfie />}></Route>
            <Route path="/followingpost" element={<MyFolliwngPost />}></Route>
          </Routes>
          <ToastContainer theme="dark" />

          {modalOpen && <Modal setModalOpen={setModalOpen}></Modal>}
        </LoginContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;















// import { useState } from 'react';
// import './App.css';
// import { Button, Input } from '@chakra-ui/react';

// function App() {
//     const [count, setCount] = useState(0);
//     const [isVisible, setIsVisible] = useState(true);
//     const [inputValue, setInputValue] = useState('');

//     const handleInputChange = (event) => {
//         setInputValue(event.target.value);
//     };

//     const applyInputValue = () => {
//         setCount(parseInt(inputValue, 10) || 0); // Only update if it's a valid number
//     };

//     return (
//         <>
//             <div>
//                 <Button onClick={() => setIsVisible(!isVisible)}>
//                     Toggle Counter Visibility
//                 </Button>
//                 <Input
//                     value={inputValue}
//                     onChange={handleInputChange}
//                     placeholder="Set counter value"
//                 />
//                 <Button
//                     onClick={applyInputValue}
//                     className="set-counter-button"
//                 >
//                     Set Counter
//                 </Button>
//                 <Button onClick={() => setCount(0)}>Reset Counter</Button>
//             </div>
//             <h1>Vite + React</h1>
//             <h2>Vite + h2 + React</h2>
//             {isVisible && (
//                 <div className="card">
//                     <Button
//                         onClick={() => setCount((count) => count + 1)}
//                         className="chakra-button"
//                         backgroundColor="rgb(239, 239, 239)"
//                     >
//                         count is {count}
//                     </Button>
//                 </div>
//             )}
//             <p className="read-the-docs">
//                 Click on the Vite and React logos to learn more
//             </p>
//         </>
//     );
// }

// export default App;

















