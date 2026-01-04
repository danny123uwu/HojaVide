const cv = document.getElementById("cv");
const originalHTML = cv.innerHTML;

// Seleccionamos los botones por CLASE
const btnEs = document.querySelector(".btn-es");
const btnEn = document.querySelector(".btn-en");

// Cambiar a INGLÉS
btnEn.addEventListener("click", () => {
  fetch("languages/en.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("No se pudo cargar el idioma inglés");
      }
      return response.json();
    })
    .then(data => {
      cv.innerHTML = data.html;
    })
    .catch(error => {
      console.error(error);
    });
});

// Volver a ESPAÑOL
btnEs.addEventListener("click", () => {
  cv.innerHTML = originalHTML;
});
