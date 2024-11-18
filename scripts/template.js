// Gerichte anzeigen

function renderDishes() {
    let dishesHTML = "";
    const dishesContainer = document.getElementById("dishes");
    for (let i = 0; i < dishes.length - 2; i++) {
      dishesHTML += `
        <div>
        <div class="dish-content">
        <div>
          <h3 class="dish-name">${dishes[i].name}</h3>
          <p class="dish-description">${dishes[i].description}</p>
          <p class="dish-price">Preis: ${dishes[i].price} €</p>
        </div>
        <div>
        <img src=./assets/icon/add_sign.png onclick="addToBasket(${i})"
        </div>
        </div>
       </div>
       <div class="space"></div>
      `;
    }
    dishesContainer.innerHTML = dishesHTML;
  
    let dessertsHTML = "";
    const dessertsContainer = document.getElementById("desserts");
    for (let i = dishes.length - 2; i < dishes.length; i++) {
      dessertsHTML += `
        <div>
        <div class="dish-content">
        <div>
          <h3 class="dish-name">${dishes[i].name}</h3>
          <p class="dish-description">${dishes[i].description}</p>
          <p class="dish-price">Preis: ${dishes[i].price} €</p>
        </div>
        <div>
        <img src=./assets/icon/add_sign.png onclick="addToBasket(${i})"
        </div>
        </div>
       </div>
       <div class="space"></div>
      `;
    }
    dessertsContainer.innerHTML = dessertsHTML;
  }

// Warenkorb anzeigen
function renderBasket() {
  let basketHTML = "";
  const basketContainer = document.getElementById("basket");
  for (let i = 0; i < basketContent.length; i++) {
    const item = basketContent[i];
    basketHTML += `
      <div class="basket-content">
        <h4 class="basket-name">${item.name}</h4>
        <div class="basket-content-under">
        <img onclick="decreaseAmount(${i})" src="./assets/icon/minus_sign.png" alt="increase button">
        <p class="basket-amount">${item.amount}x</p>
        <img onclick="increaseAmount(${i})" src="./assets/icon/add_sign.png" alt="increase button">
        <p class="basket-price">${(item.price * item.amount).toFixed(2)} €</p>
        <img onclick="removeFromBasket(${i})" src="./assets/icon/garbage-can.png" alt="increase button">
        </div>
      </div>
    `;
  }
  basketContainer.innerHTML = basketHTML;
  updateTotals();
}