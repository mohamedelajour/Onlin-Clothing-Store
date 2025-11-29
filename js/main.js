
const productsData = [
  {id: 1, name: " T-shirt F11",image: "img/il_1080xN.6076131955_558v.jpg"},
  {id: 2, name: " T-shirt F12",image: "img/R.jpg"},
  {id: 3, name: " T-shirt F13",image: "img/owct0bh8m9941.webp"},
  {id: 4, name: " T-shirt F14",image: "img/16384239129446724ab82c05d4cbac8d12c3e944c6_thumbnail_405x552.jpg"},
  {id: 5, name: " P-jeans H101",image: "img/135-151019-fashionable-trousers-wide-leather-2.png"},
  {id: 6, name: " P-jeans H102",image: "img/2ddddaadd1a24a98b8c50180be5a8ed9.webp"},
  {id: 7, name: " P-jeans H103",image: "img/c83620e7c3041d70a4efd0b4a6178117.jpg"},
  {id: 8, name: " P-jeans H104",image: "img/A3632AX_23SM_NM28_01_01.avif"},
  {id: 9, name: " Sneakers XL",image: "img/Swift_Run_Shoes_Black_ID4981_01_standard.avif"},
  {id: 10, name: " Sneakers XM",image: "img/1916717260_zm.jpg"},
  {id: 11, name: " Sneakers XX",image: "img/nike-precision-5-basketball-shoes.jpg"},
  {id: 12, name: " Sneakers 3X",image: "img/shopping.webp"},


];

let cart = [];

const productsDiv = document.getElementById("products");
const cartContainer = document.getElementById("cart-container");
const cartProductsDiv = document.getElementById("cart-products");
const openCartBtn = document.getElementById("open-cart");
const sendWhatsAppBtn = document.getElementById("send-whatsapp");
const backBtn = document.getElementById("back");
//const searchInput = document.getElementById("search");
const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("search-btn");


function renderProducts(products) {
  productsDiv.innerHTML = "";
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    
    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;
    
    const info = document.createElement("div");
    info.className = "product-info";
    const nameSpan = document.createElement("span");
    nameSpan.textContent = product.name;
    
    const addBtn = document.createElement("button");
    addBtn.textContent = "ضيف في السلة";
    addBtn.onclick = () => {
      cart.push(product);
      updateCartButton();
    };
    
    info.appendChild(nameSpan);
    info.appendChild(addBtn);
    
    card.appendChild(img);
    card.appendChild(info);
    
    productsDiv.appendChild(card);
  });
}

function updateCartButton() {
  openCartBtn.textContent =   (cart.length);
  openCartBtn.innerHTML +="🛒"

}

openCartBtn.onclick = () => {
  productsDiv.style.display = "none";
  openCartBtn.style.display = "none";
  cartContainer.style.display = "block";
  renderCart();
};

backBtn.onclick = () => {
  productsDiv.style.display = "grid";
  openCartBtn.style.display = "block";
  cartContainer.style.display = "none";
};

sendWhatsAppBtn.onclick = () => {
  if(cart.length === 0){
    alert("السلة فاضية!");
    return;
  }
  const message = cart.map(item => item.name).join("%0A");
  const phone = "201289258622";
  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
};

function renderCart() {
  cartProductsDiv.innerHTML = "";
  cart.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    
    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;
    
    const nameSpan = document.createElement("span");
    nameSpan.textContent = product.name;
    
    card.appendChild(img);
    card.appendChild(nameSpan);
    
    cartProductsDiv.appendChild(card);
  });
}

// البحث
searchBtn.addEventListener("click", () => {
  const filtered = productsData.filter(p => 
    p.name.toLowerCase().includes(searchInput.value.toLowerCase())
  );
  renderProducts(filtered);
});

// Initial render
renderProducts(productsData);