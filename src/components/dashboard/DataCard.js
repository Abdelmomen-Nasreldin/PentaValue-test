import React from "react";
import classes from "./DataCard.module.css";
const DataCard = (props) => {
  
  return (
    <div className={`${classes.data__card}`}>
      <div className={`${classes.card__image}`}>
        {props.image && <img src={props.image} alt="CardImage" />}
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
      <div className={`d-flex justify-content-around flex-wrap ${classes.btn__div}`} >
        <button type="button" className="btn btn-danger" onClick={props.onDelete}>
          Delete
        </button>
        <button type="button" className="btn btn-warning" onClick={props.onEdit}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default DataCard;
