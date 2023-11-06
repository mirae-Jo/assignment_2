const Done = ({ item, clickDoneBtnHandler, clickRemoveBtnHandler }) => {
  return (
    <div>
      <div className="component-style">
        <div>{item.title}</div>
        <div>{item.todo}</div>

        <button onClick={() => clickRemoveBtnHandler(item.id)}>삭제</button>
        <button onClick={() => clickDoneBtnHandler(item.id)}>완료</button>
      </div>
    </div>
  );
};
export default Done;
