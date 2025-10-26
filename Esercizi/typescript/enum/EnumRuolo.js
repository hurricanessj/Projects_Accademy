"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ruolo = void 0;
var Ruolo;
(function (Ruolo) {
    Ruolo["studente"] = "accesso limitato";
    Ruolo["docente"] = "accesso limitato";
    Ruolo["amministratore"] = "accesso admin";
})(Ruolo || (exports.Ruolo = Ruolo = {}));
var doc = Ruolo.docente;
function verificaAccesso(utente) {
    if (utente == Ruolo.amministratore) {
        console.log(utente);
    }
    else {
        console.log(utente);
    }
}
verificaAccesso(doc);
