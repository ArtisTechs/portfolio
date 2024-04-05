import "./App.css";
import { NavBar } from "./components/nav-bar/NavBar";
import HomePage from "./pages/home-page/HomePage";

function App() {
  return (
    <div className="App">
      <div className="NavBar">
        <NavBar />
      </div>
      <div className="MainPage">
        <HomePage />
        <HomePage />
        <HomePage />
      </div>
    </div>
  );
}

export default App;
