import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

export default function PrimaryModal(props) {
  const { open, onCancel, Modalbody, styles } = props;

  return (
    <>
      <Modal
        title="Basic Modal"
        show={open}
        onHide={onCancel}
        style={styles}
        backdrop={true}
        keyboard={true}
        size="xl"
        centered
      >
        {Modalbody}
      </Modal>
    </>
  );
}
