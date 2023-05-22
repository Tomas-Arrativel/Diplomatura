/* Ejercicio 1 */
const botones = document.querySelectorAll("div");
const body = document.querySelector("body");

botones.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (btn.innerText === "Azul") body.style.backgroundColor = "#1654f1";
    else if (btn.innerText === "Verde") body.style.backgroundColor = "#03aa03";
    else body.style.backgroundColor = "#d72d2d";
  });
});

//Ejercicio 2
const textarea = document.querySelector("textarea");

let contador = 1;

setInterval(() => {
  if (contador <= 20) textarea.value += `${contador++} `;
}, 1000);

//Ejercico 3
var alumnos = [
  {
    nombre: "Juan Gomez",
    nota: 7,
  },
  {
    nombre: "Pedro Rodriguez",
    nota: 4,
  },
  {
    nombre: "Roxana García",
    nota: 8,
  },
  {
    nombre: "Luciano Lopez",
    nota: 5,
  },
  {
    nombre: "Fernanda Gimenez",
    nota: 6,
  },
  {
    nombre: "Florencia Martinez",
    nota: 10,
  },
  {
    nombre: "Raul Sanchez",
    nota: 7,
  },
  {
    nombre: "Sandra Figueroa",
    nota: 8,
  },
];

const alumnosAprobados = alumnos.filter((alumno) => alumno.nota >= 7);

console.log(alumnosAprobados);
// Juan Gomez, Roxana García, Florencia Martinez, Raul Sanchez, Sandra Figueroa
