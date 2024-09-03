window.onload = function init_main() {
	$(window).scroll(function(){
		var y = $(this).scrollTop();
		$("#goToTop").toggleClass('slide-up', y > 400);

	});
	
	$("#goToTop").click(function(){
		$("html, body").animate({
			scrollTop: 0
		}, 900)
	})

	$(document).ready(function() {
        $("a.delay-link").click(function(event) {
            event.preventDefault();
            var url = $(this).attr("href");
            setTimeout(function() {
                window.location.href = url;
            }, 500);
        });
    });

	// load local storage
	$(document).ready(function() {
		const cartData = localStorage.getItem('cart');
		const tabCart = $('#tabcart');
		const h3Cart = $('#tab h3');
		const orderCart = $('.order');

		if (cartData) {
			const cart = JSON.parse(cartData);

			// Xóa tiêu đề "No product" và hiển thị nút "Order now"
			if (h3Cart) {
				h3Cart.remove();
				orderCart.show();
			}

			// Hiển thị các sản phẩm trong giỏ hàng
			$.each(cart, function(productName, product) {
				const cartItem = `
					<div data-name="${productName}">
						<span class="cart-name">${productName}</span> - 
						<span class="cart-price">${product.price}</span> - 
						Quantity: <span class="quantity">${product.quantity}</span>
						<button class="delete-button">Delete</button>
					</div>
				`;
				tabCart.append(cartItem);
			});

			// Thêm sự kiện xóa cho các nút xóa sản phẩm
			$('.delete-button').click(function() {
				const itemDiv = $(this).closest('div[data-name]');
				const productName = itemDiv.data('name');

				// Xóa sản phẩm khỏi localStorage
				delete cart[productName];
				localStorage.setItem('cart', JSON.stringify(cart));

				// Xóa sản phẩm khỏi giao diện
				itemDiv.remove();

				// Nếu giỏ hàng trống, hiển thị lại "No product"
				if ($.isEmptyObject(cart)) {
					tabCart.html('<h3>No product</h3>');
					orderCart.hide();
				}
			});
		}
	});
}