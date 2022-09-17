
var resultado, num1, num2;
var suma,resta,multi,divi;

suma = (num1, num2) => num1 + num2;
resta = (num1, num2) => num1 - num2;
multi = (num1, num2) => num1 * num2;
divi = (num1, num2) => num1 / num2;

function calcular(){
    var operacion = document.getElementById("operacion").value;
    switch (operacion) {
        case "1":
            num1 = parseInt(document.getElementById('n1').value);
            num2 = parseInt(document.getElementById('n2').value);
            resultado = suma(num1,num2);
            break;
        case "2":
            num1 = parseInt(document.getElementById('n1').value);
            num2 = parseInt(document.getElementById('n2').value);
            resultado = resta(num1,num2);
            break;
        case "3":
            num1 = parseInt(document.getElementById('n1').value);
            num2 = parseInt(document.getElementById('n2').value);
            resultado = multi(num1,num2);
            break;
        default:
            num1 = parseInt(document.getElementById('n1').value);
            num2 = parseInt(document.getElementById('n2').value);
            resultado = divi(num1,num2);
            break;
    }
    document.getElementById("demo").innerHTML = "resultado: " + resultado;
}

