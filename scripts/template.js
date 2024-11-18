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
      <div>
        <h4>${item.name}</h4>
        <p>Menge: ${item.amount}</p>
        <p>Preis: ${(item.price * item.amount).toFixed(2)} €</p>
        <button onclick="increaseAmount(${i})">+</button>
        <button onclick="decreaseAmount(${i})">-</button>
        <button onclick="removeFromBasket(${i})">Entfernen</button>
      </div>
    `;
  }
  basketContainer.innerHTML = basketHTML;
  updateTotals();
}