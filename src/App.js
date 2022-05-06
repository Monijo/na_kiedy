
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import{BrowserRouter, Routes, Route} from "react-router-dom"
import Button from "react-bootstrap/Button"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<div>home</div>}/>
            <Route path="/book" element={<div><Button variant={"warning"}>abc</Button></div>}/>

          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
