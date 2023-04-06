import "./style.scss";

const Publishing = () => {
  return (
    <>
      {/* 빌더 이동 - 모달 */}
      {/* D: modal 활성화 시 addClass on */}
      <div className="builder-move_modal modal">
        <div className="modal__wrap">
          <div className="modal__contents">
            <div className="modal-body">
              <b>저장하고 새로운 빌더로 이동할까요?</b>
              <p>
                빌더에 <b>저장하지 않은 내역</b>이 있습니다.
              </p>
              <div className="madal-body__notice">
                <span className="notice--text">
                  구매하지 않은 아이템은 전체 회수됩니다.
                </span>
              </div>
            </div>
            <div className="modal__buttons">
              <button className="modal__button modal__button--cancle">
                취소
              </button>
              <button className="modal__button">저장 후 이동</button>
            </div>
          </div>
        </div>
        <div className="filter"></div>
      </div>
      {/*  빌더 이동 - 모달 */}
    </>
  );
};

export default Publishing;
