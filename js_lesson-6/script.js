

for (let btn of document.getElementsByClassName('addToCart')) {
  btn.addEventListener('click', function () {

    addToCart(1, btn.dataset.name, btn.dataset.price);
    refreshCart();
  });
}

let cart = [];
    let addToCart = function(amount, product, price) {

      let existingProduct = false;

      for (let i = 0; i < cart.length; i++) {
        if (cart[i]['product'] === product) {
          existingProduct = i;
        }
      }

      if (existingProduct !== false) {
        cart[existingProduct]['amount'] += amount;

      } else {
        cart.push({
            'amount' : amount,
            'product' : product,
            'price' : price,
        });
      }

      refreshCart();
    }

    let refreshCart = function() {
      let cartElement = document.getElementById('cart');
      let countBasketPrice = 0;

      let html = '';

      for (let i = 0; i < cart.length; i++) {
          countBasketPrice += cart[i]['amount'] * cart[i]['price'];
          html += '<div>' + cart[i]['product'] + ' ' + cart[i]['amount'] + ' ' + (cart[i]['amount'] * cart[i]['price']) + '€</div>';
      }

      html += '<div>Total : ' + countBasketPrice + '€</div>';

      cartElement.innerHTML = html;
    }
    
