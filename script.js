let basketContent = [];

// Gericht zum Warenkorb hinzufügen
function addToBasket(dishIndex) {
  const dish = dishes[dishIndex];
  let element = false;

  for (let i = 0; i < basketContent.length; i++) {
    if (basketContent[i].name === dish.name) {
      basketContent[i].amount += 1;
      element = true;
      break;
    }
  }

  if (!element) {
    basketContent.push({ ...dish, amount: 1 });
  }

  renderBasket();
}

// Menge des Gerichts erhöhen
function increaseAmount(index) {
  basketContent[index].amount += 1;
  renderBasket();
}

// Menge des Gerichts reduzieren
function decreaseAmount(index) {
  basketContent[index].amount -= 1;

  if (basketContent[index].amount === 0) {
    basketContent.splice(index, 1);
  }

  renderBasket();
}

// Gericht entfernen
function removeFromBasket(index) {
  basketContent.splice(index, 1);
  renderBasket();
}

// Zwischensumme und Gesamtpreis aktualisieren
function updateTotals() {
  let subtotal = 0;
  const subtotalDisplay = document.getElementById("subtotal");
  const totalDisplay = document.getElementById("total");

  for (let i = 0; i < basketContent.length; i++) {
    subtotal += basketContent[i].price * basketContent[i].amount;
  }
//Lieferkosten
  let total = subtotal + 5;

  subtotalDisplay.textContent = `Zwischensumme: ${subtotal.toFixed(2)} €`;
  totalDisplay.textContent = `Gesamt: ${total.toFixed(2)} €`;
}
