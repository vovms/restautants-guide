import s from "./RestaurantsList.module.css";
import RestourankLink from "./RestLink/RestLink";

const RestaurantsList = (props) => {
  let RestArr = props.RestArr;

  return (
    <div className={s.restaurantsList}>
      {RestArr.map((RestObj) => (
        <RestourankLink RestObj={RestObj} />
      ))}

      <RestourankLink RestObj={{ RestName: "Comments", RestID: "comments" }} />
      <RestourankLink RestObj={{ RestName: "List of alarms", RestID: "list-of-alarm" }} /> 
    </div>
  );
};

export default RestaurantsList;
