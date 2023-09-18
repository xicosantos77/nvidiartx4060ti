import logo from './logo.svg';
import './App.css';

//routes
import {BrowserRouter, Routes, Route} from "react-router-dom";

//components
import Header from './Components/Header/Header';

//pages
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element= {<Home></Home>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
