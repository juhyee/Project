import "./style.scss";

const Publishing = () => {
  return (
    <>
      <div className="login">
        <div className="login__inner">
          {/* 소셜 로그인(login-auth) 페이지 여기서 부터 */}
          <div className="login-auth">
            <div className="login-auth__title">
              컬러버스 빌더에 로그인하세요!
            </div>
            <div className="login-auth__contents">
              <div className="login-auth-social">
                <button className="login-auth__button login-auth-social__button--google">
                  <i className="icon icon_google"></i>
                  Google로 로그인
                </button>
                <button className="login-auth__button login-auth-social__button--apple">
                  <i className="icon icon_apple"></i>
                  Apple로 로그인
                </button>
                <button className="login-auth__button login-auth-social__button--kakao">
                  <i className="icon icon_kakao"></i>
                  카카오 로그인
                </button>
              </div>
              <span className="login-auth__notice">
                &#9432; 컬러버스에 가입되어 있는 계정으로 로그인해 주세요.
              </span>
              <button className="login-auth__button login-auth__button--test">
                <i className="icon icon_symbol"></i>
                내부 테스트용 로그인
              </button>
            </div>
            <div className="login-auth__bottom">
              <div className="login--logo">
                <div className="logo">
                  <span className="blind">colorverse</span>
                </div>
              </div>
              <div className="qr">
                <span className="qr__text">
                  아직 컬러버스 회원이 아니라면 앱에서 계정을 생성하세요!
                </span>
                <div className="qr__image">
                  <img src={require("../../../assets/images/qr.png")} />
                </div>
              </div>
            </div>
          </div>
          {/* 소셜 로그인(login-auth) 페이지 여기까지 */}

          {/* 내부테스트 로그인(login-form) 페이지 여기서 부터 */}
          <div className="login-form">
            <div className="login--logo">
              <div className="logo">
                <span className="blind">colorverse</span>
              </div>
            </div>
            <div className="login-form__title">내부 테스트 로그인</div>
            <div className="login-form__contents">
              <div className="login-form__input login-form__input--id">
                <input type="text" placeholder="아이디를 입력해 주세요" />
              </div>
              <div className="login-form__input login-form__input--pw">
                <input type="text" placeholder="비밀번호를 입력해 주세요" />
              </div>
              {/* 필요시 사용  */}
              {/* <span className="login-form__notice">
                아이디 또는 비밀번호를 잘못 입력했습니다.
                <br />
                입력하신 내용을 다시 확인해 주세요.
              </span> */}
              <button className="login-form__button">로그인</button>
            </div>
          </div>
          {/* 내부테스트 로그인(login-form) 페이지 여기까지 */}
        </div>
      </div>
    </>
  );
};

export default Publishing;
