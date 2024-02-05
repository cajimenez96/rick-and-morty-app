import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './containers/Home/Home';

const App = () => {

  return (
    <BrowserRouter>
      <div className="w-full">
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
