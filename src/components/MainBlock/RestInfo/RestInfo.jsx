import s from "./RestInfo.module.css";
import Map from "./Map/Map"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
const RestInfo = (props) => {
    return(
        <div className={s.mainDiv}>

          {props.RestObj.RestName}    
          <Map />   
        </div>
    );
}

export default RestInfo;