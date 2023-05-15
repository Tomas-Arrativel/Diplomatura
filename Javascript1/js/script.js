"use strict";

//  Ejercicio 1
const medioTransporte = (distance) => {
  switch (distance >= 0) {
    case distance < 1000:
      console.log("Pie");
      break;
    case distance >= 1000 && distance < 10000:
      console.log("Bicicleta");
      break;
    case distance >= 10000 && distance < 30000:
      console.log("colectivo");
      break;
    case distance >= 30000 && distance <= 100000:
      console.log("auto");
      break;
    case distance > 100000:
      console.log("avion");
      break;
  }
};
medioTransporte(500);
medioTransporte(1100);
medioTransporte(29999);
medioTransporte(40000);
medioTransporte(120000);

//  Ejercicio 2
const numeroMayor = (arr) => {
  let mayor = 0;

  for (let i = 0; i < arr.length; i++) {
    arr[i] >= mayor ? (mayor = arr[i]) : mayor;
  }

  console.log(mayor);
};

numeroMayor([23, 21, 50, 3, 55, 99]);
