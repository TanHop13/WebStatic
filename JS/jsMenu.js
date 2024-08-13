const prevButton = document.querySelector('.click-prev');
const nextButton = document.querySelector('.click-next');
const contentList = document.querySelector('.content-list');
let items = document.querySelectorAll('.items');

function rotateItems() {
    const firstItem = contentList.removeChild(items[0]);
    contentList.appendChild(firstItem);
    items = document.querySelectorAll('.items'); // Update the NodeList
}

function reverseRotateItems() {
    const lastItem = contentList.removeChild(items[items.length - 1]);
    contentList.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll('.items'); // Update the NodeList
}

prevButton.addEventListener('click', () => {
    reverseRotateItems();
});

nextButton.addEventListener('click', () => {
    rotateItems();
});

// Automatically rotate items every 5 seconds
setInterval(() => {
    rotateItems();
}, 5000);

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
