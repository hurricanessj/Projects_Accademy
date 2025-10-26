import { Contenitore } from "./Contenitore";

const c = new Contenitore<string>('ciao mondo');
const n = new Contenitore<string>('ciao mondo');
console.log(c.get(), c.descrizione());
console.log(n.get(), n.descrizione());