$(document).ready(function() {
    $(".tab-content > div").hide();

    $(".list a").click(function(e) {
        e.preventDefault();

        var currentTab = $(this).attr("href");

        if ($(currentTab).is(":visible")) {
            $(currentTab).fadeOut();
        } else {
            $(".tab-content > div").fadeOut();
            $(currentTab).fadeIn();
        }
    });

    $(".order").click(function(e) {
        e.preventDefault();

        let name = prompt("Please enter your name", "Name");
        if (name === null || name.trim() === "") {
            alert("Xác nhận hủy");
            return;
        }

        let phone = prompt("Please enter your phone", "0**");
        if (phone === null || phone.trim() === "") {
            alert("Xác nhận hủy");
            return;
        }

        let email = prompt("Please enter your email", "add@example.com");
        if (email === null || email.trim() === "") {
            alert("Xác nhận hủy");
            return;
        }

        if (confirm("Xác nhận order?")) {
            const cartData = localStorage.getItem('cart');
            let cart = {};
            if (cartData) {
                cart = JSON.parse(cartData);

                let phonePattern = /^[0-9]{10,11}$/;
                if (!phonePattern.test(phone)) {
                    alert("Dữ liệu nhập không hợp lệ (Phone)");
                    return;
                }
                let cartString = Object.entries(cart)
                        .map(([productName, details]) => `${productName}: Price: ${details.price}, Quantity: ${details.quantity}`)
                        .join('\n');
                let params1 = {
                    name: name,
                    mail: email,
                    subject: "Order",
                    phone: phone,
                    message: cartString,
                    image_url: "",
                    error: ""
                }
                emailjs.send("service_lbqz8ae","template_jtdtn6g",params1).then(function (res) {
                    if (res.status === 200) {
                        alert("Chúng tôi đã nhận được order của bạn.");
                        localStorage.clear();
                        var div = document.getElementById("tabcart");
                        div.innerHTML = "";
                        const h3Cart = document.querySelector('#tab h3');
                        const orderCart = document.querySelector('.order');
                        h3Cart.style.display = 'block';
                        orderCart.style.display = 'none';
                    }
                    else {
                        alert("Hệ thống đang gặp lỗi. Mong bạn hãy thử lại lần sau.");
                    }
                })
            } else {
                alert("Không có sản phẩm nào được thêm vào giỏ");
            }
        } else {
            alert("Xác nhận hủy");
        }
    })
})