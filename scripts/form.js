// ============ YEAR & LAST MODIFIED ============
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = new Date(document.lastModified);
document.getElementById("lastModified").textContent =
  "Last Modification: " + lastModified.toLocaleString();


// ============ PRODUCT LIST (only if select exists) ============
const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

const productSelect = document.querySelector("#product");

if (productSelect) {
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
}


// ============= REVIEW COUNTER (runs only on review.html) =============
// Only count if URL has a query string (we came from the form)
if (window.location.pathname.includes("review.html") && window.location.search.length > 0) {
    let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;
    reviewCount++;
    localStorage.setItem("reviewCount", reviewCount);

    const counterElement = document.getElementById("review-counter");
    if (counterElement) {
        counterElement.textContent = reviewCount;
    }
}


