// solicitamos datos del empleado

let sue = prompt("Ingrese el sueldo del empleado");
sue = parseInt (sue);

let hET = prompt("Ingrese la cantidad de horas trabajadas");
hET = parseInt (hET);

let cat = prompt("Ingrese la categoria");
cat = parseInt (cat);

if (hET > 30) {
    hET = 30;
}
let pH = 0;

if (cat == 1) {
    pH = 30;
} else if (cat == 2) {
    pH = 38;
} else if (cat == 3) {
    pH = 50;
} 
hET = hET * pH;

sue = sue + hET;

console.log (`El sueldo del empleado mas las horas extras es = ${sue}`);


