import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { Scrollbar } from "swiper";
import "./style.scss";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/css/scrollbar";
const Publishing = () => {
  return (
    <>
      <div className="land-builder">
        <div className="builder-header">
          <div className="header-util">
            <div className="header-util__contents--left">
              <div className="header-util__logo">
                <div className="logo">
                  <h1 className="blind">colorverse</h1>
                </div>
              </div>
              <div className="header-util__title">
                안녕하세요.~컬러버스 랜드빌더 제목영역입니다.
              </div>
            </div>
            <div className="header-util__contents--center">
              <div className="header-util__select">
                {/* D: select 활성화 시 add class on  */}
                <div className="select">
                  <button className="select__button">
                    {/* D: select__text addClass 랜드빌더 - land/ 아이템 - itme / 에셋 - assets  */}
                    <span className="select__text assets">랜드 빌더</span>
                  </button>
                  <div className="select-layer">
                    <ul className="select-layer__list">
                      <li className="select-layer__item">
                        <i className="icon icon_land"></i>
                        <span>랜드 빌더</span>
                      </li>
                      <li className="select-layer__item">
                        <i className="icon icon_item"></i>
                        <span>아이템 빌더</span>
                      </li>
                      <li className="select-layer__item">
                        <i className="icon icon_assets"></i>
                        <span>에셋 빌더</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-util__contents--right">
              <button className="button--link">단축키</button>
              <button className="button--link">이용가이드</button>
              {/* 2022.11.01 button--setting 추가 */}
              <button className="button--sm button--setting">
                <i className="icon icon_setting">설정</i>
              </button>
            </div>
          </div>

          <div className="header-tool">
            <div className="header-tool__contents--left">
              <div className="header-tool__menu-select">
                {/* D: select-layer 활성화 시 select addClass on */}
                <div className="select">
                  {/* 2022.11.01 select__button 수정 */}
                  <button className="select__button"></button>
                  {/* 2022.11.01 select__button 추가 */}
                  <div className="select-layer">
                    {/* 2022.11.15 select-layer__labal 수정 */}
                    <p className="select-layer__labal">
                      <span className="blind">colorvers</span>
                      빌더
                    </p>
                    {/* //2022.11.15 select-layer__labal 수정 */}
                    <ul className="select-layer__list">
                      {/* <li className="select-layer__item">
                        <span>랜드 정보</span>
                        <span>Ctrl+I</span>
                      </li> */}
                      <li className="select-layer__item">
                        <span>새로 만들기</span>
                        <span>Ctrl+N</span>
                      </li>
                      <li className="select-layer__item">
                        <span>랜드 불러오기</span>
                        <span>Ctrl+O</span>
                      </li>
                      <li className="select-layer__item">
                        <span>저장</span>
                        <span>Ctrl+S</span>
                      </li>
                      <li className="select-layer__item">
                        <span>새 랜드로 저장</span>
                        <span>Ctrl+Shift+S</span>
                      </li>
                      <li className="select-layer__item">
                        <span>게시</span>
                        <span>Alt+R</span>
                      </li>
                      <li className="select-layer__item">
                        <span>랜드 이력</span>
                        <span>Alt+H</span>
                      </li>
                      <li className="select-layer__item">
                        <span>삭제</span>
                        <span>Alt+C</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* D: 해당 button--link 클릭시 addClass on */}
              <button className="button--link on">배치모드</button>
              <button className="button--link">공사모드</button>
              {/* D: button--play 활성화 시 addClass on */}
              <button className="button--lg button--play">
                <span className="button__text">플레이</span>
                <i className="icon icon_play"></i>
              </button>
              {/* 2022.11.01 pagenation -> pagination class 수정 */}
              <div className="header-tool__pagination">
                <div className="pagination">
                  <button className="pagination__button pagination__button--prev button--lg">
                    <i className="icon icon_btn-arrow">이전</i>
                  </button>
                  <button className="pagination__button pagination__button--next button--lg">
                    <i className="icon icon_btn-arrow">다음</i>
                  </button>
                </div>
              </div>
              {/* //2022.11.01 pagenation -> pagination class 수정 */}

              {/* 2022.11.01 header-tool__list 구조 수정 */}
              <div className="header-tool__list">
                {/* D: 해당 header-tool__item 클릭시 addClass on */}
                <button className="header-tool__item header-tool__item--arrow on">
                  <span className="blind">화살표</span>
                </button>
                <button className="header-tool__item header-tool__item--palm">
                  <span className="blind">손바닥</span>
                </button>
                <button className="header-tool__item header-tool__item--rotation">
                  <span className="blind">초기화</span>
                </button>
                <button className="header-tool__item header-tool__item--scale">
                  <span className="blind">스케일</span>
                </button>
                {/* 2022.11.03 추가 */}
                <button className="header-tool__item header-tool__item--moving">
                  <span className="blind">무빙</span>
                </button>
                <button className="header-tool__item header-tool__item--location">
                  <span className="blind">위치</span>
                </button>
                {/* //2022.11.03 추가 */}

                {/* 공사 모드 아이콘 */}
                <button className="header-tool__item header-tool__item--palm">
                  <span className="blind">손바닥</span>
                </button>
                <button className="header-tool__item header-tool__item--stack">
                  <span className="blind">큐브쌓기</span>
                </button>
                <button className="header-tool__item header-tool__item--erase">
                  <span className="blind">큐브지우기</span>
                </button>
                <button className="header-tool__item header-tool__item--fill">
                  <span className="blind">물채우기</span>
                </button>
                <button className="header-tool__item header-tool__item--lay">
                  <span className="blind">큐브깔다</span>
                </button>
                {/* 공사 모드 아이콘 */}
              </div>
              {/* //2022.11.01 header-tool__list 구조 수정 */}
            </div>
            <div className="header-tool__contents--right">
              <div className="header-tool__toggle">
                <div className="toggle">
                  <span className="toggle__label">Snap On</span>
                  {/* D: toggle 활성화 시 toggle__button addClass on */}
                  <button className="toggle__button on"></button>
                </div>
                <div className="toggle">
                  <span className="toggle__label">Grid Off</span>
                  {/* D: toggle 활성화 시 toggle__button addClass on */}
                  <button className="toggle__button"></button>
                </div>
              </div>
              <button className="button--save button--lg">
                <span className="button__text">저장</span>
                <i className="icon icon_save"></i>
              </button>
              <button className="button--posting button--lg">
                <span className="button__text">게시</span>
                <i className="icon icon_posting"></i>
              </button>
              {/* 2022.11.22 수정 */}
              <div className="cart-tooltip">
                {/* D: button--cart 활성화 시 addClass on */}
                <button className="cart-tooltip__button button--lg on">
                  <i className="icon icon_cart">장바구니</i>
                </button>
                <div className="cart-tooltip__content">
                  <span>
                    비구매&#32;<span>99+</span>
                  </span>
                </div>
              </div>
              {/* //2022.11.22 수정 */}
            </div>
          </div>
        </div>

        <div className="builder-contents">
          <div className="tool-box">
            <div className="side-tool">
              {/* D: layer 활성화 시 item-tree에 addClass on */}
              {/* 아이템 트리 시작 */}
              {/* 2022.11.01 aside-tree -> item-tree 수정 */}
              <div className="item-tree aside__layout on">
                <button className="aside__button">
                  <i className="icon icon_layer-btn"></i>
                </button>
                <div className="aside__layer">
                  {/* 2022.11.01 닫힘 버튼 추가 */}
                  <button className="aside__button--close">
                    <i className="icon icon_layer-btn--close"></i>
                  </button>
                  {/* 2022.11.01 닫힘 버튼 추가 */}
                  <div className="aside-head">
                    <div className="aside-head__title">아이템트리</div>
                    <div className="aside-head__check-box">
                      <div className="check-box">
                        <input type="checkbox" name="check01" id="lock" />
                        <label htmlFor="lock">Lock</label>
                      </div>
                      <div className="check-box">
                        <input type="checkbox" name="check02" id="hide" />
                        <label htmlFor="hide">Hide</label>
                      </div>
                    </div>
                  </div>
                  <div className="aside__search">
                    <div className="search-box">
                      <input
                        className="search-box__input"
                        type="text"
                        placeholder="원하시는 메뉴를 찾아보세요"
                      />
                      {/* 2022.11.28 수정 */}
                      <button className="search-box__button--delete"></button>
                      {/* 2022.11.28 수정 */}
                      <button className="button--md search-box__button">
                        <i className="icon icon_search-white"></i>
                      </button>
                    </div>
                  </div>
                  <div className="aside-contents">
                    <div>
                      <ul className="tree__list ">
                        <li className="tree__list--depth01 on">
                          <div className="tree-list__item tree-list__item--top">
                            <span>랜드 아이템</span>
                            <button>
                              <i className="icon icon_select-arrow"></i>
                            </button>
                          </div>
                          {/* 계층 간 아이템 이동 */}
                          <div className="treeDivider"></div>
                          {/* //계층 간 아이템 이동 */}

                          <div className="tree-list__wrap on">
                            {/* 여기서 부터 treeNode */}
                            <div className="tree__list">
                              <div className="tree-list__item text_active">
                                {/* tool-layer__item-button 메뉴 활성화 active /메뉴 없을때 nolist  */}
                                <button className="tree-list__item-button active"></button>
                                <div className="tree-list__item-text">
                                  일이삼사오육칠팔구십 일이삼사오육칠팔구십
                                  일이삼사오육칠팔구십 일이삼사오육칠팔구십
                                </div>
                                <div className="tree-list__item-buttons">
                                  {/* D: item-button 활성화 시 addClass on  */}
                                  <button className="item-button item-button__view on"></button>
                                  <button className="item-button item-button__lock on"></button>
                                  <button className="item-button item-button__search on"></button>
                                </div>
                              </div>
                              <div className="treeNode-children">
                                <div className="tree__list">
                                  <div className="tree-list__item">
                                    {/* tool-layer__item-button 메뉴 활성화 active /메뉴 없을때 nolist  */}
                                    <button className="tree-list__item-button children_active"></button>
                                    <div className="tree-list__item-text">
                                      일이삼사오육칠팔구십 일이삼사오육칠팔구십
                                      일이삼사오육칠팔구십 일이삼사오육칠팔구십
                                    </div>
                                    <div className="tree-list__item-buttons">
                                      {/* D: item-button 활성화 시 addClass on  */}
                                      <button className="item-button item-button__view"></button>
                                      <button className="item-button item-button__lock"></button>
                                      <button className="item-button item-button__search"></button>
                                    </div>
                                  </div>
                                  <div className="treeNode-children">
                                    <div className="tree__list">
                                      <div className="tree-list__item text_active">
                                        {/* tool-layer__item-button 메뉴 활성화 active /메뉴 없을때 nolist  */}
                                        <button className="tree-list__item-button hide"></button>
                                        <div className="tree-list__item-text">
                                          <input type="text" name="" id="" />
                                        </div>
                                        <div className="tree-list__item-buttons">
                                          {/* D: item-button 활성화 시 addClass on  */}
                                          <button className="item-button item-button__view"></button>
                                          <button className="item-button item-button__lock"></button>
                                          <button className="item-button item-button__search"></button>
                                        </div>
                                      </div>
                                      <div className="treeNode-children">
                                        <div className="tree__list">
                                          <div className="tree-list__item search">
                                            {/* tool-layer__item-button 메뉴 활성화 active /메뉴 없을때 nolist  */}
                                            <button className="tree-list__item-button hide"></button>
                                            <div className="tree-list__item-text">
                                              <input
                                                type="text"
                                                name=""
                                                id=""
                                              />
                                            </div>
                                            <div className="tree-list__item-buttons">
                                              {/* D: item-button 활성화 시 addClass on  */}
                                              <button className="item-button item-button__view"></button>
                                              <button className="item-button item-button__lock"></button>
                                              <button className="item-button item-button__search"></button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* 여기서 까지 treeNode */}
                          </div>
                          <div className="tree-list__wrap on">
                            {/* 여기서 부터 treeNode */}
                            <div className="tree__list">
                              <div className="tree-list__item">
                                {/* tool-layer__item-button 메뉴 활성화 active /메뉴 없을때 nolist  */}
                                <button className="tree-list__item-button active"></button>
                                <div className="tree-list__item-text">
                                  <input type="text" name="" id="" />
                                </div>
                                <div className="tree-list__item-buttons">
                                  {/* D: item-button 활성화 시 addClass on  */}
                                  <button className="item-button item-button__view on"></button>
                                  <button className="item-button item-button__lock on"></button>
                                  <button className="item-button item-button__search on"></button>
                                </div>
                              </div>
                              <div className="treeNode-children">
                                <div className="treeNode-children">
                                  <div className="tree__list">
                                    <div className="tree-list__item click_active">
                                      {/* tool-layer__item-button 메뉴 활성화 active /메뉴 없을때 nolist  */}
                                      <button className="tree-list__item-button active"></button>
                                      <div className="tree-list__item-text">
                                        일이삼사오육칠팔구십일이삼사오육칠팔구십
                                      </div>
                                      <div className="tree-list__item-buttons">
                                        {/* D: item-button 활성화 시 addClass on  */}
                                        <button className="item-button item-button__view"></button>
                                        <button className="item-button item-button__lock"></button>
                                        <button className="item-button item-button__search"></button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* 여기서 까지 treeNode */}
                          </div>

                          <div className="tree-list__wrap">
                            {/* 여기서 부터 treeNode */}
                            <div className="tree__list">
                              <div className="tree-list__item search_active on">
                                {/* tool-layer__item-button 메뉴 활성화 active /메뉴 없을때 nolist  */}
                                <button className="tree-list__item-button active"></button>
                                <div className="tree-list__item-text">
                                  일이삼사오육칠팔구십일이삼사오육칠팔구십
                                </div>
                                <div className="tree-list__item-buttons">
                                  {/* D: item-button 활성화 시 addClass on  */}
                                  <button className="item-button item-button__view on"></button>
                                  <button className="item-button item-button__lock on"></button>
                                  <button className="item-button item-button__search on"></button>
                                </div>
                              </div>
                              <div className="treeNode-children"></div>
                            </div>
                            {/* 여기서 까지 treeNode */}
                          </div>
                          {/* 계층 간 아이템 이동 */}
                          <div className="treeDivider bottom"></div>
                          {/* 계층 간 아이템 이동 */}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* 아이템 트리 끝 */}

              {/* D: layer 활성화 시 item-property에 addClass on */}
              {/* 아이템 속성 레이어 */}
              {/* 2022.11.01  aside-property -> item-property */}
              <div className="item-property aside__layout">
                <button className="aside__button">
                  <i className="icon icon_layer-btn"></i>
                </button>
                <div className="aside__layer">
                  {/* 2022.11.01 추가 */}
                  <button className="aside__button--close">
                    <i className="icon icon_layer-btn--close"></i>
                  </button>
                  {/* 2022.11.01 추가 */}
                  <div className="aside-head">
                    <div className="aside-head__title">
                      아이템 속성
                      <button className="button--lg">
                        <i className="icon icon_property"></i>
                      </button>
                    </div>
                    <button className="aside-head__button button--md">
                      <i className="icon icon_reset"></i>
                    </button>
                  </div>
                  <div className="aside-contents">
                    <div>
                      {/* D: list 활성화 시 property-list addClass on */}
                      <ul className="property-list information">
                        <li className="property-list__head">
                          <div className="property-list__item">
                            <span className="property-list__title">
                              Item Instance
                            </span>
                            <div className="property-list__buttons">
                              <button className="property-list__button">
                                <i className="icon icon_reset-gray"></i>
                              </button>
                              <button className="property-list__button">
                                <i className="icon icon_trash"></i>
                              </button>
                              <button className="property-list__button">
                                <i className="icon icon_arrow-pupple"></i>
                              </button>
                            </div>
                          </div>
                          <ul className="property-list--contents">
                            <li className="property-list__item">
                              <label htmlFor="">Instance Name</label>
                              <input
                                className="col-3"
                                type="text"
                                name=""
                                id=""
                                placeholder="입력하세요"
                              />
                            </li>
                            <li className="property-list__item">
                              <label htmlFor="">Parant Name</label>
                              <input
                                className="col-3"
                                type="text"
                                name=""
                                id=""
                                placeholder="입력하세요"
                              />
                            </li>
                          </ul>
                        </li>
                      </ul>
                      {/* D: list 활성화 시 property-list addClass on */}
                      <ul className="property-list information">
                        <li className="property-list__head">
                          <div className="property-list__item">
                            <span className="property-list__title">
                              Item Information
                            </span>
                            <div className="property-list__buttons">
                              <button className="property-list__button">
                                <i className="icon icon_reset-gray"></i>
                              </button>
                              <button className="property-list__button">
                                <i className="icon icon_trash"></i>
                              </button>
                              <button className="property-list__button">
                                <i className="icon icon_arrow-pupple"></i>
                              </button>
                            </div>
                          </div>
                          <ul className="property-list--contents">
                            <li className="property-list__item">
                              <label htmlFor="">Instance Name</label>
                              <input
                                className="col-3"
                                type="text"
                                name=""
                                id=""
                                placeholder="입력하세요"
                              />
                            </li>
                            <li className="property-list__item">
                              <label htmlFor="">Parant Name</label>
                              <input
                                className="col-3"
                                type="text"
                                name=""
                                id=""
                                placeholder="입력하세요"
                              />
                            </li>
                          </ul>
                        </li>
                      </ul>
                      {/* D: list 활성화 시 property-list addClass on */}
                      <ul className="property-list transfomation">
                        <li className="property-list__head">
                          <div className="property-list__item">
                            <span className="property-list__title">
                              Transfomation
                            </span>
                            <div className="property-list__buttons">
                              <button className="property-list__button">
                                <i className="icon icon_reset-gray"></i>
                              </button>
                              <button className="property-list__button">
                                <i className="icon icon_trash"></i>
                              </button>
                              <button className="property-list__button">
                                <i className="icon icon_arrow-pupple"></i>
                              </button>
                            </div>
                          </div>
                          <ul className="property-list--contents">
                            <li className="property-list__item">
                              <label htmlFor="">Position</label>
                              <div className="input-grop">
                                <input
                                  className="col-1"
                                  type="number"
                                  name=""
                                  id=""
                                  placeholder="X"
                                />
                                <input
                                  className="col-1"
                                  type="number"
                                  name=""
                                  id=""
                                  placeholder="Y"
                                />
                                <input
                                  className="col-1"
                                  type="number"
                                  name=""
                                  id=""
                                  placeholder="Z"
                                />
                              </div>
                            </li>
                            <li className="property-list__item">
                              <label htmlFor="">Rotate</label>
                              <div className="input-grop">
                                <input
                                  className="col-1"
                                  type="number"
                                  name=""
                                  id=""
                                  placeholder="X"
                                />
                                <input
                                  className="col-1"
                                  type="number"
                                  name=""
                                  id=""
                                  placeholder="Y"
                                />
                                <input
                                  className="col-1"
                                  type="number"
                                  name=""
                                  id=""
                                  placeholder="Z"
                                />
                              </div>
                            </li>
                            <li className="property-list__item">
                              <label htmlFor="">Scale</label>
                              <div className="input-grop">
                                <input
                                  className="col-1"
                                  type="number"
                                  name=""
                                  id=""
                                  placeholder="X"
                                />
                                <input
                                  className="col-1"
                                  type="number"
                                  name=""
                                  id=""
                                  placeholder="Y"
                                />
                                <input
                                  className="col-1"
                                  type="number"
                                  name=""
                                  id=""
                                  placeholder="Z"
                                />
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      {/* D: list 활성화 시 property-list addClass on */}
                      <ul className="property-list model">
                        <li className="property-list__head">
                          <div className="property-list__item">
                            <span className="property-list__title">Model</span>
                            <div className="property-list__buttons">
                              <button className="property-list__button">
                                <i className="icon icon_reset-gray"></i>
                              </button>
                              <button className="property-list__button">
                                <i className="icon icon_trash"></i>
                              </button>
                              <button className="property-list__button">
                                <i className="icon icon_arrow-pupple"></i>
                              </button>
                            </div>
                          </div>
                          <ul className="property-list--contents">
                            <li className="property-list__item">
                              <label htmlFor="">Position</label>
                              <div className="input-grop">
                                <div className="count__buttons">
                                  <button className="count__button count__button--minus"></button>
                                  <button className="count__button count__button--plus"></button>
                                </div>
                                <input
                                  className="col-2"
                                  type="number"
                                  name=""
                                  id=""
                                  placeholder="Z"
                                />
                              </div>
                            </li>
                            <li className="property-list__item">
                              <label htmlFor="">Material</label>
                              <div className="input-grop">
                                <div className="count__buttons">
                                  <button className="count__button count__button--minus"></button>
                                  <button className="count__button count__button--plus"></button>
                                </div>
                                <input
                                  className="col-2"
                                  type="number"
                                  name=""
                                  id=""
                                  placeholder="Z"
                                />
                              </div>
                            </li>
                            <li className="property-list__item">
                              <label htmlFor="">Color</label>
                              <div className="input-grop">
                                <div className="input-grop--color">
                                  <button className="color__select"></button>
                                  <input
                                    type="number"
                                    name=""
                                    id=""
                                    placeholder="입력하세요"
                                  />
                                </div>
                                <input
                                  className="col-1"
                                  type="number"
                                  name=""
                                  id=""
                                  placeholder="R"
                                />
                                <input
                                  className="col-1"
                                  type="number"
                                  name=""
                                  id=""
                                  placeholder="G"
                                />
                                <input
                                  className="col-1"
                                  type="number"
                                  name=""
                                  id=""
                                  placeholder="B"
                                  disabled
                                />
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <button className="aside__button--bottom">
                    <span>New Property</span>
                  </button>
                </div>
              </div>
              {/* 아이템 속성 레이어 */}
            </div>

            {/* 하단 아이템 갤러리 */}
            <div className="item-gallery bottom__layout on">
              <button className="bottom__button">
                <i className="icon icon_bottomlayer-btn"></i>
              </button>
              <div className="item-slide">
                <Swiper
                  slidesPerView={10}
                  slidesPerGroup={10}
                  scrollbar={{
                    hide: true,
                  }}
                  navigation={{
                    nextEl: ".item-slide__button--next",
                    prevEl: ".item-slide__button--prev",
                  }}
                  modules={[Navigation, Scrollbar]}
                  className="item-slide__list"
                >
                  {/*  */}
                  <SwiperSlide>
                    {/* 아이템 갤러리 퀵 슬롯 아이템 여기서 부터 */}
                    <div>
                      {/* D: 슬라이드 내 아이템 클릭 시 addClass on  */}
                      <div className="gallery__item on">
                        <div className="gallery__item-info">
                          <span className="gallery__item--name letter20">
                            <span>
                              일이삼사오육칠팔구십일이삼사오육칠팔구십
                            </span>
                          </span>
                          {/* 확인용 이미지 */}
                          <img
                            className="gallery__item--image"
                            src={require("../../../assets/images/24.png")}
                          />
                        </div>
                      </div>
                    </div>
                    {/* 아이템 갤러리 퀵 슬롯 아이템 여기서 까지 */}
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="gallery__item">
                        <div className="gallery__item-info">
                          <span className="gallery__item--name">
                            <span>일이삼</span>
                          </span>
                          {/* 확인용 이미지 */}
                          <img
                            className="gallery__item--image"
                            src={require("../../../assets/images/24.png")}
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {/* 아이템 갤러리 퀵 슬롯 아이템 여기서 부터 */}
                    <div>
                      {/* D: 슬라이드 내 아이템 클릭 시 addClass on  */}
                      <div className="gallery__item">
                        <div className="gallery__item-info">
                          <span className="gallery__item--name letter20">
                            <span>
                              일이삼사오육칠팔구십일이삼사오육칠팔구십
                            </span>
                          </span>
                          {/* 확인용 이미지 */}
                          <img
                            className="gallery__item--image"
                            src={require("../../../assets/images/24.png")}
                          />
                        </div>
                      </div>
                    </div>
                    {/* 아이템 갤러리 퀵 슬롯 아이템 여기서 까지 */}
                  </SwiperSlide>
                  <SwiperSlide>
                    {/* 아이템 갤러리 퀵 슬롯 아이템 여기서 부터 */}
                    <div>
                      {/* D: 슬라이드 내 아이템 클릭 시 addClass on  */}
                      <div className="gallery__item">
                        <div className="gallery__item-info">
                          <span className="gallery__item--name letter20">
                            <span>
                              일이삼사오육칠팔구십일이삼사오육칠팔구십
                            </span>
                          </span>
                          {/* 확인용 이미지 */}
                          <img
                            className="gallery__item--image"
                            src={require("../../../assets/images/24.png")}
                          />
                        </div>
                      </div>
                    </div>
                    {/* 아이템 갤러리 퀵 슬롯 아이템 여기서 까지 */}
                  </SwiperSlide>
                  <SwiperSlide>
                    {/* 아이템 갤러리 퀵 슬롯 아이템 여기서 부터 */}
                    <div>
                      {/* D: 슬라이드 내 아이템 클릭 시 addClass on  */}
                      <div className="gallery__item">
                        <div className="gallery__item-info">
                          <span className="gallery__item--name letter20">
                            <span>
                              일이삼사오육칠팔구십일이삼사오육칠팔구십
                            </span>
                          </span>
                          {/* 확인용 이미지 */}
                          <img
                            className="gallery__item--image"
                            src={require("../../../assets/images/24.png")}
                          />
                        </div>
                      </div>
                    </div>
                    {/* 아이템 갤러리 퀵 슬롯 아이템 여기서 까지 */}
                  </SwiperSlide>
                  <SwiperSlide>
                    {/* 아이템 갤러리 퀵 슬롯 아이템 여기서 부터 */}
                    <div>
                      {/* D: 슬라이드 내 아이템 클릭 시 addClass on  */}
                      <div className="gallery__item">
                        <div className="gallery__item-info">
                          <span className="gallery__item--name letter20">
                            <span>
                              일이삼사오육칠팔구십일이삼사오육칠팔구십
                            </span>
                          </span>
                          {/* 확인용 이미지 */}
                          <img
                            className="gallery__item--image"
                            src={require("../../../assets/images/24.png")}
                          />
                        </div>
                      </div>
                    </div>
                    {/* 아이템 갤러리 퀵 슬롯 아이템 여기서 까지 */}
                  </SwiperSlide>
                  <SwiperSlide></SwiperSlide>
                  <SwiperSlide></SwiperSlide>
                  <SwiperSlide></SwiperSlide>
                  <SwiperSlide></SwiperSlide>
                  <SwiperSlide></SwiperSlide>
                  <SwiperSlide></SwiperSlide>
                  <SwiperSlide></SwiperSlide>
                  <SwiperSlide></SwiperSlide>
                  <SwiperSlide></SwiperSlide>
                  <SwiperSlide></SwiperSlide>
                  <SwiperSlide></SwiperSlide>
                  <SwiperSlide></SwiperSlide>
                  <SwiperSlide></SwiperSlide>
                  <SwiperSlide></SwiperSlide>
                  <SwiperSlide></SwiperSlide>
                  <SwiperSlide></SwiperSlide>
                  <SwiperSlide></SwiperSlide>
                  <SwiperSlide></SwiperSlide>
                  <SwiperSlide></SwiperSlide>
                  <SwiperSlide></SwiperSlide>
                  <SwiperSlide></SwiperSlide>
                  <SwiperSlide></SwiperSlide>
                  <SwiperSlide></SwiperSlide>
                  <SwiperSlide></SwiperSlide>
                  <SwiperSlide></SwiperSlide>
                  <SwiperSlide></SwiperSlide>
                  <SwiperSlide></SwiperSlide>
                  <SwiperSlide></SwiperSlide>
                  <SwiperSlide></SwiperSlide>
                  <SwiperSlide></SwiperSlide>
                  <SwiperSlide></SwiperSlide>
                  <SwiperSlide></SwiperSlide>
                  <SwiperSlide></SwiperSlide>
                  <SwiperSlide></SwiperSlide>
                </Swiper>
                <button className="item-slide__button item-slide__button--prev"></button>
                <button className="item-slide__button item-slide__button--next"></button>
              </div>

              <div className="bottom__layer">
                {/* 2022.11.18 bottom__resize-area 추가*/}
                <div className="bottom__resize-area"></div>
                {/* 2022.11.18 bottom__resize-area 추가*/}
                {/* D: 아이템 검색 시 bottom-left addClass on  */}
                <div className="bottom-left">
                  <div className="option__search">
                    <div className="search-box">
                      <input
                        className="search-box__input"
                        type="text"
                        placeholder="검색어를 입력하세요"
                      />
                      {/* 2022.11.28 수정 */}
                      <button className="search-box__button--delete"></button>
                      {/* 2022.11.28 수정 */}
                      <button className="button--md search-box__button">
                        <i className="icon icon_search-gray">검색</i>
                      </button>
                    </div>
                  </div>
                  <div className="option__buttons">
                    {/* D: button 활성화 시 addClass on */}
                    <button className="button--lg button--bookmark">
                      <span className="blind">스크랩</span>
                    </button>
                    {/* D: button 활성화 시 addClass on */}
                    <button className="button--lg button--basket">
                      <span className="blind">장바구니</span>
                    </button>
                  </div>
                  <div className="option__list-grop">
                    <div className="option__list option__list--depth01">
                      {/* D: button 활성화 시 option__item-button addClass on */}
                      <button className="option__item-button on">
                        <span className="option__item-name">보유중</span>
                        <span className="option__item-count">346</span>
                      </button>
                      <button className="option__item-button">
                        <span className="option__item-name">마켓</span>
                        <span className="option__item-count">346</span>
                      </button>
                      <button className="option__item-button">
                        <span className="option__item-name">제작</span>
                        <span className="option__item-count">346</span>
                      </button>
                    </div>
                    <div className="option__list option__list--depth02">
                      {/* D: button 활성화 시 option__item-button addClass on */}
                      <button className="option__item-button on">
                        <span className="option__item-name">
                          <span className="option__item-text">랜드</span>
                          <i className="option__item-icon land"></i>
                        </span>
                        <span className="option__item-count">346</span>
                      </button>
                      <button className="option__item-button">
                        <span className="option__item-name">
                          <span className="option__item-text">아바타</span>
                          <i className="option__item-icon avartar"></i>
                        </span>
                        <span className="option__item-count">346</span>
                      </button>
                      <button className="option__item-button">
                        <span className="option__item-name">
                          <span className="option__item-text">에셋</span>
                          <i className="option__item-icon assets"></i>
                        </span>
                        <span className="option__item-count">346</span>
                      </button>
                    </div>
                    <div className="option__list">
                      <ul className="option__list option__list--depth03">
                        {/* D: button 활성화 시 option__item addClass on */}
                        <li className="option__item">
                          <span className="option__item-name">기본공원</span>
                          <span className="option__item-count">99+</span>
                          <ul className="option__list--depth04">
                            {/* D: button 활성화 시 option__item addClass on */}
                            <li className="option__item">
                              <span className="option__item-name">모자</span>
                              <span className="option__item-count">99+</span>
                            </li>
                            <li className="option__item">
                              <span className="option__item-name">상의</span>
                              <span className="option__item-count">99+</span>
                            </li>
                            <li className="option__item">
                              <span className="option__item-name">
                                원피스(한벌옷)
                              </span>
                              <span className="option__item-count">99+</span>
                            </li>
                            <li className="option__item">
                              <span className="option__item-name">하의</span>
                              <span className="option__item-count">99+</span>
                            </li>
                          </ul>
                        </li>
                        <li className="option__item">
                          <span className="option__item-name">사무실</span>
                          <span className="option__item-count">99+</span>
                        </li>
                        <li className="option__item">
                          <span className="option__item-name">하늘</span>
                          <span className="option__item-count">99+</span>
                        </li>
                        <li className="option__item">
                          <span className="option__item-name">자연물</span>
                          <span className="option__item-count">99+</span>
                        </li>
                        <li className="option__item">
                          <span className="option__item-name">빌딩</span>
                          <span className="option__item-count">99+</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* D: option__buttons > button 클릭 시 dimmed 활성화 addClass on  */}
                  <div className="option__dimmed"></div>
                </div>
                {/* 2022.11.23 수정 */}
                <div className="bottom-right">
                  <div className="gallery-top">
                    <div className="gallery-top__title">
                      <span>보유중</span>
                      <span>랜드</span>
                      <span>기본공원</span>
                      <span>전체</span> 아이템갤러리
                    </div>
                    <div className="gallery-top__count">(364개)</div>
                  </div>
                  {/* 2022.11.28 수정 */}
                  <div className="gallery">
                    {/* 보유중 버전 여기서 부터 */}
                    <div className="gallery__buttons">
                      <div className="gallery__check-box">
                        <div className="check-box">
                          <input type="checkbox" name="" id="gallery_check" />
                          <label htmlFor="gallery_check">비매품 제외</label>
                        </div>
                      </div>
                      {/* //보유중 버전 여기서 까지 */}

                      {/* 마켓 버전 여기서 부터 D: 임시 hide 처리 */}
                      <div className="gallery__check-box hide">
                        <div className="check-box">
                          <input type="checkbox" name="" id="gallery_check" />
                          <label htmlFor="gallery_check">
                            컬러버스 아이템만 보기
                          </label>
                        </div>
                      </div>
                      {/* //마켓 버전 여기서 까지 */}

                      {/* 2022.11.04 필터 수정 */}
                      {/* D: filter-select 활성화 시 addClass on */}
                      <div className="filter-select">
                        <button className="filter-select__button button--lg">
                          <i className="icon icon_filter"></i>
                        </button>
                        <div className="select-layer">
                          {/* 2022.11.09 filter option 수정 */}

                          {/* 보유중, 제작 버전 */}
                          <ul className="select-layer__list">
                            {/* D: select-layer__item 활성화 시 addClass on */}
                            <li className="select-layer__item on">최근순</li>
                            <li className="select-layer__item">오래된순</li>
                            <li className="select-layer__item">이름순</li>
                          </ul>
                          {/* // 보유중, 제작 버전 */}

                          {/* 마켓 버전 */}
                          <ul className="select-layer__list">
                            {/* D: select-layer__item 활성화 시 addClass on */}
                            <li className="select-layer__item on">최근순</li>
                            <li className="select-layer__item">오래된순</li>
                            <li className="select-layer__item">인기순</li>
                            <li className="select-layer__item">가격순</li>
                            <li className="select-layer__item">이름순</li>
                          </ul>
                          {/* // 마켓 버전 */}

                          {/* 2022.11.09 filter option 수정 */}
                        </div>
                      </div>
                      {/* 2022.11.04 필터 수정 */}
                    </div>
                    <div className="gallery__list">
                      <ul>
                        {/* 제작/보유중 버전 여기서 부터  */}
                        <li>
                          <div className="gallery__item">
                            <div className="gallery__item-info">
                              <span className="gallery__item--name">
                                <span>일이삼</span>
                              </span>
                              {/* 확인용 이미지 */}
                              <img
                                className="gallery__item--image"
                                src={require("../../../assets/images/24.png")}
                              />
                            </div>
                          </div>
                        </li>
                        {/* 제작/보유중 버전 여기서 까지 */}

                        {/* 마켓 버전 여기서 부터 */}
                        <li>
                          <div className="gallery__item on">
                            <div className="gallery__item-info">
                              <span className="gallery__item--name">
                                <span>일이삼일이삼</span>
                              </span>
                              {/* 가격일때 gallery__item--state addClass price / 보유 중일때 hold */}
                              <span className="gallery__item--state hold">
                                36,300
                              </span>
                              {/* 확인용 이미지 */}
                              <img
                                className="gallery__item--image"
                                src={require("../../../assets/images/61.png")}
                              />
                            </div>
                          </div>
                        </li>
                        {/* 마켓 버전 여기서 까지 */}

                        {/* 1~7 글자*/}
                        <li>
                          <div className="gallery__item">
                            <div className="gallery__item-info">
                              <span className="gallery__item--name">
                                <span>일이삼사오육칠</span>
                              </span>
                              {/* 가격일때 gallery__item--state addClass price / 보유 중일때 hold */}
                              <span className="gallery__item--state hold">
                                36,300
                              </span>
                              {/* 확인용 이미지 */}
                              <img
                                className="gallery__item--image"
                                src={require("../../../assets/images/61.png")}
                              />
                            </div>
                          </div>
                        </li>
                        {/* //1~7 글자 */}

                        {/* 8~10글자 */}
                        <li>
                          <div className="gallery__item">
                            <div className="gallery__item-info">
                              <span className="gallery__item--name letter10">
                                <span>일이삼사오육칠팔구십</span>
                              </span>
                              {/* 가격일때 gallery__item--state addClass price / 보유 중일때 hold */}
                              <span className="gallery__item--state hold">
                                36,300
                              </span>
                              {/* 확인용 이미지 */}
                              <img
                                className="gallery__item--image"
                                src={require("../../../assets/images/61.png")}
                              />
                            </div>
                          </div>
                        </li>
                        {/* //8~10글자 */}

                        {/* 11~20글자 */}
                        <li>
                          <div className="gallery__item">
                            <div className="gallery__item-info">
                              <span className="gallery__item--name letter20">
                                <span>
                                  일이삼사오육칠팔구십일이삼사오육칠팔구십
                                </span>
                              </span>
                              {/* 가격일때 gallery__item--state addClass price / 보유 중일때 hold */}
                              <span className="gallery__item--state hold">
                                36,300
                              </span>
                              {/* 확인용 이미지 */}
                              <img
                                className="gallery__item--image"
                                src={require("../../../assets/images/61.png")}
                              />
                            </div>
                          </div>
                        </li>
                        {/* //11~20글자 */}
                        {/* 21~30글자 */}
                        <li>
                          <div className="gallery__item">
                            <div className="gallery__item-info">
                              <span className="gallery__item--name letter30">
                                <span>
                                  일이삼사오육칠팔구십 일이삼사오육칠팔구십
                                  일이삼사오육칠팔구십
                                </span>
                              </span>
                              {/* 가격일때 gallery__item--state addClass price / 보유 중일때 hold */}
                              <span className="gallery__item--state hold">
                                36,300
                              </span>
                              {/* 확인용 이미지 */}
                              <img
                                className="gallery__item--image"
                                src={require("../../../assets/images/61.png")}
                              />
                            </div>
                          </div>
                        </li>
                        {/* //21~30글자 */}
                        {/* 31~40글자 */}
                        <li>
                          <div className="gallery__item">
                            <div className="gallery__item-info">
                              <span className="gallery__item--name letter40">
                                <span>
                                  일이삼사오육칠팔구십일이삼사오육칠팔구십
                                  일이삼사오육칠팔구십일이삼사오육칠팔구십
                                </span>
                              </span>
                              {/* 가격일때 gallery__item--state addClass price / 보유 중일때 hold */}
                              <span className="gallery__item--state hold">
                                36,300
                              </span>
                              {/* 확인용 이미지 */}
                              <img
                                className="gallery__item--image"
                                src={require("../../../assets/images/61.png")}
                              />
                            </div>
                          </div>
                        </li>
                        {/* //31~40글자 */}
                      </ul>
                    </div>
                    <div className="cart-nolist hide">
                      <div className="nolist">
                        <p className="nolist__text">
                          마음에 드는 아이템을 우클릭하여
                          <br />
                          <b>카트</b>에 담아 보세요!
                        </p>
                      </div>
                    </div>
                    <div className="scrap-nolist hide">
                      <div className="nolist">
                        <p className="nolist__text">
                          마음에 드는 아이템을 우클릭하여
                          <br />
                          <b>스크랩</b>해 보세요!
                        </p>
                      </div>
                    </div>
                    {/* 2022.11.24 수정 */}
                    <div className="item-nolist hide">
                      <div className="nolist">
                        <p className="nolist__text">
                          아직 제작한 아이템이 없습니다. <br />
                          아이템 빌더에서 <b>아이템을 제작</b>해 보세요!
                        </p>
                      </div>
                    </div>
                    {/* 2022.11.24 수정 */}
                    <div className="search-nolist hide">
                      <div className="nolist">
                        <p className="nolist__text">
                          <b>블랙핑크 모자</b>에<br />
                          대한 검색 결과가 없습니다.
                        </p>
                        <button className="nolist__button">
                          아이템 갤러리 처음으로
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 2022.11.28 수정 */}
                {/* 2022.11.23 수정 */}
              </div>
            </div>
            {/* 하단 아이템 갤러리 */}
          </div>

          {/* 3D 영역 */}
          <div id="main-panel" className="main-panel">
            <div className="ant-dropdown-trigger">
              <video className="remote-video" id="builderView_1"></video>
            </div>
          </div>
          {/* //3D 영역 */}

          {/* 컨텍스트 영역 - aside */}
          <div className="tree-context hide">
            <div className="context-layer">
              <p className="context-layer__label">Base Parts Item Instance</p>
              <ul className="context-layer__list">
                <li className="context-layer__item">
                  <span>Cut</span>
                  <span className="context-layer__item--key">Ctrl+X</span>
                </li>
                <li className="context-layer__item">
                  <span>Copy</span>
                  <span className="context-layer__item--key">Ctrl+C</span>
                </li>
                <li className="context-layer__item">
                  <span>Paste</span>
                  <span className="context-layer__item--key">Ctrl+V</span>
                </li>
                <li className="context-layer__item">
                  <span>Duplicate</span>
                  <span className="context-layer__item--key">Ctrl+D</span>
                </li>
                <li className="context-layer__item">
                  <span>Delete</span>
                  <span className="context-layer__item--key">
                    Del, Backspace
                  </span>
                </li>
                <li className="context-layer__item">
                  <span>Rename</span>
                  <span className="context-layer__item--key">F2</span>
                </li>
                <li className="context-layer__item">
                  <span>Block Coding</span>
                </li>
              </ul>
              <ul className="context-layer__list">
                <li className="context-layer__item">
                  <span>Focus</span>
                  <span className="context-layer__item--key">F</span>
                </li>
                <li className="context-layer__item">
                  <span>Lock</span>
                </li>
                <li className="context-layer__item">
                  <span>Hide</span>
                </li>
                <li className="context-layer__item">
                  <span>Show</span>
                </li>
                <li className="context-layer__item">
                  <span>Grop</span>
                  <span className="context-layer__item--key">Ctrl+G</span>
                </li>
                <li className="context-layer__item">
                  <span>Ungrop</span>
                  <span className="context-layer__item--key">Ctrl+U</span>
                </li>
              </ul>
              <ul className="context-layer__list">
                <li className="context-layer__item">
                  <span>New Item Instance</span>
                  <span className="context-layer__item--key">Ctrl+I</span>
                </li>
                <li className="context-layer__item">
                  <span>Save Item Instance</span>
                </li>
              </ul>
            </div>
          </div>
          {/* //컨텍스트 영역 - aside */}

          {/* 컨텍스트 영역 - video */}
          <div className="edit-context hide">
            <div className="context-layer">
              <p className="context-layer__labal">Item Edit</p>
              <ul className="context-layer__list">
                <li className="context-layer__item">
                  <span>Cut</span>
                  <span className="context-layer__item--key">Ctrl+X</span>
                </li>
                <li className="context-layer__item">
                  <span>Copy</span>
                  <span className="context-layer__item--key">Ctrl+C</span>
                </li>
                <li className="context-layer__item">
                  <span>Paste</span>
                  <span className="context-layer__item--key">Ctrl+V</span>
                </li>
                <li className="context-layer__item">
                  <span>Duplicate</span>
                  <span className="context-layer__item--key">Ctrl+D</span>
                </li>
                <li className="context-layer__item">
                  <span>Delete</span>
                  <span className="context-layer__item--key">
                    Del, Backspace
                  </span>
                </li>
                <li className="context-layer__item">
                  <span>Rename</span>
                  <span className="context-layer__item--key">F2</span>
                </li>
                <li className="context-layer__item">
                  <span>Block Coding</span>
                </li>
              </ul>
              <ul className="context-layer__list">
                <li className="context-layer__item">
                  <span>Focus</span>
                  <span className="context-layer__item--key">F</span>
                </li>
                <li className="context-layer__item">
                  <span>Lock</span>
                </li>
                <li className="context-layer__item">
                  <span>Hide</span>
                </li>
                <li className="context-layer__item">
                  <span>Grop</span>
                  <span className="context-layer__item--key">Ctrl+G</span>
                </li>
                <li className="context-layer__item">
                  <span>Ungrop</span>
                  <span className="context-layer__item--key">Ctrl+U</span>
                </li>
              </ul>
              <ul className="context-layer__list">
                <li className="context-layer__item">
                  <span>New Item Instance</span>
                  <span className="context-layer__item--key">Ctrl+I</span>
                </li>
                <li className="context-layer__item">
                  <span>Save Item Instance</span>
                </li>
              </ul>
            </div>
          </div>
          {/* //컨텍스트 영역 - video */}

          {/* 컨텍스트 영역 - item gallery */}
          <div className="item-context hide">
            <div className="context-layer">
              <ul className="context-layer__list">
                <li className="context-layer__item">
                  <i className="icon icon_quickslot"></i>
                  <span>퀵 슬롯에 등록</span>
                </li>
                {/* <li className="context-layer__item">
                  <i className="icon icon_quickslot"></i>
                  <span>퀵 슬롯에서 제거</span>
                </li> */}
                <li className="context-layer__item">
                  <i className="icon icon_scrap"></i>
                  <span>스크랩하기</span>
                </li>
                {/* <li className="context-layer__item">
                  <i className="icon icon_scrap"></i>
                  <span>스크랩 해제</span>
                </li> */}
                <li className="context-layer__item">
                  <i className="icon icon_basket"></i>
                  <span>카트에 추가</span>
                </li>
                {/* <li className="context-layer__item">
                  <i className="icon icon_basket"></i>
                  <span>카트에서 제거</span>
                </li> */}
                <li className="context-layer__item">
                  <i className="icon icon_item-gray"></i>
                  <span>아이템 정보</span>
                </li>
              </ul>
            </div>
          </div>
          {/* 컨텍스트 영역 - item gallery */}
        </div>
      </div>

      {/* 토스트 메세지 */}
      <div className="toast hide">
        <p className="toast__text">적용되었습니다.</p>
      </div>
      {/* 토스트 메세지 */}
    </>
  );
};

export default Publishing;
