import { useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import { storage } from "../firebase-config";

const useFileUploader = () => {
  const [progress, setProgress] = useState(0);
  const [fileUrl, setFileUrl] = useState();
  const fileUpload = (file) => {
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
          // console.log("File available at", downloadURL);
          setFileUrl(downloadURL);
        });
      }
    );
  };
  return [progress, fileUrl, fileUpload];
};

export default useFileUploader;
