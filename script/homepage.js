const year = document.getElementById("spanYear");
year.innerText = new Date().getFullYear();

//chiamata get per vedere se tutto ok
const products = function () {
  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwY2Q1MTc4Y2RkZjAwMTU1ZDY3ZDAiLCJpYXQiOjE3NTIyMjMwNTcsImV4cCI6MTc1MzQzMjY1N30.zOyWZpZDPihhX3zz-5-bg3JhIiAXIHWV7yiBZXQWuYo",
    },
  })
    .then((response) => response.json())
    .then((food) => {
      console.log(food);

      const row = document.getElementById("row-food");
      if (food.length === 0) {
        row.innerHTML = `
          <div class="col">
            <p class="text-center"> Non ci sono Prodotti disponibili</p>
          </div>
        `;
      } else {
        food.forEach((event) => {
          row.innerHTML += `
    <div class="col">
      <div class="card h-100 d-flex flex-column">
        <img src="${event.imageUrl}" class="card-img-top" alt="${event.name}" />
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${event.name}</h5>
          <p class="card-text flex-grow-1">${event.description}</p>
          <a href="./detail.html?eventId=${event._id}" class="btn btn-primary">Vai ai dettagli</a>
        </div>
      </div>
    </div>
  `;
        });
      }
    })

    .catch((error) => {
      console.error("Errore nella chiamata API:", error);
    });
};

products();
