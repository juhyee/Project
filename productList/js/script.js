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
    // console.log(item['tag'])
    prdList.insertAdjacentHTML('afterbegin',
      `
        <li class="product__item">
          <div class="product_thumb">
            <img src="./img/${item.photo}" alt="">
          </div>
          <div class="product_info">
            <span class="product__brand">${item.brand}</span>
            <p class="product__title">${item.title}</p>
            <p class="product_price"><span class="sale">${item.sale}%</span> ${item.price}원</p>
            <div class="product__tag">
            </div>
          </div>
        </li>
      `)

      });


      for(let i = 0; i < prCount; i++) {
        console.log(i)
        console.log(products[i]['tag'])
        products[i]['tag'].forEach(item => {
          document.querySelectorAll('.product__tag')[i].insertAdjacentHTML(
            'afterbegin', `
            <span class="tag ${item}"></span>
            `
          )
        })
      }



})