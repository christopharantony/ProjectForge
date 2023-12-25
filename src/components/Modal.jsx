import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

const Modal = forwardRef(function Modal({ children, action, ...props }, ref) {
  const dialog = useRef(null);

  useImperativeHandle(ref, () => ({
    open: () => {
      dialog.current.showModal();
    },
    close: () => {
      dialog.current.close();
    },
  }));
  return createPortal(
    <dialog
      ref={dialog}
      {...props}
      className="rounded-md p-4 shadow-md backdrop:bg-stone-900/90"
    >
      {children}
      <form method="dialog" className="mt-4 flex justify-end">
        {action}
      </form>
    </dialog>,
    document.getElementById("modal-root"),
  );
});

export default Modal;

Modal.propTypes = {
  children: PropTypes.node,
  action: PropTypes.node,
};
