import "./style.scss";

const Publishing = () => {
  return (
    <>
      <div id="wrap">
        <div id="top-section" className="header-tool">
          <div className="header-tool__container">
            <div className="header-tool__contant header-tool__contant--left">
              <button className="header-tool__btn icon_config">Config</button>
              {/* D: 카운트 sapn.count 표시 2022.10.25 시안 1 기준 작업 */}
              <button className="header-tool__btn icon_cart">
                카트
                <span className="count">2</span>
              </button>
              {/* D: 셀렉트 박스 addClass on 활성화 표시 2022.10.25 시안 1 기준 작업 */}
              <div className="header-tool__select on">
                <button className="header-tool__select-btn">
                  즐겨찾기 메뉴
                </button>
                {/* <ul className="header-tool__select-list">
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul> */}
              </div>
              <div className="header-tool__title">
                안녕하세요.~컬러버스 랜드빌더 제목영역입니다.
              </div>
            </div>
            <div className="header-tool__contant header-tool__contant--center">
              {/* D: 모드 버튼 addClass on 활성화 표시 2022.10.25 시안 1 기준 작업 */}
              <button className="header-tool__btn--mode on">배치모드</button>
              <button className="header-tool__btn--mode">공사모드</button>
            </div>
            <div className="header-tool__contant header-tool__contant--right">
              {/* toggle addClass on/off로 구분 2022.10.25 시안 1 기준 작업 */}
              <div className="header-tool__toggle">
                <span>Snap On</span>
                <button className="on">toggle</button>
              </div>
              <div className="header-tool__toggle">
                <span>Grid Off</span>
                <button className="off">toggle</button>
              </div>
              {/* D: 셀렉트 박스 addClass on 활성화 표시 2022.10.25 시안 1 기준 작업 */}
              <div className="header-tool__select header-tool__select--sm on">
                <button className="header-tool__select-btn icon_land"></button>
                <div className="header-tool__select-list">
                  <p className="header-tool_select-labal">Land</p>
                  <ul>
                    <li className="on">
                      <span>New</span>
                      <span>Ctrl+N</span>
                    </li>
                    <li>
                      <span>Load</span>
                      <span>Ctrl+L</span>
                    </li>
                    <li>
                      <span>Save</span>
                      <span>Ctrl+S</span>
                    </li>
                    <li>
                      <span>Save AS...</span>
                      <span>Ctrl+Shift+S</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="header-tool__select header-tool__select--sm">
                <button className="header-tool__select-btn icon_land"></button>
                {/* <ul className="header-tool__select-list">
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul> */}
              </div>
              <button className="header-tool__btn header-tool__btn--sm icon_setting">
                설정
              </button>
              <button className="header-tool__btn header-tool__btn--sm icon_down">
                다운
              </button>
            </div>
          </div>
        </div>

        {/* 우측 aside menu */}
        <div id="left-section" className="aside-tool">
          <div className="aside-tool_containal">
            <h1 className="aside-tool__logo">colorverse</h1>
            <div className="aside-tool__list">
              {/* D: 버튼 addClass on 활성화 표시 2022.10.25 시안 1 기준 작업 */}
              <button className="aside-tool__item on">
                <i className="icon_arrow"></i>
              </button>
              <button className="aside-tool__item">
                <i className="icon_palm"></i>
              </button>
              <button className="aside-tool__item">
                <i className="icon_move"></i>
              </button>
              <button className="aside-tool__item">
                <i className="icon_reset"></i>
              </button>
              <button className="aside-tool__item">
                <i className="icon_scale"></i>
              </button>
              <button className="aside-tool__item">
                <i className="icon_location"></i>
              </button>
            </div>
            <div className="aside-tool__pagenation">
              <button className="aside-tool__pagenation--prev"></button>
              <button className="aside-tool__pagenation--next"></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Publishing;
