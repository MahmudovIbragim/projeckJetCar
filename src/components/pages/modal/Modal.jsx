import { useEffect, useState } from "react";
import scss from "./Modal.module.scss";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = isOpen && (
    <div className={scss.modal}>
      <div className={scss.modalContent}>{children}</div>
    </div>
  );

  if (!isBrowser) return null;

  const portalRoot = document.getElementById("portal_root");

  return portalRoot ? ReactDOM.createPortal(modalContent, portalRoot) : null;
};

export default Modal;
