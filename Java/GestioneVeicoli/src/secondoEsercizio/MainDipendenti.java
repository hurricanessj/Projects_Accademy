package secondoEsercizio;

public class MainDipendenti {
    public static void main(String[] args) {
        Azienda azienda = new Azienda();


        Dipendente d1 = new Impiegato("Mario", 1800, "Rossi", "2022-01-10");
        Dipendente d2 = new Impiegato("Anna", 2100, "Verdi", "2023-03-05");

        Manager manager = new Manager("Luca", 3000, "Bianchi", "2021-05-15", 5000);

        azienda.aggiungiDipendente(d1);
        azienda.aggiungiDipendente(d2);
        azienda.aggiungiDipendente(manager);

        azienda.stampaDipendenti();

        azienda.stampaBonus(d1, 300, manager);
        azienda.stampaBonus(d2, 600, manager);
        azienda.stampaBonus(d2, 6000, manager);

        azienda.rimuoviDipendente(d1);
        azienda.rimuoviDipendente(d1);

        azienda.stampaDipendenti();
    }
}
