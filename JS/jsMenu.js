window.addEventListener("load", function () {

    //list menu
    const conMenu = document.querySelectorAll('.content-menu');

    conMenu.forEach(contentMenu => {
        const nextButton = contentMenu.querySelector('.click-next');
        const prevButton = contentMenu.querySelector('.click-prev');
        const contentList = contentMenu.querySelector('.content-list');
        let items = contentList.querySelectorAll('.items');
        let autoSlideInterval;

        //bat su kien khi dang click prev hoac next
        function startAutoSlide() {
            autoSlideInterval = setInterval(function () {
                nextButton.click();
            }, 4000);
        }

        function stopAutoSlide() {
            clearInterval(autoSlideInterval);
        }

        nextButton.addEventListener("click", function () {
            stopAutoSlide();
            const firstItem = contentList.removeChild(items[0]);
            contentList.appendChild(firstItem);
            items = contentList.querySelectorAll('.items');
            startAutoSlide();
        });

        prevButton.addEventListener("click", function () {
            stopAutoSlide();
            const lastItem = contentList.removeChild(items[items.length - 1]);
            contentList.insertBefore(lastItem, items[0]);
            items = contentList.querySelectorAll('.items');
            startAutoSlide();
        });

        //tu chuyen doi
        startAutoSlide();

        // Bat su kien khi re chuot len san pham
        items.forEach(item => {
            item.addEventListener('mouseover', function () {
                stopAutoSlide();
            });

            item.addEventListener('mouseout', function () {
                startAutoSlide();
            });
        });
    });

    //Menu add cart
    const addToCart = document.querySelectorAll('.items a');
    const h3Cart = document.querySelector('#tab h3');
    const orderCart = document.querySelector('.order');
    const tabCart = document.getElementById('tabcart');

    if (h3Cart) {
        orderCart.style.display = 'none';
    }

    addToCart.forEach((button) => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            
            const item = button.parentElement;
            const productName = item.querySelector('h3').textContent;
            const productPrice = item.querySelector('h4 > b').textContent;
            
            // Check product
            const Product = document.querySelector(`#tabcart div[data-name="${productName}"]`);
            if (Product) {
                const quantityElement = Product.querySelector('.quantity');
                const newQuantity = parseInt(quantityElement.textContent) + 1;

                const priceElement = Product.querySelector('.cart-price');
                const newPrice = (parseInt(priceElement.textContent) / parseInt(quantityElement.textContent) * newQuantity).toFixed(3);

                updateCartInStorage(productName, newPrice, newQuantity);

                priceElement.textContent = newPrice;
                quantityElement.textContent = newQuantity;
            } else {
                const cart = document.createElement('div');
                cart.setAttribute('data-name', productName);
                cart.innerHTML = `
                    <span class="cart-name">${productName}</span> - 
                    <span class="cart-price">${productPrice}</span><span>vnđ</span> - 
                    Quantity: <span class="quantity">1</span>
                    <button class="delete-button">Delete</button>
                `;
                
                if (h3Cart) {
                    h3Cart.style.display = 'none';
                    orderCart.style.display = 'block';
                }

                saveCartToStorage(productName, productPrice, 1);
                tabCart.insertBefore(cart, tabCart.lastElementChild);

                const deleteButton = cart.querySelector('.delete-button');
                deleteButton.addEventListener('click', function() {
                    cart.remove();
                    removeFromStorage(productName);

                    if (tabCart.children.length < 1) {
                        h3Cart.style.display = 'block';
                        orderCart.style.display = 'none';
                    }
                });
            }
        });
    });

    function saveCartToStorage(productName, productPrice, quantity) {
        const cart = JSON.parse(localStorage.getItem('cart')) || {};
        cart[productName] = { price: productPrice, quantity: quantity };
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    
    function updateCartInStorage(productName, newPrice, newQuantity) {
        const cart = JSON.parse(localStorage.getItem('cart'));
        if (cart && cart[productName]) {
            cart[productName].price = newPrice;
            cart[productName].quantity = newQuantity;
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }
    
    function removeFromStorage(productName) {
        const cart = JSON.parse(localStorage.getItem('cart'));
        if (cart && cart[productName]) {
            delete cart[productName];
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }

})
