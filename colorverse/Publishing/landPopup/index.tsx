import "./style.scss";

const Publishing = () => {
  return (
    <>
      {/* 사이트 나갈 시 - 모달 */}
      {/* D: modal 활성화 시 addClass on */}
      <div className="land-exit_modal modal">
        <div className="modal__wrap">
          <div className="modal__contents">
            <div className="modal-body">
              <p>
                정말 나가시겠습니까?
                <br />
                <span>빌더에 저장하지 않은 내역이 있습니다.</span>
              </p>
            </div>
            <div className="modal__buttons">
              <button className="modal__button modal__button--cancle">
                취소
              </button>
              <button className="modal__button">나가기</button>
            </div>
          </div>
        </div>
        <div className="filter"></div>
      </div>
      {/* 사이트 나갈 시 - 모달 */}

      {/* 아이템 속성 reset 클릭 시 - 모달 */}
      {/* D: modal 활성화 시 addClass on */}
      <div className="land-reset_modal modal">
        <div className="modal__wrap">
          <div className="modal__contents">
            {/* <div className="modal-head"></div> */}
            <div className="modal-body">
              <p>
                아이템 인스턴스를 원본 상태로
                <br />
                되돌리시겠습니까?
              </p>
            </div>
            <div className="modal__buttons">
              <button className="modal__button modal__button--cancle">
                취소
              </button>
              <button className="modal__button">확인</button>
            </div>
          </div>
        </div>
        <div className="filter"></div>
      </div>
      {/* 아이템 속성 reset 클릭 시 - 모달 */}

      {/* 기회서 89~93p */}
      {/* 랜드 템플릿으로 시작하기 - 모달 */}
      {/* D: modal 활성화 시 addClass on */}
      <div className="manager-template_modal modal">
        <div className="modal__wrap">
          <div className="modal__contents">
            <div className="modal-head">
              <h3>템플릿으로 시작하기</h3>
              <button className="modal-head__button--close"></button>
            </div>
            <div className="modal-body">
              <ul className="manager-template__list">
                <li className="manager-template__item">
                  {/* D: Live Update 태그 필요 시 template__thumbnail addClass live/update */}
                  <div className="template__thumbnail update">
                    {/* 데모용 이미지 */}
                    <img
                      src={require("../../../assets/images/templateDefault.png")}
                    />
                  </div>
                  <p className="template__title">
                    일이삼사오육칠팔구십일이삼사오육칠팔구십
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="filter"></div>
      </div>
      {/* 랜드 템플릿으 로 시작하기 - 모달 */}

      {/* 랜드 추가 보관함 구매하기 - 모달>모달 */}
      {/* D: modal 활성화 시 addClass on */}
      <div className="manager-locker_modal modal">
        <div className="modal__wrap">
          <div className="modal__contents">
            <div className="modal-body">
              <p>
                <b>랜드 추가 보관함</b>을 구매하시면,
                <br />
                랜드를 추가하여 만들 수 있습니다.
              </p>
              <div className="madal-body__notice">
                <span className="notice--label">랜드 추가 보관함</span>
                <span className="notice--amount">123,000</span>
              </div>
            </div>
            {/* 2022.11.22 수정 */}
            <div className="modal__buttons">
              <button className="modal__button modal__button--cancle">
                닫기
              </button>
              <button className="modal__button">구매하기</button>
            </div>
            {/* 2022.11.22 수정 */}
          </div>
        </div>
        <div className="filter"></div>
      </div>
      {/* 랜드 추가 보관함 구매하기 - 모달>모달 */}

      {/* 결제 금액 부족 - 모달 */}
      {/* D: modal 활성화 시 addClass on */}
      <div className="payment-lack_modal modal">
        <div className="modal__wrap">
          <div className="modal__contents">
            <div className="modal-body">
              <p>
                <b>결제 금액</b>보다
                <br />
                보유한 재화가 부족합니다.
              </p>
            </div>
            <div className="modal__buttons">
              <button className="modal__button">확인</button>
            </div>
          </div>
        </div>
        <div className="filter"></div>
      </div>
      {/* 결제 금액 부족 - 모달 */}

      {/* 아이템 수 초과 - 모달 */}
      {/* D: modal 활성화 시 addClass on */}
      <div className="item-over_modal modal">
        <div className="modal__wrap">
          <div className="modal__contents">
            <div className="modal-body">
              <p>
                생성 가능한 랜드 수를
                <br />
                <b>초과</b>하였습니다.
              </p>
              <div className="madal-body__notice">
                <span className="notice--text">
                  랜드를 5개까지 생성할 수 있습니다.
                </span>
              </div>
            </div>
            <div className="modal__buttons">
              <button className="modal__button">확인</button>
            </div>
          </div>
        </div>
        <div className="filter"></div>
      </div>
      {/* 아이템 수 초과 - 모달 */}

      {/* 빌더 저장 - 모달 */}
      {/* D: modal 활성화 시 addClass on */}
      <div className="builder-save_modal modal">
        <div className="modal__wrap">
          <div className="modal__contents">
            <div className="modal-body">
              <b>저장하고 새로운 빌더를 열까요?</b>
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
              <button className="modal__button">확인</button>
            </div>
          </div>
        </div>
        <div className="filter"></div>
      </div>
      {/*  빌더 저장 - 모달 */}
      {/* 기회서 89~93p */}

      {/* 랜드 관리 - 모달 */}
      <div className="land-management_modal modal">
        <div className="modal__wrap">
          <div className="modal-aside">
            <div className="modal-aside__title">랜드 관리</div>
            <div className="modal-aside__menu">
              <ul className="menu">
                {/* D: menu__item 활성화 시 addClass on */}
                <li className="menu__item menu__item--land on">
                  <span>모든 랜드</span>
                </li>
                <li className="menu__item menu__item--mall">
                  <span>마이 몰</span>
                </li>
                <li className="menu__item menu__item--town">
                  <span>타운 랜드</span>
                </li>
                <li className="menu__item menu__item--plaza">
                  <span>플라자</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="modal__contents">
            <div className="modal-head">
              <h3>모든 랜드</h3>
              <button className="modal-head__button--close"></button>
            </div>
            <div className="modal-body">
              <ul className="land-template__list">
                {/* D: 사용 중인 템플릿일 경우 .land-template__item addClass on */}
                <li className="land-template__item">
                  {/* D: Live Update 태그 필요 시 template__thumbnail addClass live/update */}
                  <div className="template__thumbnail live">
                    {/* 데모용 이미지 */}
                    <img
                      src={require("../../../assets/images/templateDefault.png")}
                    />
                  </div>
                  <p className="template__title">
                    일이삼사오육칠팔구십일이삼사오육칠팔구십
                  </p>
                </li>
                {/* D: 사용 중인 템플릿일 경우 .land-template__item addClass on */}
                <li className="land-template__item on">
                  {/* D: Live Update 태그 필요 시 template__thumbnail addClass live/update */}
                  <div className="template__thumbnail">
                    {/* 데모용 이미지 */}
                    <img
                      src={require("../../../assets/images/templateDefault.png")}
                    />
                  </div>
                  <p className="template__title">
                    일이삼사오육칠팔구십일이삼사오육칠팔구십
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="filter"></div>
      </div>
      {/* 랜드 관리 - 모달 */}

      {/* 저장 후 새로운 빌더 이동 - 모달 */}
      {/* D: modal 활성화 시 addClass on */}
      <div className="builder-move_modal modal">
        <div className="modal__wrap">
          <div className="modal__contents">
            <div className="modal-body">
              <b>저장하고 새로운 빌더를 이동할까요?</b>
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
      {/*  저장 후 새로운 빌더 이동 - 모달 */}

      {/* 랜드 단축키 - 모달 */}
      {/* D: modal 활성화 시 addClass on */}
      <div className="land-hotkey_modal modal">
        <div className="modal__wrap">
          <div className="modal__contents">
            <div className="modal-head">
              <h3>단축키</h3>
              <button className="modal-head__button--close"></button>
            </div>
            <div className="modal-body">
              <div className="modal-body__contents">
                <p className="hotkey__title">기본</p>
                <ul className="land-hotkey__list">
                  <li className="land-hotkey__item">
                    <div>
                      <span className="hotkey">Ctrl</span>
                      <span>+</span>
                      <span className="hotkey hotkey--white">S</span>
                    </div>
                    <div className="hotkey__desc">
                      <span>저장하기</span>
                    </div>
                  </li>
                  <li className="land-hotkey__item">
                    <div>
                      <span className="hotkey">Ctrl</span>
                      <span>+</span>
                      <span className="hotkey hotkey--white">Z</span>
                    </div>
                    <div className="hotkey__desc">
                      <span>실행 취소 &#40;undo&#41;</span>
                    </div>
                  </li>
                  <li className="land-hotkey__item">
                    <div>
                      <span className="hotkey">Ctrl</span>
                      <span>+</span>
                      <span className="hotkey hotkey--white">Y</span>
                    </div>
                    <div className="hotkey__desc">
                      <span>다시 실행 &#40;redo&#41;</span>
                    </div>
                  </li>
                  <li className="land-hotkey__item">
                    <div>
                      <span className="hotkey">Esc</span>
                    </div>
                    <div className="hotkey__desc">
                      <span>취소하기</span>
                    </div>
                  </li>
                  <li className="land-hotkey__item">
                    <div>
                      <span className="hotkey hotkey--white">Y</span>
                      <span className="hotkey hotkey--white">U</span>
                      <span className="hotkey hotkey--white">I</span>
                      <span className="hotkey hotkey--white">O</span>
                      <span className="hotkey hotkey--white">P</span>
                    </div>
                    <div className="hotkey__desc">
                      <span>아이템 배치 도구</span>
                    </div>
                  </li>
                  <li className="land-hotkey__item">
                    <div>
                      <span className="hotkey">Tab</span>
                    </div>
                    <div className="hotkey__desc">
                      <span>플레이모드로 전환</span>
                    </div>
                  </li>
                  <li className="land-hotkey__item">
                    <div>
                      <span className="hotkey hotkey--white">F1</span>
                    </div>
                    <div className="hotkey__desc">
                      <span>도움말</span>
                    </div>
                  </li>
                </ul>
                <p className="hotkey__title">아이템</p>
                <ul className="land-hotkey__list">
                  <li className="land-hotkey__item">
                    <div>
                      <span className="hotkey hotkey--white hotkey--lg">
                        마우스 좌클릭
                      </span>
                    </div>
                    <div className="hotkey__desc">
                      <span>선택</span>
                    </div>
                  </li>
                  <li className="land-hotkey__item">
                    <div>
                      <span className="hotkey">Shift</span>
                      <span>+</span>
                      <span className="hotkey hotkey--white hotkey--lg">
                        마우스 좌클릭
                      </span>
                    </div>
                    <div className="hotkey__desc">
                      <span>다중 선택</span>
                    </div>
                  </li>
                  <li className="land-hotkey__item">
                    <div>
                      <span className="hotkey">드래그</span>
                    </div>
                    <div className="hotkey__desc">
                      <span>선택, 다중 선택</span>
                    </div>
                  </li>
                  <li className="land-hotkey__item">
                    <div>
                      <span className="hotkey hotkey--white hotkey--lg">
                        마우스 좌클릭
                      </span>
                    </div>
                    <div className="hotkey__desc">
                      <span>콘텍스트 메뉴 표시</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="filter"></div>
      </div>
      {/* 랜드 단축키 - 모달 */}

      {/* 일시적인 오류 발생 - 모달 */}
      {/* D: modal 활성화 시 addClass on */}
      <div className="land-error_modal modal">
        <div className="modal__wrap">
          <div className="modal__contents">
            {/* <div className="modal-head"></div> */}
            <div className="modal-body">
              <p>
                일시적인 오류가 발생했습니다. <br />
                잠시 후 다시 시도해 주세요.
              </p>
            </div>
            <div className="modal__buttons">
              <button className="modal__button">확인</button>
            </div>
          </div>
        </div>
        <div className="filter"></div>
      </div>
      {/* 일시적인 오류 발생 - 모달 */}

      {/* 랜드 매니저 공개 - 모달 */}
      {/* D: modal 활성화 시 addClass on */}
      <div className="manager-public_modal modal">
        <div className="modal__wrap">
          <div className="modal__contents">
            <div className="modal-body">
              <p>
                현재 랜드를 <b>공개 상태</b>로 전환할까요?
              </p>
            </div>
            <div className="modal__buttons">
              <button className="modal__button modal__button--cancle">
                취소
              </button>
              <button className="modal__button">전환</button>
            </div>
          </div>
        </div>
        <div className="filter"></div>
      </div>
      {/* //랜드 매니저 공개 - 모달 */}

      {/* 랜드 매니저 비공개 - 모달 */}
      {/* D: modal 활성화 시 addClass on */}
      <div className="manager-private_modal modal">
        <div className="modal__wrap">
          <div className="modal__contents">
            <div className="modal-body">
              <p>
                현재 랜드를 <b>비공개 상태</b>로 전환할까요?
              </p>
            </div>
            <div className="modal__buttons">
              <button className="modal__button modal__button--cancle">
                취소
              </button>
              <button className="modal__button">전환</button>
            </div>
          </div>
        </div>
        <div className="filter"></div>
      </div>
      {/* //랜드 매니저 비공개 - 모달 */}

      {/* 랜드 삭제 - 모달 */}
      {/* D: modal 활성화 시 addClass on */}
      <div className="manager-delete_modal modal on">
        <div className="modal__wrap">
          <div className="modal__contents">
            <button className="modal__button--close"></button>
            <div className="modal-head">
              <i className="icon icon_delete-modal"></i>
              {/* 2022.11.29 수정 */}
              <p>
                이 랜드를 삭제할까요?
                <span>랜드명 입니다.</span>
              </p>
              {/* 2022.11.29 수정 */}
            </div>
            <div className="modal-body">
              <p>
                정말 삭제를 원할 시, 삭제 확인을 위해
                <br />
                <b>랜드삭제</b>를 입력해 주세요.
              </p>
              {/* 2022.11.29 수정 */}
              <input type="text" name="" id="" placeholder="랜드삭제" />
              {/* 2022.11.29 수정 */}
            </div>
            <div className="modal__buttons">
              <button className="modal__button modal__button--cancle">
                취소
              </button>
              {/* D: 랜드 삭제 입력 시 addClass on */}
              <button className="modal__button modal__button--delete on">
                삭제
              </button>
            </div>
          </div>
        </div>
        <div className="filter"></div>
      </div>
      {/* 랜드 삭제 - 모달 */}

      {/* 랜드 이력 - 모달 */}
      {/* D: modal 활성화 시 addClass on */}
      <div className="manager-record_modal modal">
        <div className="modal__wrap">
          <div className="modal__contents">
            <div className="modal-head">
              <h3>랜드이력</h3>
              <button className="modal-head__button--close"></button>
            </div>
            <div className="modal-body">
              <ul className="manager-record__list">
                {/* D: 최근에 저장한 랜드가 있을 경우 manager-record__item addClass new */}
                {/* 2022.11.28 수정 */}
                <li className="manager-record__item new">
                  <span className="manager-record__title">
                    버전9
                    <span>(편집 중)</span>
                  </span>
                  <div className="manager-record__date">
                    <span className="label">최종 수정일</span>
                    <span className="date">2022.11.23</span>
                    <span className="time">14:33:36</span>
                  </div>
                </li>
                {/* 2022.11.28 수정 */}
                <li className="manager-record__item">
                  <span className="manager-record__title">
                    버전8
                    <span>블랙핑크는 왜 이렇게 프로패셔널합니까?</span>
                  </span>
                  <div className="manager-record__date">
                    <span className="label">게시일</span>
                    <span className="date">2022.11.23</span>
                    <span className="time">14:33:36</span>
                  </div>
                  <button className="manager-record__button">불러오기</button>
                </li>
                <li className="manager-record__item">
                  <span className="manager-record__title">
                    버전7
                    <span>블랙핑크는 왜 이렇게 프로패셔널합니까?</span>
                  </span>
                  <div className="manager-record__date">
                    <span className="label">게시일</span>
                    <span className="date">2022.11.23</span>
                    <span className="time">14:33:36</span>
                  </div>
                  <button className="manager-record__button">불러오기</button>
                </li>
                <li className="manager-record__item">
                  <span className="manager-record__title">
                    버전6
                    <span>블랙핑크는 왜 이렇게 프로패셔널합니까?</span>
                  </span>
                  <div className="manager-record__date">
                    <span className="label">게시일</span>
                    <span className="date">2022.11.23</span>
                    <span className="time">14:33:36</span>
                  </div>
                  <button className="manager-record__button">불러오기</button>
                </li>
                <li className="manager-record__item">
                  <span className="manager-record__title">
                    버전5
                    <span>블랙핑크는 왜 이렇게 프로패셔널합니까?</span>
                  </span>
                  <div className="manager-record__date">
                    <span className="label">게시일</span>
                    <span className="date">2022.11.23</span>
                    <span className="time">14:33:36</span>
                  </div>
                  <button className="manager-record__button">불러오기</button>
                </li>
                <li className="manager-record__item">
                  <span className="manager-record__title">
                    버전4
                    <span>블랙핑크는 왜 이렇게 프로패셔널합니까?</span>
                  </span>
                  <div className="manager-record__date">
                    <span className="label">게시일</span>
                    <span className="date">2022.11.23</span>
                    <span className="time">14:33:36</span>
                  </div>
                  <button className="manager-record__button">불러오기</button>
                </li>
                <li className="manager-record__item">
                  <span className="manager-record__title">
                    버전3
                    <span>블랙핑크는 왜 이렇게 프로패셔널합니까?</span>
                  </span>
                  <div className="manager-record__date">
                    <span className="label">게시일</span>
                    <span className="date">2022.11.23</span>
                    <span className="time">14:33:36</span>
                  </div>
                  <button className="manager-record__button">불러오기</button>
                </li>
                <li className="manager-record__item">
                  <span className="manager-record__title">
                    버전2
                    <span>블랙핑크는 왜 이렇게 프로패셔널합니까?</span>
                  </span>
                  <div className="manager-record__date">
                    <span className="label">게시일</span>
                    <span className="date">2022.11.23</span>
                    <span className="time">14:33:36</span>
                  </div>
                  <button className="manager-record__button">불러오기</button>
                </li>
                <li className="manager-record__item">
                  <span className="manager-record__title">
                    버전1
                    <span>블랙핑크는 왜 이렇게 프로패셔널합니까?</span>
                  </span>
                  <div className="manager-record__date">
                    <span className="label">게시일</span>
                    <span className="date">2022.11.23</span>
                    <span className="time">14:33:36</span>
                  </div>
                  <button className="manager-record__button">불러오기</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="filter"></div>
      </div>
      {/* 랜드 이력 - 모달 */}

      {/* 랜드 게시 - 모달 */}
      {/* D: modal 활성화 시 addClass on */}
      <div className="land_post_modal modal">
        <div className="modal__wrap">
          <div className="modal__contents">
            <div className="modal-body">
              <p>
                랜드가 <b>게시</b> 되었습니다.
              </p>
            </div>
            <div className="modal__buttons">
              <button className="modal__button modal__button--cancle">
                닫기
              </button>
              {/* 2022.11.21 수정 */}
              <button className="modal__button">빌더 홈으로 이동</button>
              {/* 2022.11.21 수정 */}
            </div>
          </div>
        </div>
        <div className="filter"></div>
      </div>
      {/* 랜드 게시 - 모달 */}

      {/* 랜드 정보 내 이미지규격 x - 모달>모달 */}
      {/* D: modal 활성화 시 addClass on */}
      <div className="land-info_image_modal modal">
        <div className="modal__wrap">
          <div className="modal__contents">
            <div className="modal-body">
              <p>
                이미지 <b>규격</b>에 맞지 않는 파일입니다.
              </p>
            </div>
            <div className="modal__buttons">
              <button className="modal__button">확인</button>
            </div>
          </div>
        </div>
        <div className="filter"></div>
      </div>
      {/* 랜드 정보 내 이미지 규격 x - 모달>모달 */}

      {/* 랜드 정보 내 동영상 규격 x - 모달>모달 */}
      {/* D: modal 활성화 시 addClass on */}
      <div className="land-info_video_modal modal">
        <div className="modal__wrap">
          <div className="modal__contents">
            <div className="modal-body">
              <p>
                동영상 <b>규격</b>에 맞지 않는 파일입니다.
              </p>
            </div>
            <div className="modal__buttons">
              <button className="modal__button">확인</button>
            </div>
          </div>
        </div>
        <div className="filter"></div>
      </div>
      {/* 랜드 정보 내 동영상 규격 x - 모달>모달 */}

      {/* 랜드 정보 관련 - 모달 */}
      {/* D: modal 활성화 시 addClass on */}
      <div className="land-info_modal modal">
        <div className="modal__wrap">
          <div className="modal__contents">
            <div className="modal-head">
              <h3>랜드 정보</h3>
              <button className="modal-head__button--close"></button>
            </div>
            <div className="modal-body">
              <div className="land-info__list">
                <div className="land-info__item land-info__item--name">
                  <div className="land-info__title">랜드 이름</div>
                  <div className="land-info__contents">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="랜드 이름을 지어주세요"
                    />
                    <span className="land-info__notice">
                      2자~40자의 제목을 입력하세요.
                    </span>
                    <span className="land-info__notice">
                      <b>금칙어가 포함되어 있습니다.</b>
                    </span>
                    <span className="land-info__notice">
                      <b>2자 이상 입력하세요.</b>
                    </span>
                    <p className="land-info__byte">
                      <b>0</b>/40
                    </p>
                  </div>
                </div>
                <div className="land-info__item land-info__item--desc">
                  <div className="land-info__title">랜드 설명</div>
                  <div className="land-info__contents">
                    <textarea
                      name=""
                      id=""
                      placeholder="방문자들이 랜드를 즐길 수 있도록 설명을 작성해 주세요!"
                    ></textarea>
                    <span className="land-info__notice">
                      <b>금칙어가 포함되어 있습니다.</b>
                    </span>
                    <div className="land-info__buttons">
                      <button className="land-info-button">
                        외부 링크 삽입하기
                      </button>
                      <button className="land-info-button">
                        업데이트 안내 등록
                      </button>
                    </div>
                    <p className="land-info__byte">
                      <b>0</b>/1000
                    </p>
                  </div>
                </div>
                {/* 상단 외부링크 삽입하기 버튼 클릭 시 addClass on */}
                <div className="land-info__item land-info__item--link">
                  <div className="land-info__title">외부 링크 삽입</div>
                  <div className="land-info__contents">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="URL 입력하세요"
                      className="land-info__input--youtube"
                    />
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="URL 입력하세요"
                      className="land-info__input--discord"
                    />
                  </div>
                </div>
                {/* 상단 업데이트 안내 등록 버튼 클릭 시 addClass on */}
                <div className="land-info__item land-info__item--update">
                  <div className="land-info__title">업데이트 안내 등록</div>
                  <div className="land-info__contents">
                    <div className="update-row">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="현재 버전의 주요한 업데이트 내용을 설명해 주세요."
                      />
                      <div className="count__buttons">
                        <button className="count__button count__button--minus"></button>
                        <button className="count__button count__button--plus"></button>
                      </div>
                      <p className="land-info__byte">
                        <b>0</b>/100
                      </p>
                    </div>
                  </div>
                </div>
                <div className="land-info__item land-info__item--thumbnail">
                  <div className="land-info__title">썸네일</div>
                  <div className="land-info__contents">
                    <div className="input-file">
                      <div className="preview-image">
                        <img
                          src={require("../../../assets/images/mirrorShot 1.png")}
                        />
                        <button className="preview-image__button"></button>
                      </div>
                      <input type="file" name="" id="" />
                    </div>
                    <div className="land-info__text">
                      <p>
                        1024 x 1024 크기의 jpg, jpeg, png 파일만 등록할 수
                        있어요.
                      </p>
                      <span className="land-info__notice">
                        랜드 섬네일은 어떻게 만드나요?
                      </span>
                    </div>
                  </div>
                </div>
                <div className="land-info__item land-info__item--password">
                  <div className="land-info__title">비밀 랜드로 설정</div>
                  {/* D: toggle 활성화 시 toggle addClass on */}
                  <div className="toggle">
                    <button className="toggle__button"></button>
                  </div>
                  <div className="land-info__contents">
                    <input type="number" name="" id="" min={0} max={9} />
                    <input type="number" name="" id="" min={0} max={9} />
                    <input type="number" name="" id="" min={0} max={9} />
                    <input type="number" name="" id="" min={0} max={9} />
                    <span className="land-info__notice">
                      비밀번호는 숫자 4자리입니다.
                    </span>
                  </div>
                </div>
                <div className="land-info__item land-info__item--screen">
                  <div className="land-info__title">스크린샷</div>
                  <div className="land-info__contents">
                    <div className="input-file">
                      <div className="preview-image">
                        <img
                          src={require("../../../assets/images/mirrorShot 1.png")}
                        />
                        <button className="preview-image__button"></button>
                      </div>
                      <input type="file" name="" id="" />
                    </div>
                    <div className="input-file">
                      <input type="file" name="" id="" />
                    </div>
                    <div className="input-file">
                      <input type="file" name="" id="" />
                    </div>
                    <div className="input-file">
                      <input type="file" name="" id="" />
                    </div>
                    <div className="input-file">
                      <input type="file" name="" id="" />
                    </div>
                    <div className="land-info__text">
                      <p>
                        280 x 720 크기의 jpg, jpeg, png 파일만 등록할 수 있어요.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="land-info__item land-info__item--video">
                  <div className="land-info__title">동영상</div>
                  <div className="land-info__contents">
                    <div className="input-file">
                      <img
                        src={require("../../../assets/images/fileDefault.png")}
                      />
                      <input type="file" name="" id="" />
                    </div>

                    <div className="land-info__text">
                      <p>
                        00000 이하 크기의 mp4, mov 파일만 등록할 수 있어요.{" "}
                        <br />
                        랜드 동영상 등록 시 랜드 스크린샷보다 앞 순서에
                        노출돼요.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="land-info__item land-info__item--theme">
                  <div className="land-info__title">테마</div>
                  {/*테마 추가 버튼 클릭 시 활성화 시 land-info__contents addClass on */}
                  <div className="land-info__contents on">
                    <div className="theme-select__head">
                      <button className="theme-select__button--add">
                        테마 추가
                      </button>
                      <ul className="theme-tag__list">
                        {/* 추가된 태그가 있을 때 여기서 부터 */}
                        <li className="theme-tag__item">
                          <span>
                            <i>🏡</i>기본
                            <button className="theme-tag__button">
                              <i className="icon icon_delete"></i>
                            </button>
                          </span>
                        </li>
                        {/* 추가된 태그가 있을 때 여기서 까지*/}
                      </ul>
                    </div>
                    <div className="theme-select__body">
                      <div className="land-info__text">
                        <p>테마를 선택하세요</p>
                        <span className="land-info__notice">
                          (1개~5개를 선택하실 수 있습니다.)
                        </span>
                      </div>
                      <div className="theme-select__option">
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
                      <div className="modal__buttons">
                        <button className="modal__button modal__button--cancle">
                          취소
                        </button>
                        <button className="modal__button">추가</button>
                      </div>
                    </div>
                  </div>

                  {/*테마 추가  비활성화 시 land-info__contents addClass disabled */}
                  <div className="land-info__contents disabled">
                    <div className="theme-select__head">
                      <ul className="theme-tag__list">
                        {/* 추가된 태그가 있을 때 여기서 부터 */}
                        <li className="theme-tag__item">
                          <span>
                            <i>🏡</i>기본
                            <button className="theme-tag__button">
                              <i className="icon icon_delete"></i>
                            </button>
                          </span>
                        </li>
                        {/* 추가된 태그가 있을 때 여기서 까지*/}
                      </ul>
                    </div>
                  </div>

                  {/*테마 추가  비활성화 시 land-info__contents addClass disabled */}
                  <div className="land-info__contents disabled">
                    <div className="theme-select__head">
                      <button className="theme-select__button--add">
                        테마 추가
                      </button>
                      <ul className="theme-tag__list">
                        {/* 추가된 태그가 있을 때 여기서 부터 */}
                        <li className="theme-tag__item">
                          <span>
                            <i>🏡</i>기본
                            <button className="theme-tag__button">
                              <i className="icon icon_delete"></i>
                            </button>
                          </span>
                        </li>
                        {/* 추가된 태그가 있을 때 여기서 까지*/}
                      </ul>
                    </div>
                    <div className="theme-select__body">
                      <div className="land-info__text">
                        <p>테마를 선택하세요</p>
                        <span className="land-info__notice">
                          (1개~5개를 선택하실 수 있습니다.)
                        </span>
                      </div>
                      <div className="theme-select__option">
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
                      <div className="modal__buttons">
                        <button className="modal__button modal__button--cancle">
                          취소
                        </button>
                        <button className="modal__button">추가</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="land-info__item land-info__item--hash">
                  <div className="land-info__title">해시태그</div>
                  <div className="land-info__contents">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="해시태그를 입력하세요"
                    />
                    <span className="land-info__notice">
                      해시태그는 최대 10개까지 입력 가능 합니다.
                    </span>
                    <p className="land-info__byte">
                      <b>0</b>/10
                    </p>
                  </div>
                </div>
                <div className="land-info__item land-info__item--maximum">
                  <div className="land-info__title">
                    {/*  2022.11.28 문구 수정 */}
                    최대 인원
                    {/*  2022.11.28 문구 수정 */}
                    <div className="tooltip">
                      <div className="tooltip__button">
                        <i className="icon icon_caution"></i>
                      </div>
                      <div className="tooltip__content">
                        랜드는 <b>최대 30명</b>, 마이 룸은 최대 <b>15명</b>까지
                        설정할 수 있습니다.
                      </div>
                    </div>
                  </div>
                  <div className="land-info__contents">
                    {/* 2022.11.23 div.land-info__controler 추가 */}
                    <div className="land-info__controler">
                      <div className="controler">
                        <span className="controler__bar"></span>
                        <span className="controler__item">
                          <i className="icon icon_controler"></i>
                        </span>
                      </div>
                    </div>
                    {/* 2022.11.23 div.land-info__controler 추가 */}
                    <div className="controler__count">
                      <input type="number" placeholder="0" min={0} max={30} />명
                    </div>
                  </div>
                </div>
                <div className="land-info__item land-info__item--public">
                  <div className="land-info__contents">
                    <div className="check-box">
                      <input type="checkbox" name="" id="public_check" />
                      <label htmlFor="public_check">게시 후 바로 공개</label>
                    </div>
                    <div className="check-box">
                      <input type="checkbox" name="" id="private_check" />
                      <label htmlFor="private_check">비공개 상태로 게시</label>
                    </div>
                  </div>
                  {/* 공개 영부 비활성화 시 land-info__contents addClass disabled */}
                  <div className="land-info__contents disabled">
                    <div className="check-box">
                      <input
                        type="checkbox"
                        name=""
                        id="disabled_check"
                        disabled
                      />
                      <label htmlFor="disabled_check">
                        현재 비공개 상태로 게시 되었음.
                      </label>
                    </div>
                  </div>
                </div>
                <div className="land-info__item land-info__item--user">
                  <div className="land-info__contents">
                    <p>
                      <span>저작자 아이디</span>
                      이민소철 천억부자
                    </p>
                    <p>
                      <span>최종 게시 일자</span>
                      2022.11.23 23 : 33 : 58
                    </p>
                    <p>
                      <span>버전</span>
                      Version 1.0
                    </p>
                  </div>
                </div>
                {/* 랜드 매니저 > 정보 수정하기 */}
                <div className="modal__buttons">
                  <button className="modal__button">저장</button>
                </div>

                {/* 랜드 에디터 > 메뉴 > 게시 or 랜드 에디터 > 게시 버튼 */}
                {/* 랜드 에디터 > 메뉴 > 저장 or 랜드 에디터 > 저장 버튼 (단, 첫 저장일 시에만 호출) */}
                {/* <div className="modal__buttons">
                  <button className="modal__button modal__button--posting">
                    저장 후 랜드 게시
                  </button>
                  <button className="modal__button">저장</button>
                </div> */}

                {/* 랜드 에디터 > 메뉴 > 새 랜드로 저장 */}
                {/* <div className="modal__buttons">
                  <button className="modal__button disabled">
                    생성하고 이동
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="filter"></div>
      </div>
      {/*  랜드 정보 관련 - 모달 */}

      {/* 아이템 정보 관련 - 모달 */}
      {/* D: modal 활성화 시 addClass on */}
      <div className="item-info_modal modal">
        <div className="modal__wrap">
          <div className="modal__contents">
            <div className="modal-head">
              <h3>아이템 정보</h3>
              <button className="modal-head__button--close"></button>
            </div>
            <div className="modal-body">
              <div className="item-detail">
                <div className="item-detail__thumbnail">
                  {/* 임시 이미지 */}
                  <img src={require("../../../assets/images/37_2.png")} />
                </div>
                <div className="item-detail__info">
                  <p className="item-detail__title">
                    일이삼사오육칠팔구십일이삼사오육칠팔구십
                    일이삼사오육칠팔구십일이삼사오육칠팔구십
                  </p>
                  <div className="item-detail__user">
                    <div className="item-detail__user--profile">
                      <div className="img">
                        {/* 임시 이미지 */}
                        <img
                          src={require("../../../assets/images/ting-xue-xue-ting-pinkhairgril.png")}
                        />
                      </div>
                      <span className="name">이민소철 천억부자님</span>
                    </div>
                    <div className="item-detail__user--amount">31,000</div>
                  </div>
                  <div className="item-detail__bottom">
                    <div className="item-detail__rank">
                      <div className="item-detail__rank--like">
                        <div className="count">1,234</div>
                        <div className="title">좋아요</div>
                      </div>
                      <div className="item-detail__rank--category">
                        <div className="count">20위</div>
                        <div className="title">장신구</div>
                      </div>
                    </div>
                    <div className="item-detail__buttons">
                      <button className="item-detail__button">
                        <i className="icon icon_bookmark-darkblack"></i>
                      </button>
                      <button className="item-detail__button">
                        <i className="icon icon_cart-darkblack"></i>
                      </button>
                      <button className="item-detail__button item-detail__button--like ">
                        <i className="icon icon_like"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="purchase-item">
                <p className="purchase-item__title">
                  이 아이템과 함께 구매한 아이템
                </p>
                <div>
                  <ul className="purchase-item__list">
                    <li className="purchase-item__item">
                      <div className="img">
                        {/* 임시 이미지 */}
                        <img src={require("../../../assets/images/37_2.png")} />
                      </div>
                      <div className="name">
                        일이삼사오육칠팔구십일이삼사오육칠팔구십
                        일이삼사오육칠팔구십일이삼사오육칠팔구십
                      </div>
                      {/* 보유 중일때 addclass hold / 무료일때 addclass free */}
                      <div className="price">36,300</div>
                    </li>
                    <li className="purchase-item__item">
                      <div className="img">
                        {/* 임시 이미지 */}
                        <img src={require("../../../assets/images/37_2.png")} />
                      </div>
                      <div className="name">
                        일이삼사오육칠팔구십일이삼사오육칠팔구십
                        일이삼사오육칠팔구십일이삼사오육칠팔구십
                      </div>
                      {/* 보유 중일때 addclass hold / 무료일때 addclass free */}
                      <div className="price hold">36,300</div>
                    </li>
                    <li className="purchase-item__item">
                      <div className="img">
                        {/* 임시 이미지 */}
                        <img src={require("../../../assets/images/37_2.png")} />
                      </div>
                      <div className="name">
                        일이삼사오육칠팔구십일이삼사오육칠팔구십
                        일이삼사오육칠팔구십일이삼사오육칠팔구십
                      </div>
                      {/* 보유 중일때 addclass hold / 무료일때 addclass free */}
                      <div className="price free">36,300</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="filter"></div>
      </div>
      {/*  아이템 정보 관련 - 모달 */}

      {/* 기획서 116 ~ 123p 관련 모달 팝업 */}
      {/* 배치된 아이템 중 아직 구매 안함 - 모달 */}
      {/* D: modal 활성화 시 addClass on */}
      <div className="item-placed_modal modal">
        <div className="modal__wrap">
          <div className="modal__contents">
            <div className="modal-body">
              <p>
                배치된 아이템 중 아직
                <br />
                <b>구매하지 않은</b> 아이템이 있어요!
              </p>
              <div className="madal-body__notice">
                <span className="notice--text">
                  배치된 미구매 아이템을 구매하면 랜드를 게시할 수 있습니다.
                </span>
                <span className="notice--text">
                  구매를 원하지 않는 아이템은 삭제해 주세요.
                </span>
              </div>
            </div>
            <div className="modal__buttons">
              <button className="modal__button">확인</button>
            </div>
          </div>
        </div>
        <div className="filter"></div>
      </div>
      {/* 배치된 아이템 중 아직 구매 안함 - 모달 */}

      {/* 미구매 아이템 - 모달 */}
      {/* D: modal 활성화 시 addClass on */}
      <div className="item-unpurchased_modal modal">
        <div className="modal__wrap">
          <div className="modal__contents">
            <div className="modal-head">
              <h3>
                미구매 아이템 <span>총 13개</span>
              </h3>
              <div className="goods-info">
                <span className="goods-info__bucks">8,930,000</span>
                <span className="goods-info__cash">8,930,000</span>
              </div>
              <button className="modal-head__button--close"></button>
            </div>
            <div className="modal-body">
              <div className="unpurchased">
                <ul className="unpurchased__list">
                  <li className="unpurchased__item">
                    <div className="item__img">
                      {/* 임시 이미지 */}
                      <img src={require("../../../assets/images/05_2.png")} />
                    </div>
                    <div className="item__info">
                      <div className="item__name">
                        일이삼사오육칠팔구십일이삼사오육칠팔구십
                        일이삼사오육칠팔구십일이삼사오육칠팔구십
                      </div>
                      <div className="item__price">
                        {/* 컬러벅스 일때 addclass goods-info__bucks / cash 일때 addclass goods-info__cash / 무료일때 addclass goods-info__free */}
                        <span className="goods-info__cash">8,930,000</span>
                      </div>
                      <div className="item__buttons">
                        <button className="item__button">카트 추가</button>
                        <button className="item__button--delete"></button>
                      </div>
                    </div>
                  </li>
                  <li className="unpurchased__item">
                    <div className="item__img">
                      {/* 임시 이미지 */}
                      <img src={require("../../../assets/images/05_2.png")} />
                    </div>
                    <div className="item__info">
                      <div className="item__name">
                        일이삼사오육칠팔구십일이삼사오육칠팔구십
                        일이삼사오육칠팔구십일이삼사오육칠팔구십
                      </div>
                      <div className="item__price">
                        {/* 컬러벅스 일때 addclass goods-info__bucks / cash 일때 addclass goods-info__cash / 무료일때 addclass goods-info__free */}
                        <span className="goods-info__bucks">8,930,000</span>
                      </div>
                      <div className="item__buttons">
                        <button className="item__button">카트 추가</button>
                        <button className="item__button--delete"></button>
                      </div>
                    </div>
                  </li>
                  <li className="unpurchased__item">
                    <div className="item__img">
                      {/* 임시 이미지 */}
                      <img src={require("../../../assets/images/05_2.png")} />
                    </div>
                    <div className="item__info">
                      <div className="item__name">
                        일이삼사오육칠팔구십일이삼사오육칠팔구십
                        일이삼사오육칠팔구십일이삼사오육칠팔구십
                      </div>
                      <div className="item__price">
                        {/* 컬러벅스 일때 addclass goods-info__bucks / cash 일때 addclass goods-info__cash / 무료일때 addclass goods-info__free */}
                        <span className="goods-info__free">8,930,000</span>
                      </div>
                      <div className="item__buttons">
                        {/* item__button 비활성화 시 addClass disabled */}
                        <button className="item__button disabled">
                          카트 추가
                        </button>
                        <button className="item__button--delete"></button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="payment">
                <div className="payment__title">결제 금액</div>
                <ul className="payment__list">
                  <li className="payment__item payment__item--bucks">
                    8,930,000
                  </li>
                  <li className="payment__item payment__item--cash">
                    8,930,000
                  </li>
                </ul>
              </div>
            </div>
            <div className="modal-footer">
              <div className="modal-footer__notice">
                <span className="notice--text">전체 구매만 가능합니다.</span>
                <span className="notice--text">
                  삭제 시, 아이템의 배치 및 속성 정보가 모두 삭제됩니다.
                </span>
              </div>
              <button className="modal__button">
                총 <span>3</span>개 구매
              </button>
            </div>
          </div>
        </div>
        <div className="filter"></div>
      </div>
      {/*  미구매 아이템 - 모달 */}

      {/* 아이템 구매하기 nolist - 모달 */}
      {/* D: modal 활성화 시 addClass on */}
      <div className="item-purchase-nolist_modal modal">
        <div className="modal__wrap">
          <div className="modal__contents">
            <div className="modal-head">
              <h3>구매하기</h3>
              <button className="modal-head__button--close"></button>
            </div>
            <div className="modal-body">
              <div className="nolist">
                <p className="nolist__text">
                  <b>구매할 아이템이 없습니다.</b>
                  <br />
                  공간샵에서 다양한 아이템을 확인하고 배치해 보세요.
                </p>
              </div>
            </div>
            <div className="modal-footer">
              <button className="modal__button">확인</button>
            </div>
          </div>
        </div>
        <div className="filter"></div>
      </div>
      {/* 아이템 구매하기 nolist - 모달 */}

      {/* 아이템 구매완료 - 모달 */}
      {/* D: modal 활성화 시 addClass on */}
      <div className="item-purchase_modal modal">
        <div className="modal__wrap">
          <div className="modal__contents">
            <div className="modal-body">
              <p>
                구매가 <b>완료</b>되었습니다.
              </p>
              <div className="modal__buttons">
                <button className="modal__button">확인</button>
              </div>
            </div>
          </div>
        </div>
        <div className="filter"></div>
      </div>
      {/* 아이템 구매완료 - 모달 */}
    </>
  );
};

export default Publishing;
