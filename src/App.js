import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Movies from "./Pages/Movies";
import Tvseries from "./Pages/Tvseries";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import Detail from "./Pages/Detail";

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
            <Route path="/movies/:id" element={<Detail type="movie" />} />
            <Route path="/tvseries/:id" element={<Detail type="tv" />} />{" "}
            {/* Add route for TV series */}
            <Route path="*" element={<Error />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
