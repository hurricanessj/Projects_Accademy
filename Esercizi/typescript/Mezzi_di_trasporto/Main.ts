import { MezzoDiTrasporto } from "./MezzoDiTrasporto";
import { GenericGarage } from "./GenericGarage";
import { Auto } from "./Auto";
import { Bicicletta } from "./Bicicletta";

const auto1 = new Auto("Clio", 180, 3);
const auto2 = new Auto("Panda", 160, 5);

const garage = new GenericGarage<Auto>();
garage.aggiungi(auto1);
garage.aggiungi(auto2);

const trovata = garage.trovaPerNome("Panda");

if (trovata) {
    console.log("Auto trovata:", trovata);
} else {
    console.log("Auto non trovata");
}
