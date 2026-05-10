document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("artikel-container");

  fetch("artikel.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((artikel) => {
        const card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `
          <h2>${artikel.judul}</h2>
          <p>${artikel.isi}</p>
        `;

        container.appendChild(card);
      });
    });
});
