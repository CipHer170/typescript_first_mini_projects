function Modal() {
  return (
    <>
      <div className="fixed bg-black/50 bottom-0 left-0 right-0 top-0"></div>
      <div className="w-[500px] p-5 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2">
        <h1>Modal</h1>
      </div>
    </>
  );
}

export default Modal;
