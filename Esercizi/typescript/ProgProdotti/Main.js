"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EnumCategoriaProdotto_1 = require("./EnumCategoriaProdotto");
var GenericMagazzino_1 = require("./GenericMagazzino");
var magazzinoProdotti = new GenericMagazzino_1.GenericMagazino();
magazzinoProdotti.aggiungi({
    id: 1,
    nome: "Smartphone",
    categoria: EnumCategoriaProdotto_1.CategoriaProdotto.elettronica
});
magazzinoProdotti.aggiungi({
    id: 2,
    nome: "Pasta",
    categoria: EnumCategoriaProdotto_1.CategoriaProdotto.alimentari
});
var prodotti = magazzinoProdotti.getTutti();
console.log("Prodotti nel magazzino:");
prodotti.forEach(function (p) {
    console.log("ID: ".concat(p.id, ", Nome: ").concat(p.nome, ", Categoria: ").concat(p.categoria));
});
