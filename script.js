const kirim = document.querySelector(".btnKirim");
const loading = document.querySelector(".btnLoading");
const myAlert = document.querySelector(".alert");
kirim.addEventListener("click", function () {
  kirim.classList.toggle("d-none");
  loading.classList.toggle("d-none");
});
const scriptURL = "https://script.google.com/macros/s/AKfycby6ncodMdnZMwdmlKCUXM5Q3OEbCHYBF9Riz8r9e09bPQ7psd_CIQo76jT6fgLjpcgT/exec";
const form = document.forms["submit-to-google-sheet"];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      kirim.classList.toggle("d-none");
      loading.classList.toggle("d-none");
      myAlert.classList.toggle("d-none");
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
