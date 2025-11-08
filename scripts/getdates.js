
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = new Date(document.lastModified);
document.getElementById("lastModified").textContent =
  "Last Modification: " + lastModified.toLocaleString();