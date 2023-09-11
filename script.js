const productsContanier = document.getElementById("productsContanier");
const categoriesContanier = document.getElementById("categoriesContanier");
//create  a loader
const loader = document.createElement("div");
loader.innerText = "Loading...";
loader.className = "loader";

document.body.appendChild(loader);

function renderProducts(products) {
  const productElements = products.map((p) => {
    const product = document.createElement("div");
    product.className = "product";
    const productImg = document.createElement("img");
    productImg.className = "productImg";
    const productTitle = document.createElement("p");
    productTitle.className = "productTitle";
    productImg.src = p.image;
    productTitle.innerText = p.title;

    product.append(productImg, productTitle);

    return product;
  });
  productsContanier.append(...productElements);
  console.log(productElements);
}

function renderCategories(categories) {
  const categoriesElements = categories.map((c) => {
    const categoryButton = document.createElement("button");
    categoryButton.innerText = c;
    categoryButton.className = "categoryButton";
    return categoryButton;
  });
  categoriesContanier.append(...categoriesElements);
}

fetch("https://fakestoreapi.com/products/categories")
  .then((res) => res.json())
  .then((json) => renderCategories(json));

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => {
    renderProducts(json);
    setTimeout(() => {
      document.body.removeChild(loader);
    });
  });
