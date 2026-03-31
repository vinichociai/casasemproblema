const input = document.getElementById("searchInput");
const products = document.querySelectorAll(".product");
const noResults = document.getElementById("noResults");

input.addEventListener("keyup", function () {
  const value = this.value.toLowerCase().trim();

  let found = false;

  products.forEach((product) => {
    const text = product.innerText.toLowerCase();

    if (text.includes(value)) {
      product.style.display = "flex";
      found = true;
    } else {
      product.style.display = "none";
    }
  });

  // Se não encontrou nada
  if (!found && value !== "") {
    noResults.style.display = "block";
  } else {
    noResults.style.display = "none";
  }
});