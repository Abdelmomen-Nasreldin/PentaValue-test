import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import classes from "./FormModal.module.css";
import { dataActions } from "./../../store/data";
const FormModal = ({ changeType }) => {
  const objEditId = useSelector((state) => state.formObj.id);

  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    let newObj = {
      id: 0,
      image: (data.image[0])? (data.image[0].name): "https://www.bestmobile.pk/mobile-wallpapers/img_320x480/1528970958_320x480_pexels-photo-1144699.jpeg"
      ,
      video: "",
      from: data.from,
      to: data.to,
    };

    if (changeType === "add") {
      dispatch(dataActions.addToData(newObj));
    } 
    if (changeType === "edit") {
      let newUpdate = {};
      // if (newObj.image) {
      //   newUpdate = { ...newUpdate, image: newObj.image };
      // }
      if (newObj.video) {
        newUpdate = { ...newUpdate, video: newObj.video };
      }
      if (newObj.from) {
        newUpdate = { ...newUpdate, from: newObj.from };
      }
      if (newObj.to) {
        newUpdate = { ...newUpdate, to: newObj.to };
      }
      console.log(newUpdate);
      dispatch(dataActions.editonData({ id: objEditId, newUpdate }));
    }
  };
  return (
    <form
      className={`${classes.modal__form}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <input type="file" {...register("image")} defaultValue=""/>
      <input type="datetime-local" {...register("from")} />
      <input type="datetime-local" {...register("to")} />
      <input type="submit" />
    </form>
  );
};

export default FormModal;
