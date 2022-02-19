import React from "react";
import classes from "./DataContainer.module.css";
import { useSelector, useDispatch } from "react-redux";
import { dataActions } from "../../store/data";
import DataCard from "./DataCard";
import { formObjActions } from './../../store/formObject';
const DataContainer = ({setModalShow, setChangeType}) => {
  const data = useSelector((state) => state.data.items);
    const dispatch = useDispatch()

  const DeleteHandler = (id)=>{
    dispatch(dataActions.RemoveFromData(id))
  }
  const editHandler =(id)=>{
    dispatch(formObjActions.getFormObj(id))
    setModalShow(true)
    setChangeType('edit')
  }
  return (
    <div className={`${classes.data__container}`}>
      {data.map((item) => (
        <DataCard
          key={item.id}
          id={item.id}
          image={item.image}
          video={item.video}
          from={item.from}
          to={item.to}
          onDelete={()=>DeleteHandler(item.id)}
          onEdit={()=>editHandler(item.id)}
        />
      ))}
    </div>
  );
};

export default DataContainer;
