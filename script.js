const input = document.getElementById("searchInput");
const container = document.getElementById("productsContainer");
const noResults = document.getElementById("noResults");

// 🔥 Renderizar produtos
function renderProducts(list) {
  container.innerHTML = "";

  list.forEach((product) => {
    const card = document.createElement("a");
    card.className = "product";

    // 🔥 PRIORIDADE: link > page
    const url = product.link ? product.link : product.page;

    card.href = url;

    // 🔥 Se for link externo, abre fora (ajuda no TikTok)
    if (product.link) {
      card.target = "_blank";
      card.rel = "noopener noreferrer";
    }

    card.innerHTML = `
      <img src="${product.image}">
      <div class="text">${product.name}</div>
    `;

    container.appendChild(card);
  });
}

// Inicial
renderProducts(productsData);

// 🔍 Busca
input.addEventListener("keyup", function () {
  const value = this.value.toLowerCase().trim();

  const filtered = productsData.filter((product) =>
    product.name.toLowerCase().includes(value)
  );

  renderProducts(filtered);

  if (filtered.length === 0 && value !== "") {
    noResults.style.display = "block";
  } else {
    noResults.style.display = "none";
  }
});