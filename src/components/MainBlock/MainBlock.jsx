import s from "./MainBlock.module.css";
import RestInfo from "./RestInfo/RestInfo.jsx";
import { Route, Routes } from "react-router-dom";
import AlarmList from "./AlarmList/AlarmList";
import CommentsContainer from "./Comments/CommentsContainer";

const MainBlock = (props) => {
  let RestArr = props.state.RestArr;
  return (
    <div className={s.mainBlock}>
      <Routes>
        {RestArr.map((obj) => (
          <Route path={"/" + obj.RestID} element={<RestInfo RestObj={obj} />} />
        ))}
        <Route path="/comments" element = {<CommentsContainer store = {props.store}/>}/>
        <Route path="/list-of-alarm" element= {<AlarmList state = {props.state.AlarmObj}/>} />
      </Routes>
    </div>
  );
};

export default MainBlock;
