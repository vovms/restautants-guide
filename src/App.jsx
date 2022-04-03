import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import MainBlock from "./components/MainBlock/MainBlock";
import Footer from "./components/Footer/Footer";
import RestaurantsList from "./components/RestaurantsList/RestaurantsList";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <RestaurantsList RestArr = {props.state.RestArr}/>
      <MainBlock store = {props.store} state = {props.state} dispatch = {props.dispatch} />
      <Footer />
    </div>
  );
}

export default App;
