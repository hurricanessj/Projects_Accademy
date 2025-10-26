import { CategoriaProdotto } from "./EnumCategoriaProdotto";
import { Prodotto } from "./InterfaceProdotto";
import { GenericMagazino } from "./GenericMagazzino";

const magazzinoProdotti = new GenericMagazino<Prodotto>();

magazzinoProdotti.aggiungi({
    id: 1,
    nome: "Smartphone",
    categoria: CategoriaProdotto.elettronica
});

magazzinoProdotti.aggiungi({
    id: 2,
    nome: "Pasta",
    categoria: CategoriaProdotto.alimentari
});

const prodotti = magazzinoProdotti.getTutti();

console.log("Prodotti nel magazzino:");
prodotti.forEach(p => {
    console.log(`ID: ${p.id}, Nome: ${p.nome}, Categoria: ${p.categoria}`);
});
