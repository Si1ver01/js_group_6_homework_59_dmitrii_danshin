import React from "react";
import classes from "./Main.module.css";
import MainItem from "./MainItem/MainItem";

const Main = ({ list, handlerInput  , handlerButton}) => {
  return (
    <div className={classes.Main}>
      <p>To watch list:</p>
      {list.map((elem, index) => (
        <MainItem
          text={elem}
          key={index}
          handlerInput={(event) => handlerInput(event.target.value, index)}
          handlerButton={() => handlerButton(index)}
        />
      ))}
    </div>
  );
};

export default Main;
