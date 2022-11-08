let numero1 = parseInt(prompt("ingrese un numero"));
let operacion  = prompt("Ingrese una operacion + - / * ");
let numero2 = parseInt(prompt("ingrese un numero"));
let resultado;


switch(operacion) {
    case "+":
        resultado=(numero1)+(numero2)
        alert("Tu resultado es: " + resultado);
   break;
   case "-":
    resultado=(numero1)-(numero2)
    alert("Tu resultado es: " + resultado);
break;
case "*":
        resultado=(numero1)*(numero2)
        alert("Tu resultado es: " + resultado);
   break;
   case "/":
        resultado=(numero1)/(numero2)
        alert("Tu resultado es: " + resultado);
        if(numero2>0){
            alert("Tu resultado es: " + resultado);
        }else{
            alert("ERROR:NO SE PUEDE DIVIDIR POR 0")
        
        }
   break;
   default:
   alert("ERROR:Ingrese una operación válida (+ - * /)")
  break;

}