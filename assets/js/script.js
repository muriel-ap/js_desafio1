const precio = 400000;

const precioSpan = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector(".cantidad");
const valorTotalSpan = document.querySelector(".valor-total");
const botonMas = document.querySelector(".botonmas");
const botonMenos = document.querySelector(".botonmenos");

precioSpan.innerHTML = precio.toLocaleString();
let cantidad = 1;
valorTotalSpan.innerHTML = (cantidad * precio).toLocaleString();


botonMas.addEventListener("click", () => {
  cantidad++;
  cantidadSpan.innerHTML = cantidad;
  valorTotalSpan.innerHTML = (cantidad * precio).toLocaleString();
});


botonMenos.addEventListener("click", () => {
  if (cantidad > 1) {
   cantidad--;
   cantidadSpan.innerHTML = cantidad;
   valorTotalSpan.innerHTML = (cantidad * precio).toLocaleString();
  }
});