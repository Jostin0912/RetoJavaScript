function calcular() {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let resultado = (numero1 / 100) * numero2;
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
  }