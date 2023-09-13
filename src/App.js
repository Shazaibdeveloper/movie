import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Movies from "./Pages/Movies";
import Tvseries from "./Pages/Tvseries";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tvseries" element={<Tvseries />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
