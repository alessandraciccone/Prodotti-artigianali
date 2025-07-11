const year = document.getElementById("spanYear");
year.innerText = new Date().getFullYear();

class Product {
  constructor(_name, _description, _brand, _imageUrl, _price) {
    this.name = _name;
    this.description = _description;
    this.brand = _brand;
    this.imageUrl = _imageUrl;
    this.price = _price;
  }
}

const productForm = document.getElementById("product-form");

productForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameForm = document.getElementById("name");
  const descriptionForm = document.getElementById("description");
  const brandForm = document.getElementById("brand");
  const imgForm = document.getElementById("img");
  const priceForm = document.getElementById("price");

  const productToSave = new Product(
    nameForm.value,
    descriptionForm.value,
    brandForm.value,
    imgForm.value,
    priceForm.value
  );

  console.log(" Prodotto creato:", productToSave);

  postProduct(productToSave);
});

const postProduct = function (productToSave) {
  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwY2Q1MTc4Y2RkZjAwMTU1ZDY3ZDAiLCJpYXQiOjE3NTIyMjMwNTcsImV4cCI6MTc1MzQzMjY1N30.zOyWZpZDPihhX3zz-5-bg3JhIiAXIHWV7yiBZXQWuYo",
    },
    body: JSON.stringify(productToSave),
  })
    .then((res) => res.json())
    .then((data) => console.log(" Prodotto salvato:", data))
    .catch((err) => console.error(" Errore:", err));
};
