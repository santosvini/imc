const calcular = document.getElementById("calcular");
const details = document.getElementById("details");

function imc() {
  const nome = document.getElementById("nome").value;
  const altura = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value;
  const resultado = document.getElementById("resultado");

  if (nome !== "" && altura !== "" && peso !== "") {
    const valor = (peso / (altura * altura)).toFixed(1);

    let imc = '';

    if (valor < 18.5) {
      imc = "Abaixo do Peso.";
    } else if (valor < 25) {
      imc = "Peso Normal. Parabéns!";
    } else if (valor < 30) {
      imc = "Levemente acima do peso!";
    } else if (valor < 35) {
      imc = "com obesidade Grau I";
    } else if (valor < 40) {
      imc = "com obesidade Grau II";
    } else {
      imc = "com obesidade mórbida. Cuidado!";
    }

    resultado.innerHTML = `<p>${nome} seu IMC é ${valor}kg/m² e você está ${imc}</p>`

  } else {
      resultado.innerHTML = 'Preencha todos os campos'   
  }
  calcular.addEventListener("click", imc);
  details.addEventListener("click", mouseEvent(on))
}
