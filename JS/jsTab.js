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

        if (confirm("Xác nhận order?")) {
            let phonePattern = /^[0-9]{10,11}$/;
            if (!phonePattern.test(phone)) {
				alert("Dữ liệu nhập không hợp lệ (Phone)");
				return;
            }
            let params1 = {
                name: name,
                mail: "",
                subject: "Order",
                phone: phone,
                message: "",
                image_url: "",
                error: ""
            }
            emailjs.send("service_lbqz8ae","template_jtdtn6g",params1).then(function (res) {
                if (res.status === 200) {
                    alert("Chúng tôi đã nhận được order của bạn.");
                }
                else {
                    alert("Hệ thống đang gặp lỗi. Mong bạn hãy thử lại lần sau.")
                }
            })
        } else {
            alert("Xác nhận hủy");
        }
    })
})