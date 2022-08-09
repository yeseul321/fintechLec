import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";



function App() {
  return (
    <div className="App">
      <h1>안녕하세요</h1>
      <Welcome username={"정예슬"} age={33}></Welcome>
      <Welcome username={"홍길동"} age={33}></Welcome>
      <Welcome username={"둘리"} age={33}></Welcome>
      <Welcome username={"도우너"} age={33}></Welcome>
    </div>
  );
}

export default App;
