
import s from "./AlarmItem.module.css"

const AlarmItem = (props) => {
  debugger;
  return (  
    <div className= {s.AlarmItem}>
      <div>{props.state.TerritoryName}</div>
      <div>{props.state.StartDate}</div>
    </div>
  );
};

export default AlarmItem;
