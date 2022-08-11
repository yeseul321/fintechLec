import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import NewsPage from "./pages/NewsPage";
import AuthResultPage from "./pages/AuthResultPage";
import MainPage from "./pages/MainPage";
import BalancePage from "./pages/BalancePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />}></Route>
        <Route path="/news" element={<NewsPage />}></Route>
        <Route path="/authResult" element={<AuthResultPage />}></Route>
        <Route path="/main" element={<MainPage />}></Route>
        <Route path="/balance" element={<BalancePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;