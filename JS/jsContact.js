let image = ''
// Kiểm tra file ảnh
document.getElementById('file').addEventListener('change', function(event) {
    const fileInput = event.target;
	const files = fileInput.files;
	const preview = document.getElementById('preview');
	
	// Xóa nội dung cũ của preview
	preview.innerHTML = '';

    if (files.length > 0) {
		const file = files[0];
		image = 1;

        if (file.type.startsWith('image/')) {
			image = file;

			const reader = new FileReader();
            reader.onload = function(e) {
				const fileContent = e.target.result;
                
                // Tạo phần tử img để hiển thị hình ảnh
                const img = document.createElement('img');
                img.src = fileContent;
                img.style.maxWidth = '100%'; // Giới hạn kích thước hiển thị
				img.style.height = 'auto';
				
				// Thêm hình ảnh mới vào phần preview
				preview.appendChild(img);
            };
            reader.readAsDataURL(file); // Đọc tệp dưới dạng URL dữ liệu
        } else {
			const message = document.createElement('p');
            message.textContent = 'Tệp được chọn không phải là hình ảnh.';
			preview.appendChild(message);
        }
    } else {
        console.log('Không có tệp nào được chọn.');
    }
});

//Send mail
function sendMail() {
	if (confirm("Xác nhận gửi email cho chúng tôi?")) {
		let name = document.getElementById("name").value;
		let mail = document.getElementById("mail").value;
		let sub = document.getElementById("subject").value;
		let phone = document.getElementById("phone").value;
		let mess = document.getElementById("desc").value;

		if (!name || !mail || !sub || !phone || !mess) {
			alert("Không thể bỏ trống như ô có dấu sao");
			return
		} else if (image === 1) {
			alert("Hình ảnh không hợp lệ!!!");
			return
		}
		else {
			// upload img cloudinary
			const formData = new FormData();
			formData.append('file', image);
			formData.append('upload_preset', 'ml_default'); 

			axios.post('https://api.cloudinary.com/v1_1/dvzsftuep/image/upload', formData)
				.then(response => {
					// wait url and send email to my
					const imageUrl = response.data.secure_url;
					let params1 = {
						name: name,
						mail: mail,
						subject: sub,
						phone: phone,
						message: mess,
						image_url: imageUrl,
						error: ""
					}
					emailjs.send("service_lbqz8ae","template_jtdtn6g",params1).then(function (res) {
						if (res.status !== 200) {
							alert("Hệ thống đang gặp lỗi. Mong bạn hãy thử lại lần sau.")
						}
					})
					})
				.catch(error => {
					// send mail to my but have error upload img
					const imageUrl = "";
					let params1 = {
						name: name,
						mail: mail,
						subject: sub,
						phone: phone,
						message: mess,
						image_url: imageUrl,
						error: error
					}
					emailjs.send("service_lbqz8ae","template_jtdtn6g",params1).then(function (res) {
						if (res.status !== 200) {
							alert("Hệ thống đang gặp lỗi. Mong bạn hãy thử lại lần sau.")
						}
					})
				});
			
			// send email to customer
			let params2 = {
				name: name,
				mail: mail,
				subject: sub,
				phone: phone,
				message: mess
			}
			emailjs.send("service_lbqz8ae","template_8hp6b2i",params2).then(function (res) {
				if (res.status === 200) {
					alert("Hệ thống đã ghi nhận mail của bạn. Trân thành cảm ơn!");
				}
				else {
					alert("Hệ thống đang gặp lỗi. Mong bạn hãy thử lại lần sau.")
				}
			})
		}
	} else {
		alert("Xác nhận đã huỷ gửi");
		return;
	}
}

function submitForm() {
    return false;
 }