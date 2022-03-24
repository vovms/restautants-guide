import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import MainBlock from "./components/MainBlock";
import Footer from "./components/Footer";
import RestaurantsList from "./components/RestaurantsList";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <RestaurantsList />
      <MainBlock />
      <Footer />
    </div>
  );
}

export default App;
