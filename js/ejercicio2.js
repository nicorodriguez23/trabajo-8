const palabras = ["arbusto", "reloj", "cueva", "argentina", "montañas", "internet", "maquinaria", "videojuego", "aconcagua", "zapatillas", "dos"]; 

const palabrasLargas = palabras.filter(palabra => palabra.length > 5);

console.log("Palabras con más de 5 letras:", palabrasLargas);