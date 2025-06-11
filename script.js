
document.getElementById("lesMerBtn").addEventListener("click", function () {
  document.getElementById("land").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("seTurerBtn").addEventListener("click", function () {
  document.getElementById("land").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("tilbud").addEventListener("click", function () {
  document.getElementById("rabatt").scrollIntoView({ behavior: "smooth" });
});

document.getElementById('kontaktSkjema').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('successMessage').style.display = 'block';
  this.reset();
});
