var number = 0;
var numberElement = document.getElementById('quantity');

document.getElementById('buy-button').addEventListener('click', function() {
  number++;
  updateQuantity();
  showPurchaseMessage();
});

document.getElementById('delete-button').addEventListener('click', function() {
  if (number> 0) {
    number--;
    updateQuantity();
  }
});

function updateQuantity() {
  numberElement.textContent = number;
}

function showPurchaseMessage() {
  alert("Compra realizada!");
}
