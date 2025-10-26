"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Contenitore_1 = require("./Contenitore");
var c = new Contenitore_1.Contenitore('ciao mondo');
var n = new Contenitore_1.Contenitore('ciao mondo');
console.log(c.get(), c.descrizione());
console.log(n.get(), n.descrizione());
