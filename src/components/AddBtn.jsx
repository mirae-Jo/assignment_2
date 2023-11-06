const AddBtn = ({ clickAddBtnHandler, children }) => {
  return <button onClick={clickAddBtnHandler}>{children}</button>;
};
export default AddBtn;
