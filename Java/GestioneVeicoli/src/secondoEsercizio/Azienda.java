package secondoEsercizio;

import java.util.HashSet;
import java.util.Set;

public class Azienda implements Gestibile {
    private Set<Dipendente> dipendenti;

    public Azienda() {
        this.dipendenti = new HashSet<>();
    }

    public Azienda(Set<Dipendente> dipendenti) {
        this.dipendenti = dipendenti;
    }

    @Override
    public boolean aggiungiDipendente(Dipendente d) {
        if (dipendenti.contains(d)) {
            System.out.println("Dipendente già presente: " + d);
            return false;
        }
        dipendenti.add(d);
        System.out.println("Dipendente aggiunto: " + d);
        return true;
    }

    @Override
    public boolean rimuoviDipendente(Dipendente d) {
        if (dipendenti.remove(d)) {
            System.out.println("Dipendente rimosso: " + d);
            return true;
        }
        System.out.println("Dipendente non trovato: " + d);
        return false;
    }

    public void stampaDipendenti() {
        System.out.println("\n--- Lista dipendenti ---");
        if (dipendenti.isEmpty()) {
            System.out.println("Nessun dipendente presente.");
        } else {
            for (Dipendente d : dipendenti) {
                System.out.println(d);
            }
        }
    }

    public void stampaBonus(Dipendente d, double bonus, Manager m) {
        if (dipendenti.contains(d)) {
            m.assegnaBonus(d, bonus);
        } else {
            System.out.println("Dipendente non presente in azienda.");
        }
    }
}
