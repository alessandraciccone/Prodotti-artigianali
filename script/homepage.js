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
      <div class="card wh-50 d-flex flex-column gap-3 bg-dark text-white border border-1 border-white">
        <img src="${event.imageUrl}" class="card-img-top mt-1 h-100 m-auto" alt="${event.name}" />
        <div class="card-body h-100 d-flex flex-column">
          <h5 class="card-title">${event.name}</h5>
          <p class="card-text flex-grow-1">${event.description}</p>
          <a href="./detail.html?eventId=${event._id}" class="btn btn-warning mb-2">Vai ai dettagli</a>
          <button class="btn btn-danger" onclick="deleteProduct('${event._id}')">Elimina</button>
        </div>
      </div>

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
//funzioni per cancellare tre prodotti direttamente nell'array

const deleteProduct = function (id) {
  fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`, {
    method: "DELETE",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwY2Q1MTc4Y2RkZjAwMTU1ZDY3ZDAiLCJpYXQiOjE3NTIyMjMwNTcsImV4cCI6MTc1MzQzMjY1N30.zOyWZpZDPihhX3zz-5-bg3JhIiAXIHWV7yiBZXQWuYo",
    },
  })
    .then((response) => {
      if (response.ok) {
        console.log(" Prodotto eliminato con successo");
      } else {
        console.error(" Errore nella cancellazione");
      }
    })
    .catch((err) => console.error("Errore:", err));
};

deleteProduct("6870ddcc78cddf00155d6850");

//funzioni per eliminare i prodotti con il tasto elimina

const deleteProductByBtn = function (id) {
  fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`, {
    method: "DELETE",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwY2Q1MTc4Y2RkZjAwMTU1ZDY3ZDAiLCJpYXQiOjE3NTIyMjMwNTcsImV4cCI6MTc1MzQzMjY1N30.zOyWZpZDPihhX3zz-5-bg3JhIiAXIHWV7yiBZXQWuYo",
    },
  })
    .then((res) => {
      if (res.ok) {
        document.getElementById(`card-${id}`).remove();
      } else {
        console.error(" Errore nella cancellazione");
      }
    })
    .catch((err) => console.error("Errore:", err));
};
