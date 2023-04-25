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

      })

      // var count = 1;
      function calc(){
        var totalPrice = 0;
        for(let i = 0;  i <  cartPrd.length; i++){
          var cartItem = document.querySelectorAll('.product_count')
          let targetPrice = cartItem[i].parentElement.previousElementSibling.innerText;
          var count = parseFloat(cartItem[i].value);

          document.querySelectorAll('.plus')[i].addEventListener('click', function(e){
            count = ++cartItem[i].value
          })
          document.querySelectorAll('.minus')[i].addEventListener('click', function(e){
            if(count <= 1){
              count = cartItem[i].value

            }else {
              count = --cartItem[i].value

            }
          })
          totalPrice += parseFloat(count * targetPrice)
          document.querySelector('.total_price').innerText = totalPrice
        }
      }


      // 장바구니에 담기
      var cartPrd = []

      var cart = document.querySelectorAll('.product__btn--cart')
      document.querySelector('.header__utill-count').innerText = 0
      for(let i = 0; i < cart.length; i++){
        cart[i].addEventListener('click', function(e){
          let prdId = e.target.dataset.id
          let prdIdx = cartPrd.findIndex(item => {return prdId == item.id})

          if(prdIdx == -1) {
            var addPrd = products.find(item => {return item.id == prdId} )
            cartPrd.push(addPrd)
            addPrd.count = 1
            document.querySelector('.header__utill-count').innerText = cartPrd.length
          }
          document.querySelector('.cart-product__list').innerHTML = ''
          cartPrd.forEach(item => {
            document.querySelector('.cart-product__list').insertAdjacentHTML('afterbegin', `
              <li class="product__item">
              <div class="product_thumb">
                <img src="./img/${item.photo}" alt="">
              </div>
              <div class="product_info">
                <span class="product__brand">${item.brand}</span>
                <p class="product__title">${item.title}</p>
                <p class="product_price">${item.price}</p>
                <div class="option_count">
                    <button href="#" class="count_btn minus" title="수량 더하기"><img src="http://simjuhye.com/portfolio/img/product_detail/minus_icon.png" alt="더하기"></button>
                    <input type="number"  value="${item.count}" min="1" class="product_count">
                    <button href="#" class="count_btn plus" title="수량 빼기"><img src="http://simjuhye.com/portfolio/img/product_detail/plus_icon.png" alt="빼기"></button>
                  </div>

              </div>
              <button class="product__btn--close" data-id=${item.id}></button>
            </li>
              `)
//  var cartDel = document.querySelectorAll('.product__btn--close')
//         cartDel[i].addEventListener('click', function(e){
//           let prdId = e.target.dataset.id
//           console.log(cartPrd[id])
//           // cartPrd = cartPrd.splice(prdId,1);
//         })
          })
          calc();
          // <input type="number" value="${item.count}" min="1" class="product_count">
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
      headCart.addEventListener('click', function(e){
        document.querySelector('.cart-moodal').classList.add('on')
      })
    })
