import { createContext, useState } from "react";

// adding context actions
interface IModalContext {
  modal: boolean;
  open: () => void;
  close: () => void;
}
// creating context, with обозначениями каждого действия,
export const ContextData = createContext<IModalContext>({
  modal: false,
  // то что снизу обозначает, ()=setModal(true), поэтому они обозначаются функциями
  open: () => {},
  // ()=setModal(false)
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
