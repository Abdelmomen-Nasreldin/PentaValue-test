import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import classes from "./FormModal.module.css";
import { dataActions } from "./../../store/data";
import useFileUploader from './../../hooks/file-upload';


const FormModal = ({ addEditSwitch }) => {
  const [progress, fileUrl, fileUpload] = useFileUploader()
  const dispatch = useDispatch();
  const objEditId = useSelector((state) => state.EditingIdObjHandler.id);
 
  const { register, handleSubmit } = useForm();
  
  const fileHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    fileUpload(file);
  };
  ///////////////////////////////
  const onSubmit = (data) => {
    let newObj = {
      id: 0,
      image: fileUrl ,
      video: "",
      from: data.from,
      to: data.to,
    };

    if (addEditSwitch === "add") {
      dispatch(dataActions.addToData(newObj));
    }
    if (addEditSwitch === "edit") {
      let newUpdate = {};
      if (newObj.image) {
        newUpdate = { ...newUpdate, image: newObj.image };
      }
      if (newObj.video) {
        newUpdate = { ...newUpdate, video: newObj.video };
      }
      if (newObj.from) {
        newUpdate = { ...newUpdate, from: newObj.from };
      }
      if (newObj.to) {
        newUpdate = { ...newUpdate, to: newObj.to };
      }
      dispatch(dataActions.editonData({ id: objEditId, newUpdate }));
    }
  };
  return (
    <>
      <form onSubmit={fileHandler}>
        <input type="file" className="input" />
        <button type="submit">Upload</button>
      </form>
      <h6>Uploading done {progress}%</h6>
      <hr />
      <form
        className={`${classes.modal__form}`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <input type="datetime-local" {...register("from")} />
        <input type="datetime-local" {...register("to")} />
        <input type="submit" />
      </form>
    </>
  );
};

export default FormModal;
