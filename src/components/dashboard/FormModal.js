import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import classes from "./FormModal.module.css";
import { dataActions } from "./../../store/data";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import { storage } from "../../firebase-config";


const FormModal = ({ addEditSwitch }) => {
  const dispatch = useDispatch();
  const objEditId = useSelector((state) => state.EditingIdObjHandler.id);
  const [progress, setProgress] = useState(0);
  const [imgUrl , setImgUrl] = useState()
  const { register, handleSubmit } = useForm();
  
  ////////////////////////////
  const uploadFiles = (file) => {
    if (!file) return;
    const sotrageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setImgUrl(downloadURL)
        });
      }
    );
  };
  /////////////////////////////////
  const fileHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
  };
  ///////////////////////////////
  const onSubmit = (data) => {
    let newObj = {
      id: 0,
      image: imgUrl ,
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
