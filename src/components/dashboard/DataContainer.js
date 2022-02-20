import React from "react";
import classes from "./DataContainer.module.css";
import { useSelector, useDispatch } from "react-redux";
import { dataActions } from "../../store/data";
import DataCard from "./DataCard";
import { editIdActions } from '../../store/edit-Id-handler';
const DataContainer = ({setModalShow, setAddEditSwitch}) => {
  const data = useSelector((state) => state.data.items);
    const dispatch = useDispatch()

  const DeleteHandler = (id)=>{
    dispatch(dataActions.RemoveFromData(id))
  }
  const editHandler =(id)=>{
    dispatch(editIdActions.idObjHandler(id))
    setModalShow(true)
    setAddEditSwitch('edit')
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
