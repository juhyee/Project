import "./style.scss";

const Publishing = () => (
  <>
    <div className="land-manager">
      <div className="land-manager__inner">
        <div className="manager-aside">
          <div className="aside__inner">
            <div className="aside__inner--top">
              <div className="aside__logo">
                <div className="logo">
                  <h1>
                    <span className="blind">colorvers</span>
                    <span>빌더</span>
                  </h1>
                </div>
              </div>
              <div className="aside__gnb">
                <ul className="gnb">
                  {/* D: gnb__item 활성화 시 addClass on */}
                  <li className="gnb__item on">랜드 빌더</li>
                  <li className="gnb__item">아이템 빌더</li>
                  <li className="gnb__item">에셋 빌더</li>
                </ul>
              </div>
            </div>
            <div className="aside__inner--bottom">
              <div className="manager-snb">
                <ul className="snb">
                  {/* D: snb__item 활성화 시 addClass on */}
                  <li className="snb__item snb__item--land on">
                    <span>모든 랜드</span>
                  </li>
                  <li className="snb__item snb__item--mall">
                    <span>마이 몰</span>
                  </li>
                  <li className="snb__item snb__item--town">
                    <span>타운 랜드</span>
                  </li>
                  <li className="snb__item snb__item--plaza">
                    <span>플라자</span>
                  </li>
                </ul>
                <button className="button--tutorial">
                  <p>
                    <b>빌더 사용 튜토리얼</b>
                    인기 랜드는 어떻게 만드나요?
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* D: 랜드가 없을 시  manager-container addClass nolist*/}
        <div className="manager-container">
          <div className="manager-header">
            <div className="header__inner">
              <div className="header__inner--left">
                <div className="user-profile">
                  <div className="user-profile__thumbnail">
                    <img
                      src={require("../../../assets/images/ting-xue-xue-ting-pinkhairgril.png")}
                    />
                  </div>
                  <span className="user-profile__name">천억부자님</span>
                  <span className="user-profile__email">
                    potato1010@gmail.com
                  </span>
                </div>
                <button className="button--lg button--logout">
                  <i className="icon icon_logout">로그아웃</i>
                </button>
              </div>
              <div className="header__inner--right">
                <div className="header__search">
                  <div className="search">
                    {/* 2022.11.28 수정 */}
                    <div className="search__wrap">
                      <input
                        className="search__input"
                        type="text"
                        name=""
                        id=""
                        placeholder="랜드를 검색해 보세요."
                      />
                      <button className="search-box__button--delete"></button>
                    </div>
                    {/* 2022.11.28 수정 */}
                    <button className="button--hg search__button">
                      <i className="icon icon_search-white">검색</i>
                    </button>
                  </div>
                </div>
                <button className="button--hg button--make">랜드만들기</button>
              </div>
            </div>
          </div>
          <div className="manager-contents ">
            <div className="contents__inner">
              <div className="theme-tag">
                <ul className="theme-tag__list">
                  {/* theme-tag__item 활성화 시  addClass on*/}
                  <li className="theme-tag__item on">
                    <span>
                      <i>🏡</i>기본
                    </span>
                  </li>
                  <li className="theme-tag__item">
                    <span>
                      <i>🏫</i>
                      학교
                    </span>
                  </li>
                  <li className="theme-tag__item">
                    <span>
                      <i>🏟️</i>
                      운동장
                    </span>
                  </li>
                  <li className="theme-tag__item">
                    <span>
                      <i>🛏️</i>방
                    </span>
                  </li>
                  <li className="theme-tag__item">
                    <span>
                      <i>🎤</i>
                      공연장
                    </span>
                  </li>
                  <li className="theme-tag__item">
                    <span>
                      <i>🏞️</i>
                      공원
                    </span>
                  </li>
                  <li className="theme-tag__item">
                    <span>
                      <i>🥳</i>
                      이벤트
                    </span>
                  </li>
                  <li className="theme-tag__item">
                    <span>
                      <i>🛕</i>
                      박물관
                    </span>
                  </li>
                  <li className="theme-tag__item">
                    <span>
                      <i>🎨</i>
                      예술
                    </span>
                  </li>
                  <li className="theme-tag__item">
                    <span>
                      <i>😻</i>
                      모임
                    </span>
                  </li>
                  <li className="theme-tag__item">
                    <span>
                      <i>✈️</i>
                      여행
                    </span>
                  </li>
                  <li className="theme-tag__item">
                    <span>
                      <i>🎙️</i>
                      음악
                    </span>
                  </li>
                  <li className="theme-tag__item">
                    <span>
                      <i>🕹️</i>
                      게임
                    </span>
                  </li>
                  <li className="theme-tag__item">
                    <span>
                      <i>🏖️</i>
                      휴가
                    </span>
                  </li>
                  <li className="theme-tag__item">
                    <span>
                      <i>👨‍🎤</i>
                      K팝
                    </span>
                  </li>
                  <li className="theme-tag__item">
                    <span>
                      <i>⛺</i>
                      모험
                    </span>
                  </li>
                  <li className="theme-tag__item">
                    <span>
                      <i>🖼️</i>
                      사진
                    </span>
                  </li>
                  <li className="theme-tag__item">
                    <span>
                      <i>🐹</i>
                      페러디
                    </span>
                  </li>
                  <li className="theme-tag__item">
                    <span>
                      <i>👑</i>
                      엔터테인먼트
                    </span>
                  </li>
                  <li className="theme-tag__item">
                    <span>
                      <i>🤡</i>
                      역할놀이
                    </span>
                  </li>
                </ul>
              </div>

              <div className="land-result">
                <p className="land-result__total">
                  기본 랜드 <span>총 13개</span>
                </p>
                {/* 2022.11.28 문구 수정 */}
                <p className="land-result__caution">
                  랜드의 최종 저장 상태입니다. 랜드 이력에서 이전 버전을 불러올
                  수 있습니다.
                </p>
                {/* //2022.11.28 문구 수정 */}
                {/* D: land-result__select 활성화 시 addClass on */}
                <div className="land-result__select">
                  <button className="select__button">
                    <i className="icon icon_sort"></i>
                  </button>
                  <div className="select-layer">
                    <ul className="select-layer__list">
                      {/* D: select-layer__item 활성화 시 addClass on */}
                      <li className="select-layer__item on">최근순</li>
                      <li className="select-layer__item">오래된순</li>
                      <li className="select-layer__item">이름순</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="land-card">
                <ul className="land-card__list">
                  <li className="land-card__item">
                    <div className="land-card__info">
                      <div className="land-card__thumbnail">
                        {/* 확인용 이미지 */}
                        <img
                          src={require("../../../assets/images/1737855024176.png")}
                        />
                      </div>
                      <div className="land__detail">
                        <div className="land-title">
                          <span className="land-title__text">
                            일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십
                          </span>
                          {/* D: land-title__select 활성화 시 addClass on */}
                          <div className="land-title__select">
                            <button className="select__button"></button>
                            <div className="select-layer">
                              <ul className="select-layer__list">
                                {/* D: select-layer__item 활성화 시 addClass on */}
                                <li className="select-layer__item on">
                                  랜드 게시하기
                                </li>
                                <li className="select-layer__item">
                                  랜드 비공개하기
                                </li>
                                <li className="select-layer__item">
                                  랜드 삭제하기
                                </li>
                                <li className="select-layer__item">
                                  랜드 정보
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="land-desc">
                          <div className="land-desc__item land-desc__item--name">
                            <span className="item__title">소속타운 이름</span>
                            <p className="item__contents">
                              일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십
                            </p>
                          </div>
                          <div className="land-desc__item land-desc__item--theme">
                            <span className="item__title">선택한 테마</span>
                            <ul className="item__contents item__theme-list">
                              <li>이벤트</li>
                              <li>여행</li>
                              <li>게임</li>
                              <li>스포츠</li>
                              <li>요가</li>
                              <li>스포츠</li>
                              <li>요가</li>
                            </ul>
                          </div>
                        </div>
                        <div className="land-state">
                          <div className="land-state--left">
                            <div className="land-state__item">
                              <span className="item__title">게시 상태</span>
                              <span className="item__contents">게시 됨</span>
                            </div>
                            <div className="land-state__item">
                              <span className="item__title">공개 상태</span>
                              <span className="item__contents">공개 됨</span>
                            </div>
                          </div>
                          <div className="land-state--right">
                            <div className="land-state__item">
                              {/* 2022.11.28 문구 수정 */}
                              <span className="item__title">최대 인원</span>
                              {/* 2022.11.28 문구 수정 */}
                              <span className="item__contents">30명</span>
                            </div>
                          </div>
                        </div>
                        <div className="land-history">
                          <div className="land-history__item">
                            <span>누적 방문수</span>
                            <span className="land-history__count">
                              6,334,500
                            </span>
                          </div>
                          <div className="land-history__item">
                            <span>7일 방문수</span>
                            <span className="land-history__count">34,500</span>
                          </div>
                          <div className="land-history__item">
                            <span>좋아요수</span>
                            <span className="land-history__count">782,300</span>
                          </div>
                          <div className="land-history__item">
                            <span>스크랩수</span>
                            <span className="land-history__count">92,330</span>
                          </div>
                        </div>

                        <div className="land__buttons">
                          <button className="land__button button--record">
                            랜드이력
                          </button>
                          <button className="land__button button--fetch">
                            불러오기
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="manager-nolist">
            <div className="nolist">
              <p className="nolist__text">
                <b>새로운 랜드를 만들어 보세요!</b>아직 랜드가 없어요. 랜드를
                만들어 즐겨보세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Publishing;
