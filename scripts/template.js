function renderDishesTemp(i,id) {
    let dishBox = document.getElementById(id)
        dishBox.innerHTML += `
                    <div class="for-order">
                    <div class="dish-content">
                        <p class="dish-name">${dishes[i].name}</p>
                        <p class="dish-description">${dishes[i].description}</p>
                        <p class="dish-price">${dishes[i].price}</p>
                    </div>
                    <div>
                    <img onclick="addDish()" src="./assets/icon/add_sign.png" alt="Add button">
                    </div>
                    </div>
                    <div class="space"></div>`;
}