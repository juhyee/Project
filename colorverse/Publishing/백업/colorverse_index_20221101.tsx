import "./style.scss";

const Publishing = () => {
  function clickEvent() {
    alert("dfdfafadf");
  }
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
                    <span className="select__text land">랜드 빌더</span>
                  </button>

                  <div className="select-layer">
                    <ul className="select-layer__list">
                      {/* D: 해당 select-layer__item 클릭시 addClass on */}
                      <li className="select-layer__item on">
                        <i className="icon icon_land active"></i>
                        <span>랜드 빌더 </span>
                      </li>
                      <li className="select-layer__item">
                        <i className="icon icon_item"></i>
                        <span>아이템 빌더 </span>
                      </li>
                      <li className="select-layer__item">
                        <i className="icon icon_assets"></i>
                        <span>에셋 빌더 </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-util__contents--right">
              <button className="button--link">단축키</button>
              <button className="button--link">이용가이드</button>
              <button className="button--sm button--setting">
                <i className="icon icon_setting">설정</i>
              </button>
            </div>
          </div>

          <div className="header-tool">
            <div className="header-tool__contents--left">
              <div className="header-tool__menu-select">
                <div className="select">
                  <button className="select__button"></button>
                  <div className="select-layer">
                    <p className="select-layer__labal">컬러버스 빌더 홈</p>
                    <ul className="select-layer__list">
                      {/* D: 해당 select-layer__item 클릭시 addClass on */}
                      <li className="select-layer__item">
                        <span>랜드 정보</span>
                        <span>Ctrl+I</span>
                      </li>
                      <li className="select-layer__item on">
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
              <button className="button--lg button--play">
                <span className="button__text">플레이</span>
                <i className="icon icon_play"></i>
              </button>
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
              </div>
            </div>
            <div className="header-tool__contents--right">
              <div className="header-tool__toggle">
                <div className="toggle">
                  <span className="toggle__label">Snap On</span>
                  {/* toggle 활성화 시 toggle__button addClass on */}
                  <button className="toggle__button on"></button>
                </div>
                <div className="toggle">
                  <span className="toggle__label">Grid Off</span>
                  {/* toggle 활성화 시 toggle__button addClass on */}
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
              {/* D: button--cart 활성화 시 addClass on */}
              <button className="button--cart button--lg on">
                <i className="icon icon_cart">장바구니</i>
              </button>
            </div>
          </div>
        </div>

        <div className="builder-contents">
          <div className="tool-box">
            <div className="side-tool">
              {/* D: layer 활성화 시 item-tree에 addClass on */}
              {/* 아이템 트리 시작 */}
              <div className="item-tree aside__layout on">
                <button className="aside__button">
                  <i className="icon icon_layer-btn"></i>
                </button>
                <div className="aside__layer">
                  {/* 2022.10.31 추가 */}
                  <button className="aside__button--close">
                    <i className="icon icon_layer-btn--close"></i>
                  </button>
                  {/* 2022.10.31 추가 */}
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
                      <button className="button--md search-box__button">
                        <i className="icon icon_search"></i>
                      </button>
                    </div>
                  </div>
                  <div className="aside-contents">
                    <div>
                      <ul className="tree__list">
                        <li className="tree__list--depth01">
                          <div className="tree-list__item tree-list__item--top">
                            <span>랜드 아이템</span>
                            <button>
                              <i className="icon icon_select-arrow"></i>
                            </button>
                          </div>
                          <ul className="tree__list tree-list__wrap">
                            <li className="tree__list--depth02">
                              <div className="tree-list__item">
                                {/* tool-layer__item-button 메뉴 활성화 active /메뉴 없을때 nolist  */}
                                <button className="tree-list__item-button active"></button>
                                <span className="tree-list__item-text">
                                  Base Parts Item Instance
                                </span>
                                <div className="tree-list__item-buttons">
                                  <button>
                                    <i className="icon icon_view"></i>
                                  </button>
                                  <button>
                                    <i className="icon icon_lock"></i>
                                  </button>
                                  <button>
                                    <i className="icon icon_search-gray"></i>
                                  </button>
                                </div>
                              </div>

                              <ul className="tree__list">
                                <li className="tree__list--depth03">
                                  <div className="tree-list__item">
                                    {/* tree-list__item-button 메뉴 활성화 active /메뉴 없을때 nolist  */}
                                    <button className="tree-list__item-button active"></button>
                                    <span className="tree-list__item-text">
                                      Building Item Instance
                                    </span>
                                    <div className="tree-list__item-buttons">
                                      <button>
                                        <i className="icon icon_view"></i>
                                      </button>
                                      <button>
                                        <i className="icon icon_lock"></i>
                                      </button>
                                      <button>
                                        <i className="icon icon_search-gray"></i>
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="tree-list__list">
                                    <li className="tree__list--depth04">
                                      <div className="tree-list__item">
                                        <span className="tree-list__item-text">
                                          Furniture Item{" "}
                                        </span>
                                        <div className="tree-list__item-buttons">
                                          <button>
                                            <i className="icon icon_view"></i>
                                          </button>
                                          <button>
                                            <i className="icon icon_lock"></i>
                                          </button>
                                          <button>
                                            <i className="icon icon_search-gray"></i>
                                          </button>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* 아이템 트리 끝 */}

              {/* D: layer 활성화 시 item-property에 addClass on */}
              {/* 아이템 속성 레이어 */}
              <div className="item-property aside__layout on">
                <button className="aside__button">
                  <i className="icon icon_layer-btn"></i>
                </button>
                <div className="aside__layer">
                  {/* 2022.10.31 추가 */}
                  <button className="aside__button--close">
                    <i className="icon icon_layer-btn--close"></i>
                  </button>
                  {/* 2022.10.31 추가 */}
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
                      {/* list 활성화 시 property-list addClass on */}
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
                      {/* list 활성화 시 property-list addClass on */}
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
                      {/* list 활성화 시 property-list addClass on */}
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
                      {/* list 활성화 시 property-list addClass on */}
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
              <button className="bottom__button--open">
                <i className="icon icon_layer-btn"></i>
              </button>
              {/* siwper 영역 */}
              <div></div>
              {/* //siwper 영역 */}
              <div className="bottom__layer">
                <div className="bottom-left">
                  <div className="option__search">
                    <div className="search-box">
                      <div className="search-box__select">
                        <button className="select__button">전체</button>
                      </div>
                      <input className="search-box__input" type="text" />
                      <button className="button--md search-box__button">
                        <i className="icon icon_search-gray"></i>
                      </button>
                    </div>
                  </div>
                  <div className="option__buttons">
                    <button className="button--lg">
                      <i className="icon icon_bookmark"></i>
                    </button>
                    <button className="button--lg">
                      <i className="icon icon_basket"></i>
                    </button>
                  </div>
                  <div className="option__list-grop">
                    <div className="option__list option__list--depth01">
                      {/* <div> */}
                      {/* button 활성화 시 option__item-button addClass on */}
                      <button className="option__item-button on">보유중</button>
                      <button className="option__item-button">마켓</button>
                      <button className="option__item-button">제작</button>
                      {/* </div> */}
                    </div>
                    <div className="option__list option__list--depth02">
                      <button className="option__item-select">랜드</button>
                      <div>
                        <ul>
                          {/* button 활성화 시 option__item addClass on */}
                          <li className="option__item on">기본 공원</li>
                          <li className="option__item">하늘</li>
                          <li className="option__item">자연물</li>
                          <li className="option__item">기본 공원</li>
                          <li className="option__item">하늘</li>
                          <li className="option__item">자연물</li>
                          <li className="option__item">기본 공원</li>
                          <li className="option__item">하늘</li>
                          <li className="option__item">자연물</li>
                          <li className="option__item">기본 공원</li>
                          <li className="option__item">하늘</li>
                          <li className="option__item">자연물</li>
                        </ul>
                      </div>
                    </div>
                    <div className="option__list option__list--depth03">
                      <div>
                        <ul>
                          {/* button 활성화 시 option__item addClass on */}
                          <li className="option__item on">모자</li>
                          <li className="option__item">상의</li>
                          <li className="option__item">원피스(한벌옷)</li>
                          <li className="option__item">하의</li>
                          <li className="option__item">양말</li>
                          <li className="option__item">모자</li>
                          <li className="option__item">상의</li>
                          <li className="option__item">원피스(한벌옷)</li>
                          <li className="option__item">하의</li>
                          <li className="option__item">양말</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bottom-right">
                  <div className="gallery">
                    <div className="gallery__title">
                      <span>보유중</span>&nbsp; 아이템&nbsp;갤러리
                    </div>
                    <div className="gallery__buttons">
                      <div className="gallery__check-box">
                        <div className="check-box">
                          <input type="checkbox" name="" id="gallery_check" />
                          {/* [ label text ] 보유중 - 비매품 제외, 마켓 - 컬러버스 아이템만 보기, */}
                          <label htmlFor="gallery_check">비매품 제외</label>
                        </div>
                      </div>
                      <button className="button--filter button--lg">
                        <i className="icon icon_filter"></i>
                      </button>
                    </div>
                    <div className="gallery__list">
                      <ul>
                        <li className="gallery__item">
                          <div className="gallery__item-info">
                            {/* 가격일때 span addClass price / 보유 중일때 hold */}
                            <span className="price">36,300</span>
                            {/* 확인용 이미지 */}
                            <img
                              src={require("../../assets/images/item_test01.png")}
                            />
                          </div>
                        </li>
                        <li className="gallery__item">
                          <div className="gallery__item-info">
                            <span className="hold">보유중</span>
                            <img
                              src={require("../../assets/images/item_test02.png")}
                            />
                            {/* 가격일때 span addClass price / 보유 중일때 hold */}
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
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
        </div>
      </div>
    </>
  );
};

export default Publishing;
