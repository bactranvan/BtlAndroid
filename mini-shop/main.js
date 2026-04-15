const products = [
    {id: 1, name: "áo thun", price: 100 },
    {id: 2, name: "quần jean", price: 200 },
    {id: 3, name: "giày thể thao", price: 300 },
    {id: 4, name: "mũ lưỡi trai", price: 50 },
    {id: 5, name: "túi xách", price: 150  },
    {id: 6, name: "đồng hồ", price: 400 },
    {id: 7, name: "kính mát", price: 80 },
    {id: 8, name: "áo khoác", price: 250 },
    {id: 9, name: "váy", price: 120 },
    {id: 10, name: "giày cao gót", price: 350 }
];

const productList = document.getElementById("product-list");
products.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
        <h3>${product.name}</h3>
        <p>Giá: ${product.price} USD</p>
        <button>thêm vào giỏ</button>
    `;
    productList.appendChild(div);
});
