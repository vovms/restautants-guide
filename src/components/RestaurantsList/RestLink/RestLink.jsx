import s from "./RestLink.module.css";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";

const RestLink = (props) => {
  return (
    <div className={s.RestLink}>
      <NavLink to= {"/" + props.RestObj.RestID} className ={navData => navData.isActive ? s.activeNavLink : s.NavLink} >{props.RestObj.RestName} </NavLink >
    </div>
  );
};

export default RestLink;