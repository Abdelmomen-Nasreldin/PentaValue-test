import React from "react";
import { Button, Modal } from "react-bootstrap";
import FormModal from "./FormModal";

const CardModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        {props.changeType === "add" && (
          <Modal.Title id="contained-modal-title-vcenter">ADD CARD</Modal.Title>
        )}
        {props.changeType === "edit" && (
          <Modal.Title id="contained-modal-title-vcenter">EDIT CARD</Modal.Title>
        )}
      </Modal.Header>
      <Modal.Body>
        <FormModal changeType={props.changeType} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CardModal;
