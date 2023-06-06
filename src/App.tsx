import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar.component";

import HomePage from "./pages/home/home-page.component";
import ShoesPage from "./pages/shoes/shoes-page.component";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shoes/:shoeBrand" element={<ShoesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
