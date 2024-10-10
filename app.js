const searchInput = document.getElementById("searchInput");
const ipdetails = document.getElementById("ipdetails");

searchInput.addEventListener("click", () => {
  ipdetails.innerHTML = "";
  let search = searchInput.value;

  fetch(`http://ip-api.com/json/{search}`)
    .then((data) => data.json())
    .then((data) => {});
});
