
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AxiosTest from "./components/AxiosTest";
import InputExample from "./components/InputExample";
import StyledComponent from "./components/StyledComponent";
import Welcome from "./components/Welcome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/styleTest" element={<StyledComponent />}></Route>
        <Route path="/inputTest" element={<InputExample />}></Route>
        <Route path="/axiosTest" element={<AxiosTest />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;