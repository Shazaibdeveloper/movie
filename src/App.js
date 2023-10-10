import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Movies from "./Pages/Movies";
import Tvseries from "./Pages/Tvseries";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import Details from "./Components/Details";

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tvseries" element={<Tvseries />} />
            <Route path="/movies/:id" element={<Details />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
