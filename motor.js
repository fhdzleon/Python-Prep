const calculoMotor = (tipoNomina, fechaPrimerEmpleo, genero) => {
  const fechaSolicitud = new Date();

  /*
Definimos los meses trabajados
*/

  const meses =
    (fechaSolicitud.getFullYear() - fechaPrimerEmpleo.getFullYear()) * 12 +
    (fechaSolicitud.getMonth() - fechaPrimerEmpleo.getMonth());

  console.log(meses);

  /* Convertimos el tipoNomina en un indice para recorrer las matrices */

  const tipoNominaMap = {
    A: 0,
    B: 1,
    C: 2,
    D: 3,
  };

  const tipoNominaIndex = tipoNominaMap[tipoNomina];

  if (tipoNominaIndex === undefined) {
    throw new Error("Tipo de nomina no valido");
  }

  /*
    Definimos las matricices de minimos y maximos segun el genero
    */

  const montosMinimosMasculino = [
    [100, 1000, 400, 400],
    [400, 600, 200, 300],
    [900, 1000, 200, 500],
    [100, 1000, 1000, 900],
    [600, 1000, 600, 1000],
  ];

  const montosMinimosFemenino = [
    [800, 800, 200, 500],
    [800, 700, 900, 1000],
    [800, 100, 700, 600],
    [600, 600, 800, 400],
    [200, 700, 100, 700],
  ];

  const montosMaximosMasculino = [
    [4900, 4700, 5000, 4400],
    [4700, 4400, 4700, 4700],
    [4600, 5000, 5000, 4300],
    [4600, 4400, 4200, 4900],
    [4500, 4900, 4600, 4300],
  ];

  const montosMaximosFemenino = [
    [4000, 4700, 4600, 5000],
    [4200, 4200, 4900, 4900],
    [4100, 4500, 4600, 4700],
    [4200, 4300, 4700, 5000],
    [4500, 4400, 4000, 4300],
  ];

  /* 
  Definir minimos y maximos segun genero y meses de antiguedad*/

  let montoMinimo, montoMaximo;

  if (genero === "m") {
    if (meses < 26) {
      montoMinimo = montosMinimosMasculino[0][tipoNominaIndex];
      montoMaximo = montosMaximosMasculino[0][tipoNominaIndex];
    } else if (meses === 27) {
      montoMinimo = montosMinimosMasculino[1][tipoNominaIndex];
      montoMaximo = montosMaximosMasculino[1][tipoNominaIndex];
    } else if (meses === 28) {
      montoMinimo = montosMinimosMasculino[2][tipoNominaIndex];
      montoMaximo = montosMaximosMasculino[2][tipoNominaIndex];
    } else if (meses === 29) {
      montoMinimo = montosMinimosMasculino[3][tipoNominaIndex];
      montoMaximo = montosMaximosMasculino[3][tipoNominaIndex];
    } else {
      montoMinimo = montosMinimosMasculino[4][tipoNominaIndex];
      montoMaximo = montosMaximosMasculino[4][tipoNominaIndex];
    }
  } else {
    if (meses < 24) {
      montoMinimo = montosMinimosFemenino[0][tipoNominaIndex];
      montoMaximo = montosMaximosFemenino[0][tipoNominaIndex];
    } else if (meses === 25) {
      montoMinimo = montosMinimosFemenino[1][tipoNominaIndex];
      montoMaximo = montosMaximosFemenino[1][tipoNominaIndex];
    } else if (meses === 26) {
      montoMinimo = montosMinimosFemenino[2][tipoNominaIndex];
      montoMaximo = montosMaximosFemenino[2][tipoNominaIndex];
    } else if (meses === 27) {
      montoMinimo = montosMinimosFemenino[3][tipoNominaIndex];
      montoMaximo = montosMaximosFemenino[3][tipoNominaIndex];
    } else {
      montoMinimo = montosMinimosFemenino[4][tipoNominaIndex];
      montoMaximo = montosMaximosFemenino[4][tipoNominaIndex];
    }
  }

  /* Calculo de p1 y p2 */

  const p1 = montoMinimo + Math.sqrt(montoMaximo - montoMinimo);
  const p2 = montoMinimo + 0.0175 * (montoMaximo - montoMinimo);

  /* Credito optimo */

  const lineaCreditoOptima = Math.max(p1, p2);

  /*Retornamos los resultados en el formato solicitado */

  return {
    montoMinimo: montoMinimo,
    montoMaximo: montoMaximo,
    recomendacionLinea: lineaCreditoOptima,
  };
};

console.log(calculoMotor("A", new Date("2022/06/12"), "f"));
console.log(calculoMotor("B", new Date("1993/12/30"), "f"));
console.log(calculoMotor("C", new Date("2020/09/19"), "m"));
console.log(calculoMotor("D", new Date("2019/01/15"), "m"));
