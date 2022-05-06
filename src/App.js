
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import{BrowserRouter, Routes, Route} from "react-router-dom"
import Button from "react-bootstrap/Button"
import HomeView from "./components/HomeView";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeView/>}/>
            <Route path="/book" element={<div><Button variant={"warning"}>abc</Button></div>}/>

          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
