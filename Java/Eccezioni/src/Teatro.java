import java.util.HashSet;

public class Teatro {
    private HashSet<String> posti;

    public Teatro() {
        this.posti = new HashSet<>();

        this.posti.add("P1");
        this.posti.add("P2");
        this.posti.add("P3");
    }

    public void prenotaPosto(String postoRichiesto) throws PostiEsauritiExeption {
        if (posti.isEmpty()) {
            throw new PostiEsauritiExeption("Non ci sono più posti disponibili.");
        }

        if (posti.contains(postoRichiesto)) {
            posti.remove(postoRichiesto);
            System.out.println("Posto " + postoRichiesto + " prenotato con successo.");
        } else {
            System.out.println("Posto " + postoRichiesto + " non disponibile.");
        }
    }

}
