 // 상단 카운트 배너
 let countNum = 15
 let cpnCount = setInterval(() => {
   document.querySelector('.header__banner--num').innerText = countNum
   countNum--
   if(countNum == 0){
     document.querySelector('.header__banner').classList.add('hide')
     clearInterval(cpnCount);
   }
 }, 1000);



 window.onload = function(){
//  json data get
  var prdList = document.querySelector('.product__list')
  $.get('./js/store.json').done((data) => {

    var products = data.products
    let prCount = data.products.length;

    document.querySelector('.product_total > .num').innerText = prCount;
    products.forEach(item => {
      prdList.insertAdjacentHTML('afterbegin',
        `
          <li class="product__item">
            <div class="product_thumb">
              <img src="./img/${item.photo}" alt="">
              <div class="product_btn-group">
                  <button class="product__btn product__btn--cart" data-id=${item.id}><span class="blind">장바구니에 담기</span></button>
              </div>
            </div>
            <div class="product_info">
              <span class="product__brand">${item.brand}</span>
              <p class="product__title">${item.title}</p>
              <p class="product_price"><span class="sale">${item.sale}%</span> <span class="price">${item.price}</span> 원</p>
              <div class="product__tag">
              </div>
            </div>
          </li>
        `)
        comma();
        });

        for(let i = 0; i < prCount; i++) {
          products[i]['tag'].forEach(item => {
            document.querySelectorAll('.product__tag')[i].insertAdjacentHTML(
              'afterbegin', `
              <span class="tag ${item}"></span>
              `
            )
          })
        }
        // 검색 필터
        var search = document.querySelector('.header__search--input')
        search.addEventListener('keyup', function(){

          var keyword = search.value;
          var searchPrd = products.filter(item => {
            return item.title.includes(keyword) || item.brand.includes(keyword)
          })
          prdList.innerHTML = ''
          searchPrd.forEach(item => {
            prdList.insertAdjacentHTML('afterbegin', `
            <li class="product__item">
            <div class="product_thumb type02">
              <img src="./img/${item.photo}" alt="">
            </div>
            <div class="product_info">
              <span class="product__brand">${item.brand}</span>
              <p class="product__title">${item.title}</p>
              <p class="product_price"><span class="sale">${item.sale}%</span> <span class="price">${item.price}</span>원</p>
              <div class="product__tag">
              </div>
            </div>
          </li>
            `)
          })

          document.querySelector('.product_total > .num').innerText = searchPrd.length;

          for(let i = 0; i < searchPrd.length; i++) {
            searchPrd[i]['tag'].forEach(item => {
              document.querySelectorAll('.product__tag')[i].insertAdjacentHTML(
                'afterbegin', `
                <span class="tag ${item}"></span>
                `
              )
            })
          }

          // title 하이라이트
          let findKwd = document.querySelectorAll('.product__title, .product__brand')
          findKwd.forEach(item => {
            let highlight = item.innerHTML
            highlight = highlight.replace(keyword,  `<span class="highlight">${keyword}</span>`)
            item.innerHTML = highlight
          })
          comma();
        })




        function nodata(){
          if(cartPrd.length == 0) {
            document.querySelector('.cart-moodal').classList.add('nodata');
            document.querySelector('.total_price').innerText = 0
            document.querySelector('.cart-product__list').insertAdjacentHTML('afterbegin', `
            <div class="nodata">
            <div class="nodata__contents">
              <p>장바구니가 비어있습니다.</p>
              <span>상품을 장바구니에 담아보세요.</span>
            </div>
            </div>
            `)
          }
        }

        function comma() {
          let priceNum = document.querySelectorAll('.price')
          for(let i = 0; i < priceNum.length; i++){
            priceNum[i].innerText = priceNum[i].innerText.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          }
        }

        // var count = 1;
        function calc(){
          var totalPrice = 0;
            for(let i = 0;  i <  cartPrd.length; i++){
              var cartItem = document.querySelectorAll('.product_count')
              var count = parseFloat(cartItem[i].value);
              var cartPrdReverse = [...cartPrd].reverse();
              var targetPrice = cartPrdReverse[i]['price'];
              document.querySelectorAll('.plus')[i].addEventListener('click', function(e){
                count = ++cartItem[i].value;
                return;
              })
              document.querySelectorAll('.minus')[i].addEventListener('click', function(e){
                if(count <= 1){
                  count = cartItem[i].value;
                  return;
                }else {
                  count = --cartItem[i].value;
                  return;
                }
              })
              totalPrice += parseFloat(count * targetPrice)
              document.querySelector('.total_price').innerText = totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
        }

        function del(){
          var cartDel = document.querySelectorAll('.product__btn--del')
          for(let i = 0;  i < cartPrd.length; i++)
          cartDel[i].addEventListener('click', function(e){
            var cartPrdReverse = [...cartPrd].reverse();
            cartPrd = cartPrdReverse.splice(i, 1)
            e.target.parentNode.remove();
            calc();
            nodata();
          })
        }



        // 장바구니에 담기
        var cartPrd = []
        nodata();
        var cart = document.querySelectorAll('.product__btn--cart')
        document.querySelector('.header__utill-count').innerText = 0
        for(let i = 0; i < cart.length; i++){
          cart[i].addEventListener('click', function(e){
            let prdId = e.target.dataset.id
            let prdIdx = cartPrd.findIndex(item => {return prdId == item.id})

            if(prdIdx == -1) {
              document.querySelector('.cart-moodal').classList.remove('nodata')
              var addPrd = products.find(item => {return item.id == prdId} )
              cartPrd.push(addPrd)
              addPrd.count = 1
              document.querySelector('.header__utill-count').innerText = cartPrd.length
            }

            document.querySelector('.cart-product__list').innerHTML = ''
            cartPrd.forEach(item => {

              document.querySelector('.cart-product__list').insertAdjacentHTML('afterbegin', `
                <div class="product__item">
                <div class="product_thumb">
                  <img src="./img/${item.photo}" alt="">
                </div>
                <div class="product_info">
                  <span class="product__brand">${item.brand}</span>
                  <p class="product__title">${item.title}</p>
                  <p class="product_price price">${item.price}</p>
                  <div class="option_count">
                      <button href="#" class="count_btn minus" title="수량 빼기"><img src="http://simjuhye.com/portfolio/img/product_detail/minus_icon.png" alt="더하기"></button>
                      <input type="number"  value="${item.count}" min="1" class="product_count">
                      <button href="#" class="count_btn plus" title="수량 더하기"><img src="http://simjuhye.com/portfolio/img/product_detail/plus_icon.png" alt="빼기"></button>
                    </div>
                </div>
                <button class="product__btn--del" data-id=${item.id}></button>
              </div>
                `)

              })
              del();
              calc();
              comma();

              var cartItemInput = document.querySelectorAll('.product_count')
              for(let i = 0; i < cartItemInput.length; i++){
                cartItemInput[i].addEventListener('change', function(){
                  let totalCount = cartItemInput[i].value
                  cart[i].count = totalCount;
                  calc();
                })
              }
            })

        }

        // 모달 관련 팝업
        let headCart = document.querySelector('.header__utill--cart')
        headCart.addEventListener('click', function(){
          document.querySelector('.cart-moodal').classList.add('on')
        })
        document.querySelector('.modal__btn--buy').addEventListener('click', function(){
          document.querySelector('.profile-moodal').classList.add('on')
        })
        // 닫기
        let modal = document.querySelectorAll('.modal')
        let closeBtn = document.querySelectorAll('.modal-head__button--close')
        for(let i = 0; i < modal.length; i++){
          closeBtn[i].addEventListener('click', function(e){
            if(e.currentTarget !== 0){
              modal[i].classList.remove('on')
            }
            modal[i].classList.remove('on')
          })
        }

      })

  }

