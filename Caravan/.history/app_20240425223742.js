var carts = document.querySelector(".carts");
var cartDetail = document.querySelector(".cart-detail");
var cart = [
  {
    cartImg: "./img/birkart.png",
    cartName: "BirKart",
    month: [
      {
        month: 3,
        price: 300,
      },
      {
        month: 6,
        price: 200,
      },
    ],
  },
  {
    cartImg: "./img/albali.png",
    cartName: "Albali",
    month: [
      {
        month: 3,
        price: 300,
      },
      {
        month: 6,
        price: 200,
      },
      {
        month: 9,
        price: 150,
      },
    ],
  },
  {
    cartImg: "",
    cartName: "Bol kart",
    month: [
      {
        month: 3,
        price: 300,
      },
      {
        month: 6,
        price: 200,
      },
      {
        month: 9,
        price: 150,
      },
      {
        month: 12,
        price: 100,
      },
    ],
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
  cartDetail.innerHTML = `<div class="header">
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
${console.log(cart[index].month.map(
    (monthElement) =>
      `fuad`
).join(",").replaceAll(","," ")


)}

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
