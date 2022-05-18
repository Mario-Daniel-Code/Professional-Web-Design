function suma() {
  //getElementById => Devuelve una referencia al elemento por su ID
  var numero1 = parseFloat(document.getElementById("numero1").value);
  var numero2 = parseFloat(document.getElementById("numero2").value);
  var resul = numero1 + numero2;
  document.getElementById("resultado").value = resul;
}
