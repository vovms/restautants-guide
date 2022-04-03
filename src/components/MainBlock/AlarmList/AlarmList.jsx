import AlarmItem from "./AlarmItem/AlarmItem";

const AlarmList = (props) => {

  let ListOfAlerts = props.state.ListOfAlerts;

  return (
    <ol>
      {ListOfAlerts.map(
        (el) => <li> {<AlarmItem state = {el}/>} </li> 
      )}
    </ol>
  );
};

export default AlarmList;
