import { Libro } from "./Libro";
import { Articolo } from "./Articolo";
import { GenericArchivio } from "./GenericArchivio";

const libro = new Libro("1984", "George Orwell", 328);
const archivioLibri = new GenericArchivio<Libro>();

const articolo = new Articolo("Tecnologie Future", "Maria Rossi", "Tech Magazine");
const archivioArticoli = new GenericArchivio<Articolo>();

archivioLibri.setContenuto(libro);
console.log(archivioLibri.info());


archivioArticoli.setContenuto(articolo);
console.log(archivioArticoli.info());
