import React from "react";
import classes from "./DataCard.module.css";
const DataCard = (props) => {
  return (
    <div className={`${classes.data__card}`}>
      <div className={`${classes.card__image}`}>
        {props.image && <img src={props.image} alt="d" />}
        {props.video && (
          <video controls>
            <source src={props.video} type="video/mp4" />
            <source src={props.video} type="video/ogg" />
            No video support.
          </video>
        )}
      </div>
      <div>
        {" "}
        <p>from {props.from}</p>
        <p>to {props.to}</p>
      </div>
      <div className={`d-flex justify-content-around flex-wrap ${classes.btn__div}`}>
        <button type="button" class="btn btn-danger">
          Delete
        </button>
        <button type="button" class="btn btn-warning">
          Edit
        </button>
      </div>
    </div>
  );
};

export default DataCard;
