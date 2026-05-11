document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("artikel-container");

  fetch("artikel.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((artikel) => {
        const card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `
          <h2 style="margin-bottom: 8px">${artikel.judul}</h2>
          <h5 style="margin: 0px; padding: 0px;">${artikel.tanggal}</h5>
          <p>${artikel.isi}</p>
        `;

        container.appendChild(card);
      });
    });
});
