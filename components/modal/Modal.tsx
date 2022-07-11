import { ReactNode, useState, useEffect } from "react";
import { Portal, defaultModalRootId } from "./Portal";
import ModalStyle from "./style";

export interface ModalProps {
  isOpen: boolean;
  title?: string;
  children?: ReactNode;
  handleClose: () => void;
}

// isOpen || isAnimated -> show
export const Modal = ({
  isOpen,
  title,
  children,
  handleClose
}: ModalProps) => {
  const [isAnimated, setIsAnimated] = useState<boolean>(false);

  useEffect(() => {
    if(isOpen || isAnimated) {
      let timeout: NodeJS.Timeout;
      if (isOpen) {
        setIsAnimated(isOpen);
      } else {
        timeout = setTimeout(() => {
          setIsAnimated(isOpen);
        }, 300);
      }
      return () => {
        if (timeout !== undefined) {
          clearTimeout(timeout);
        }
      }
    }
  }, [isOpen]);

  if (!(isOpen || isAnimated)) return null;

  return (
    <Portal rootId={defaultModalRootId}>
      <ModalStyle.Background role="modal" isAnimated={isAnimated} isOpen={isOpen}>
        <ModalStyle.Container>
          {title ? <ModalStyle.Title>{title}</ModalStyle.Title> : null}
          {children}
          <button onClick={handleClose}>
            close
          </button>
        </ModalStyle.Container>
      </ModalStyle.Background>
    </Portal>
  );
}