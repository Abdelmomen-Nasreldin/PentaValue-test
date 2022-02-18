import React from "react";
import classes from "./DataContainer.module.css";
import { useSelector } from "react-redux";
import DataCard from "./DataCard";
const DataContainer = () => {
  const data = useSelector((state) => state.data);
  return (
    <div className={`${classes.data__container}`}>
      {data.map((item) => (
        <DataCard
          key={item.to}
          image={item.image}
          video={item.video}
          from={item.from}
          to={item.to}
        />
      ))}
    </div>
  );
};

export default DataContainer;
