function init() {
    for (let i = 0; i < dishes.length-2; i++) {
        renderDishesTemp(i,"dishlist");
    }
    for (let i = dishes.length - 2; i < dishes.length; i++) {
        renderDishesTemp(i,"dessertlist");
        
    }
}

function addDish() {
    console.log("funkt");
}