var carts = document.querySelector(".carts");
var cartDetail = document.querySelector(".cart-detail");
var cart = [
  {
    cartImg: "./img/birkart.png",
    cartName: "BirKart",
  },
  {
    cartImg: "./img/albali.png",
    cartName: "Albali",
  },
  {
    cartImg: "",
    cartName: "Bol kart",
  },
  {
    cartImg: "",
    cartName: "IkiKart",
  },
  {
    cartImg: "",
    cartName: "Gilas",
  },
  {
    cartImg: "",
    cartName: "Yeni kart",
  },
];

let noImgUrl = "./img/noImg.png";

cart.forEach((cartElement, index) => {
  carts.innerHTML += `      
    <div class="cart-item" onClick="showCartDetails(${index})">
      <div class="cart-item-left">
        <img src="${cartElement.cartImg ? cartElement.cartImg : noImgUrl}" />
        <span>${cartElement.cartName}</span>
      </div>
      <div class="cart-item-right">
        <img src="./img/arrow.svg"/>
      </div>
    </div>
    `;
});

function showCartDetails(index) {
  cartDetail.innerHTML = `
    
    <div class="header">
    <span>Kredit karti ilə sifaris</span>
    <img src="./img/close.svg" onClick = "closeCartDetails()" />
  </div>

  <div class="cart-info">
    <img src="./img/back.svg" onClick="closeCartDetails()" />
    <img src="${cart[index].cartImg ? cart[index].cartImg : noImgUrl}" />
    <span>${cart[index].cartName}</span>
  </div>

  <div class="description">Sizə uyğun kredit şərtini seçin</div>

  <div class="month-list">
    <div class="month-list-item">
      <input type="radio" id="3month"  name="month"/>
      <label for="3month">
        
        <div class="circle">
            <div class="dot"></div>
        </div>
        
        <strong>3 ay</strong> / ayda 300 azn</label>
    </div>

    <div class="month-list-item">
      <input type="radio" id="6month"  name="month"/>
      <label for="6month">
        <div class="circle">
            <div class="dot"></div>


        </div>

        <strong>6 ay</strong>/ ayda 200 azn</label>
    </div>
  </div>

    
    
    `;
  cartDetail.style.display = "flex";
  cartDetail.style.left = "0%";
}

function closeCartDetails() {
  cartDetail.style.left = "-100%";

  setTimeout(() => {
    cartDetail.style.display = "none";
  }, 500);
}
