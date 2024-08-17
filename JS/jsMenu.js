window.addEventListener("load", function () {
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
    
//     let p = this.document.querySelector(".show-cart")
//     let add = this.document.querySelectorAll(".add-cart");
//     for (let i of add) {
//         i.addEventListener("click", function (e) {
//             e.preventDefault();
//             let name = document.getElementById("name-pro").value;
//             let price = document.getElementById("price-pro").value;
//             let image = document.getElementById("img-pro").value;

//             let h = `
//                 <div class="product">
//                     <div>
//                         <img src="${image}" alt="${name}" />
//                         <h2>${name}</h2>
//                         <div class="price">${price}<sup>đ</sup></div>
//                         <a href="#" class="close">&times;</a>
//                     </div>
//                 </div>
//             `;
//             p.innerHTML = p.innerHTML + h;
//         })
//     }
})

// // Function to add a new item
// function addItem() {
//     const newItem = document.createElement('div');
//     newItem.classList.add('items');
//     newItem.innerHTML = `
//         <img src="menu-3.jpg">
//         <h4>New Coffee</h4>
//         <a href="#" class="btn">add to cart</a>
//     `;
//     contentList.appendChild(newItem);
//     items = document.querySelectorAll('.items'); // Update the NodeList
// }

// // Example of adding a new item
// addItem();
