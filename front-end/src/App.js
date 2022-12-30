/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateComponent from './components/PrivateComponent';
import PrivateComponentForAdmin from './components/PrivateComponentForAdmin';
import Home from "./components/Home";
import HomeCorrect from './components/HomeCorrect';
import Details from "./components/Details";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import AskYourDoubts from "./components/AskYourDoubts";
import Leaderboard from "./components/Leaderboard";
import Admin from './components/Admin';
import PrivateComponentForOthers from './components/PrivateComponentForOthers';

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

        
        <Route element={<PrivateComponentForOthers />}>
          <Route path="/" element={<HomeCorrect />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>

          <Route element={<PrivateComponent />}>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/ask-your-doubts" element={<AskYourDoubts />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Route>

          

          <Route element={<PrivateComponentForAdmin />}>
            <Route path="/admin" element={<Admin />} />
          </Route>

        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
