document.getElementById("calcular").addEventListener("click", function() {
    const edad = parseFloat(document.getElementById("edad").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);
    const sexo = document.getElementById("sexo").value;

    if (isNaN(edad) || isNaN(altura) || isNaN(peso)) {
        alert("Por favor, ingrese valores válidos en todos los campos.");
        return;
    }

    // Cálculo del IMC
    const alturaEnMetros = altura / 100;
    const imc = peso / (alturaEnMetros * alturaEnMetros);

    // Cálculo del porcentaje de grasa corporal
    const sexoValor = (sexo === "Hombre") ? 1 : 0;
    const porcentajeGrasaCorporal = 1.20 * imc + 0.23 * edad - 10.8 * sexoValor - 5.4;

    // Cálculo de la fracción que no es grasa y masa magra
    const fraccionNoGrasa = 1 - (porcentajeGrasaCorporal / 100);
    const masaMagra = peso * fraccionNoGrasa;
    const porcentajeMasaMagra = (masaMagra / peso) * 100;

    // Cálculo del agua corporal total como porcentaje
    let aguaCorporalTotal;
    if (sexo === "Hombre") {
        aguaCorporalTotal = 2.447 - (0.09156 * edad) + (0.1074 * altura) + (0.3362 * peso);
    } else {
        aguaCorporalTotal = -2.097 + (0.1069 * altura) + (0.2446 * peso);
    }

    // Convertir el agua corporal total a porcentaje del peso
    const porcentajeAguaCorporal = (aguaCorporalTotal / peso) * 100;

    // Mostrar los resultados
    document.getElementById("resultado").innerHTML = `
        <p><strong>IMC:</strong> ${imc.toFixed(2)}</p>
        <p><strong>Porcentaje de Grasa Corporal:</strong> ${porcentajeGrasaCorporal.toFixed(2)}%</p>
        <p><strong>Porcentaje de Masa Magra:</strong> ${porcentajeMasaMagra.toFixed(2)}%</p>
        <p><strong>Porcentaje de Agua Corporal Estimada:</strong> ${porcentajeAguaCorporal.toFixed(2)}%</p>
    `;
});

