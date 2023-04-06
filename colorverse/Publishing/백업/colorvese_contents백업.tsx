<div className="manager-contents">
  <div className="contents__inner">
    {/* <div className="header__buttons">

  <button className="button--link">
    <i className="icon icon_logout"></i>
    로그아웃
  </button>
  <button className="button--hg button--make">
    <i className="icon icon_land-make"></i>
    랜드 만들기
  </button>
  <button className="button--hg button--search">
    <i className="icon icon_search-white">검색</i>
  </button>
  <button className="button--hg button--filter">
    <i className="icon icon_filter">필터</i>
  </button>
</div> */}
    <div className="manager-contents--right">
      <div className="user-info">
        <div className="user-profile">
          <div className="user-profile__thumbnail">
            <img
              src={require("../../../assets/images/ting-xue-xue-ting-pinkhairgril.png")}
            />
          </div>
          <span className="user-profile__name">천억부자님</span>
          <span className="user-profile__email">potato1010@gmail.com</span>
        </div>
        <div className="user-goods">
          <div className="user-goods__item">
            <i className="icon icon_jewel"></i>
            6,930,000
          </div>
          <div className="user-goods__item">
            <i className="icon icon_point"></i>48,930,000
          </div>
        </div>
      </div>
      <div className="manager-snb">
        <ul className="snb">
          {/* D: snb__item 활성화 시 addClass on */}
          <li className="snb__item on">
            <i className="icon">랜드</i>
            <span>모든 랜드</span>
          </li>
          <li className="snb__item">
            <i className="icon">마이 룸</i>
            <span>마이 룸</span>
          </li>
          <li className="snb__item">
            <i className="icon">타운 랜드</i>
            <span>타운 랜드</span>
          </li>
          <li className="snb__item">
            <i className="icon">플라자</i>
            <span>플라자</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="manager-contents--left">
      <div className="tag-grop">
        <ul className="tag__list">
          <li className="tag__item on">
            <span className="tag__item--text">전체</span>
          </li>
          <li className="tag__item">
            <span className="tag__item--text">이벤트</span>
          </li>
        </ul>
      </div>

      <p className="land_total">
        기본 랜드 <span>총 150개</span>
      </p>

      <div className="land-room">
        <div className="land-room__list">
          <div className="lind-room__item"></div>
          <div className="lind-room__item"></div>
          <div className="lind-room__item"></div>
          <div className="lind-room__item"></div>
          <div className="lind-room__item"></div>
          <div className="lind-room__item"></div>
          <div className="lind-room__item"></div>
          <div className="lind-room__item"></div>
        </div>
      </div>
    </div>
  </div>
</div>;
