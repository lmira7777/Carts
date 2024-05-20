var carts = document.querySelector(".carts");

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
];

let noImgUrl = "./img/noImg.png";

cart.forEach((cartElement) => {
  carts.innerHTML += `      
    <div class="cart-item">
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
