import "./App.css";
import { NavBar } from "./components/nav-bar/NavBar";
import HomePage from "./pages/home-page/HomePage";
import BackgroundPage from "./pages/background-page/BackgroundPage";

function App() {
  return (
    <div className="App">
      <div className="NavBar">
        <NavBar />
      </div>
      <div className="Background">
        <BackgroundPage />
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
