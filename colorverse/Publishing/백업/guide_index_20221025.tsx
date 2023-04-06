import "./index.scss";
const Guide = () => {
  return (
    //:D 피그마 시안 1 기준으로 작업
    <div id="guideWrap" className="gide">
      <div className="point_color">
        <p className="point_color__title gide__title">Point 컬러</p>
        <ul className="point_color__list">
          <li className="point_color__item color-primary">
            <span className="point_color__name">color-primary</span>
          </li>
          <li className="point_color__item color-background">
            <span className="point_color__name">color-background</span>
          </li>
          <li className="point_color__item color-activate">
            <span className="point_color__name">color-activate</span>
          </li>
          <li className="point_color__item color-disabled">
            <span className="point_color__name">color-disabled</span>
          </li>
          <li className="point_color__item color-gradient_bg">
            <span className="point_color__name">background</span>
          </li>
          <li className="point_color__item color-gr_point">
            <span className="point_color__name">
              포인트 그라데이션 background
            </span>
          </li>
        </ul>
      </div>
      <div className="icon_box">
        <p className="icon__title gide__title">아이콘</p>
        <ul className="icon__list">
          <li>
            <i className="icon icon_item anchor_icon">커서</i>
            <span className="icon_item__name"></span>
          </li>
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Guide;
