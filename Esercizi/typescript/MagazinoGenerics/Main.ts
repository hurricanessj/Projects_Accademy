import { Alimento } from "./Alimento";
import { Dispositivo } from "./Dispositivo";
import { Magazino } from "./Magazino";

const magazzino_alimento = new Magazino<Alimento>();
const magazzino_dispositivo = new Magazino<Dispositivo>();

const pasta = new Alimento(0.45, "pasta");
const telefono = new Dispositivo(340, "iphone");
magazzino_alimento.setProdotto(pasta);
magazzino_dispositivo.setProdotto(telefono);

console.log(magazzino_alimento.getProdotto(), magazzino_dispositivo.getProdotto());