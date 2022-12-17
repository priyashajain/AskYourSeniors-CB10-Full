/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Details from "./components/Details";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import AskYourDoubts from "./components/AskYourDoubts";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <BrowserRouter>

        {/* <Nav /> */}
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          {/* <Route path="/details" element={<Details />} /> */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/ask-your-doubts" element={<AskYourDoubts />} />

          {/* <Route path="/signup" element={<SignUp />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
