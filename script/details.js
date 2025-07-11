const year = document.getElementById("spanYear");
year.innerText = new Date().getFullYear();

console.log(location.search);

const params = new URLSearchParams(window.location.search);
const productId = params.get("productId");

if (productId) {
  fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwY2Q1MTc4Y2RkZjAwMTU1ZDY3ZDAiLCJpYXQiOjE3NTIyMjMwNTcsImV4cCI6MTc1MzQzMjY1N30.zOyWZpZDPihhX3zz-5-bg3JhIiAXIHWV7yiBZXQWuYo",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(" Errore nel recupero dei dettagli");
      }
    })
    .then((productDetails) => {
      document.getElementById("spinner-container").classList.add("d-none");
      document.querySelector(".card .card-title").innerText =
        productDetails.name;
      document.querySelector(".card .card-text:nth-of-type(1)").innerText =
        productDetails.description;
      document.querySelector(
        ".card .card-text:nth-of-type(2)"
      ).innerText = `€${productDetails.price}`;
      document.querySelector(".card-img-top").src = productDetails.imageUrl;
      document.querySelector(".card-img-top").alt = productDetails.name;
    })
    .catch((error) => {
      console.error(" Errore:", error);
    });
} else {
  console.error(" Nessun ID prodotto trovato nell’URL.");
}
