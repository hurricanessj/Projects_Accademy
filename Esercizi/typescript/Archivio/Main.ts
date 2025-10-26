import { Archivable } from "./InterfaceArchivable";
import { Report } from "./Report";
import { Invoice } from "./Invoice";
import { Archive } from "./genericArchive";


const archivioGenerale = new Archive<Archivable>();


const report1 = new Report(1, "Rapporto Vendite", "Contenuto dettagliato vendite...");
const report2 = new Report(2, "Analisi di Mercato", "Trend e analisi...");

const invoice1 = new Invoice(3, "Fattura #1001", 250.00);
const invoice2 = new Invoice(4, "Fattura #1002", 475.50);


archivioGenerale.addDocument(report1);
archivioGenerale.addDocument(report2);
archivioGenerale.addDocument(invoice1);
archivioGenerale.addDocument(invoice2);


console.log("Titoli archiviati:");
archivioGenerale.listTitles().forEach(titolo => console.log(titolo));
