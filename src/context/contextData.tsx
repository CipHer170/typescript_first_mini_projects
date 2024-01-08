import { createContext, useState } from "react";

interface IModalContext {
  modal: boolean;
  open: () => void;
  close: () => void;
}

export const ContextData = createContext<IModalContext>({
  modal: false,
  open: () => {},
  close: () => {},
});

export const ModalState = ({ children }: { children: React.ReactNode }) => {
  const [modal, setModal] = useState(false);
  const open = () => setModal(true);
  const close = () => setModal(false);

  return (
    <ContextData.Provider value={{ modal, open, close }}>
      {children}
    </ContextData.Provider>
  );
};
