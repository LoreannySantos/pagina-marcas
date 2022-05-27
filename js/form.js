
let checkspreg1 = document.getElementsByName("preg1")
let checkspreg2 = document.getElementsByName("preg2")
let checkspreg3 = document.getElementsByName("preg3")
let checkspreg4 = document.getElementsByName("preg4")
let checkspreg5 = document.getElementsByName("preg5")
let checkspreg6 = document.getElementsByName("preg6")
let checkspreg7 = document.getElementsByName("preg7")
let checkspreg8 = document.getElementsByName("preg8")
let checkspreg9 = document.getElementsByName("preg9")
let slider = document.getElementById("slider")
let fechaNac = document.getElementById("dtpNac")

checkspreg1.forEach(check => { check.addEventListener("click", () => { calculoPuntuacion(1, check.id) }) });
checkspreg2.forEach(check => { check.addEventListener("click", () => { calculoPuntuacion(2, check.id) }) });
checkspreg3.forEach(check => { check.addEventListener("click", () => { calculoPuntuacion(3, check.id) }) });
checkspreg4.forEach(check => { check.addEventListener("click", () => { calculoPuntuacion(4, check.id) }) });
checkspreg5.forEach(check => { check.addEventListener("click", () => { calculoPuntuacion(5, check.id) }) });
checkspreg6.forEach(check => { check.addEventListener("click", () => { calculoPuntuacion(6, check.id) }) });
checkspreg7.forEach(check => { check.addEventListener("click", () => { calculoPuntuacion(7, check.id) }) });
checkspreg8.forEach(check => { check.addEventListener("click", () => { calculoPuntuacion(8, check.id) }) });
checkspreg9.forEach(check => { check.addEventListener("click", () => { calculoPuntuacion(9, check.id) }) });
slider.addEventListener("click", () => { calculoPuntuacion(10, slider.value) });

let punts = []

function edadUsuario() {
  let today = new Date();
  let date = new Date(fechaNac.value);

  let diff = dateDiff(date, today);
  if (diff < 14) {
    window.alert("Tienes que tener como mínimo 14 años para usar esta página")
  }
}

function dateDiff(nacimiento, today) {
  let date1 = nacimiento
  let date2 = today

  var anoHoy = date2.getFullYear();
  var mesHoy = date2.getMonth();
  var diaHoy = date2.getDate();
  var anoNacimiento = date1.getFullYear();
  var mNacimiento = date1.getMonth();
  var diaNacimiento = date1.getDate();
  var diff = anoHoy - anoNacimiento;
  if (mNacimiento > mesHoy) diff--;
  else {
    if (mNacimiento == mesHoy) {
      if (diaNacimiento > diaHoy) diff--;
    }
  }
  return diff;
}

function calculoPuntuacion(numPreg, id) {
  if (numPreg != 10) {
    punts[numPreg - 1] = id;
  } else {
    if (id >= 0 && id <= 4) {
      punts[numPreg - 1] = 0;
    } else if (id >= 5 && id <= 7) {
      punts[numPreg - 1] = 1;
    } else if (id >= 8) {
      punts[numPreg - 1] = 2;
    }
  }

}

let txtMensaje = document.getElementById("resultado")
let btnPuntuacion = document.getElementById("btnForm")

btnPuntuacion.addEventListener("click", respuestaForm)

function respuestaForm() {
  let nombre = document.getElementById("txtNombre").value
  edadUsuario()
  let puntuacion = 0
  let mensaje = ""
  for (const num of punts)
    puntuacion += num

  if (puntuacion >= 0 && puntuacion <= 9) {
    mensaje = `${nombre}, no te interesas mucho por cuidar el planeta y sus recursos. Lejos de ser parte de la solución, tú eres parte del problema.`
  } else if (puntuacion >= 10 && puntuacion <= 15) {
    mensaje = `¡${nombre} eres muy verde! Te importa el medio ambiente, aún te falta bastante por hacer, pero vas por buen camino.`
  } else {
    mensaje = `¡Felicidades!¡${nombre} eres súper verde! Tu enorme respeto y admirable amor por la naturaleza hacen justicia por el medio ambiente. Consideras que los recursos son sagrados y deseas que duren por más siglos.`
  }
  txtMensaje.innerText = mensaje
}