// Sacar el total de ingresos
// Sacar el total de extracciones
// Un saldo total (ingresos - extracciones)
// (sumado a la tarea que está al final de index.js)

const movimientos = [
  {
    tipo: "ingreso",
    monto: 5000,
  },
  {
    tipo: "ingreso",
    monto: 300,
  },
  {
    tipo: "extraccion",
    monto: 500,
  },
  {
    tipo: "ingreso",
    monto: 300,
  },
  {
    tipo: "extraccion",
    monto: 1000,
  },

  {
    tipo: "ingreso",
    monto: 500,
  },
  {
    tipo: "ingreso",
    monto: 500,
  },
  {
    tipo: "ingreso",
    monto: 500,
  },
  {
    tipo: "extraccion",
    monto: 2000,
  },
  {
    tipo: "ingreso",
    monto: 500,
  },
  {
    tipo: "extraccion",
    monto: 500,
  },
];

const botonTransacciones = document.getElementById("transacciones");
botonTransacciones.addEventListener("click", ejecutarCalculos);

function ejecutarCalculos() {
  const totalIngresos = efectuarSuma("ingreso");
  const totalEgresos = efectuarSuma("extraccion");
  const total = totalIngresos - totalEgresos;

  mostrarEnHTML(total, "total");

  console.log(`El monto real es: ${totalIngresos - totalEgresos}`);
}

function efectuarSuma(parametro) {
  let suma = 0;

  movimientos.forEach((element) => {
    if (element.tipo == parametro) suma += element.monto;
  });

  mostrarEnHTML(suma, parametro);

  return suma;
}

function mostrarEnHTML(valor, etiqueta) {
  switch (etiqueta) {
    case "ingreso":
      const labelIngresos = document.getElementById("muestraIngresos");
      labelIngresos.innerHTML = valor;
      break;
    case "extraccion":
      const labelEgresos = document.getElementById("muestraEgresos");
      labelEgresos.innerHTML = valor;
      break;
    default:
      const labelTotal = document.getElementById("muestraTotal");
      labelTotal.innerHTML = valor;
  }
}
