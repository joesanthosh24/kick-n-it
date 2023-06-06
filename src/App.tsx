import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Navbar from "./components/navbar/navbar.component";
import HomePage from "./pages/home/home-page.component";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  }
])

function App() {
  return (
    <div className="app">
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
