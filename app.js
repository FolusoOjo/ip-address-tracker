const searchInput = document.getElementById("searchInput");
const btn = document.getElementById("btn");
const ipdetails = document.getElementById("ipdetails");
const Address = document.getElementById("Address");
const loca = document.getElementById("location");
const timeZone = document.getElementById("timeZone");
const ISP = document.getElementById("ISP");

var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

btn.addEventListener("click", () => {
  searchInput.textContent = "";
  let search = searchInput.value;
  console.log(search);
  ipdetails.style.width = "65%";

  fetch(
    `https://geo.ipify.org/api/v2/country?apiKey=at_D8CKBbVOOmN6WEzLqi01Ok5WhY8ZX&ipAddress=${search}`
  )
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      Address.textContent = data.ip;
      loca.textContent =
        data.location.region +
        ", " +
        data.location.country +
        ", " +
        data.as.asn;
      timeZone.textContent = data.location.timezone;
      ISP.textContent = data.isp;
    });
});
