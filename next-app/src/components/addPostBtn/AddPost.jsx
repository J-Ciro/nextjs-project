import React, { useState } from "react";
import ModalNewPost from "../modalNewPost/ModalNewPost";

export default function AddPost() {
  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* <button onClick={handleOpen}>+</button> */}
      {open && <ModalNewPost onClose={handleClose} />}
    </>
  );
}
