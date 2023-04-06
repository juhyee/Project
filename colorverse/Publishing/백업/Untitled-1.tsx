<div className="side-tool__containal">
  {/* D: layer 활성화 시 item-tree에 addClass on */}
  <div className="item-tree on">
    <button className="item-tree__button">
      <i className="icon icon_layer-btn"></i>
    </button>
    <div className="item-layer">
      <div className="layer__head">
        <div className="layer__head__title">아이템트리</div>
        <div className="layer__head__check-box">
          {/* D: check-box 활성화 시 item-tree에 addClass on */}
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
      <div className="item-layer__search">
        <div className="search_box">
          <input className="search_box__input" type="text" />
          <button className="search_box__button">
            <i className="icon icon_search"></i>
          </button>
        </div>
      </div>
      <div className="item-layer__contents">
        <ul className="item-layer__list item-layer__list--depth01">
          <li className="item-layer__item">
            <button className="item-layer__item-button">
              <i className="icon icon_arrow"></i>
            </button>
            <span className="item-layer__item-text">랜드 아이템</span>
            <ul className="item-layer__list tree-layer__list--depth02">
              <li className="item-layer__item">
                <button className="item-layer__item-button">
                  <i className="icon icon_arrow"></i>
                </button>
                <span className="item-layer__item-text">Sky Item Instance</span>
                <div className="item__list__button-list">
                  <button className="item__list__button-itme button">
                    <i className="icon icon_view"></i>
                  </button>
                  <button className="item__list__button-itme button">
                    <i className="icon icon_view"></i>
                  </button>
                  <button className="item__list__button-itme button">
                    <i className="icon icon_view"></i>
                  </button>
                </div>
                <ul className="item-tree__item--deth03">
                  <li className="item-layer__item">
                    <button className="item-layer__item-button">
                      <i className="icon icon_arrow"></i>
                    </button>
                    <span className="item-layer__item-text">
                      Building Item Instance
                    </span>
                    <div className="item__list__button-list">
                      <button className="item__list__button-itme button">
                        <i className="icon icon_view"></i>
                      </button>
                      <button className="item__list__button-itme button">
                        <i className="icon icon_view"></i>
                      </button>
                      <button className="item__list__button-itme button">
                        <i className="icon icon_view"></i>
                      </button>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="right"></div>
  <div className="bottom"></div>
</div>;



<style>
position: relative;
    width: 100%;
    min-height: calc(700px - 86px);
    height: calc(100vh - 86px);
    padding: 0 20px 20px;
    background-color: #242529;
    .side-tool__containal {
        position: relative;
        z-index: 2;
        display: flex;
        align-items: stretch;
        align-content: space-between;
        min-height: calc(700px - 86px);
        height: calc(100vh - 86px);
    }

    .item-tree {
        position: relative;
        &__button {
            position: absolute;
            top: 74px;
            left: 40px;
        }
        .item-layer {
            overflow: hidden;
            width: 340px;
            margin: 20px 0 0 40px;
            border-radius: 34px;
            background-color: #fff;
            box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.15);

            .layer__head {
                @include flex(row, space-between, center);
                padding: 20px 20px 20px 15px;
                &__title {
                    font-size: 18px;
                    line-height: 1;
                    font-weight: $font-bold;
                    color: #000;
                }
                &__check-box {
                    @include flex(row, center, center);
                    // coommon  button css
                    .check-box {
                        label {
                            position: relative;
                            height: 19px;
                            padding-left: 24px;
                            margin-left: 15px;
                            font-size: 12px;
                            font-weight: $font-medium;
                            line-height: 19px;
                            color: #696868;
                            cursor: pointer;
                            &::before {
                                content: '';
                                position: absolute;
                                top: 0;
                                left: 0;
                                width: 19px;
                                height: 19px;
                                background: url('../../assets/icons/checkOffIcon.svg') no-repeat center;
                            }
                        }
                        input {
                            display: none;
                            padding: 0;
                            height: initial;
                            width: initial;
                            margin-bottom: 0;
                            &:checked + label::before {
                                background: url('../../assets/icons/checkOnIcon.svg') no-repeat center;
                            }
                        }
                    }
                }
            }
        }

        &.on {
            .item-tree__button {
                display: none;
            }
            .item-layer {
                transition: all 0.3s;
            }
        }
    }

    // 임시
    .main-panel {
        position: absolute;
        top: 0;
        left: 40px;
        border-radius: 30px;
    }
}

.right {
    width: 340px;
    height: 300px;
    background-color: #fff;
}
.bottom {
    width: 100%;
    height: 300px;
    background-color: #fff;
}

</style>