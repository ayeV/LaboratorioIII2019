"use strict";
var msj1 = "hello";
console.log(msj1);
//Array
var vector = [1, 2, 3, 4, 5];
//Tupla
var tupla = [1, "Tuple"];
var variable;
//Enum
var EHeroe;
(function (EHeroe) {
    EHeroe[EHeroe["Xmen"] = 0] = "Xmen";
    EHeroe[EHeroe["Avenger"] = 1] = "Avenger";
})(EHeroe || (EHeroe = {}));
console.log("Enum: " + EHeroe.Avenger);
console.log('Enum: ' + EHeroe[EHeroe.Avenger]);
for (var key in EHeroe) {
    console.log(key);
}
//funciones
var funcionEnviarMision = function (heroe) {
    return heroe + "enviando";
};
var funcionEnviarMisionOpcional = function (heroe) {
    return heroe + "enviando";
};
var funcionEnviarMisionDefault = function (heroe) {
    if (heroe === void 0) { heroe = "default"; }
    return heroe + "enviando";
};
console.log(funcionEnviarMision(EHeroe[EHeroe.Xmen]));
/// <reference path="hello.ts" />
var mensaje = "etc";
console.log(mensaje);
//# sourceMappingURL=output.js.map