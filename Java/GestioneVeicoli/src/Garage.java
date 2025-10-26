import java.util.ArrayList;
import java.util.List;

public class Garage {
    private List<Veicolo> veicoli;

    public Garage() {
        this.veicoli = new ArrayList<>();
    }

    public void aggiungiVeicolo(Veicolo v) {
        veicoli.add(v);
    }

    public void avviaTutti() {
        for (Veicolo v : veicoli) {
            v.start();
            v.movimento();
        }
    }

    public void fermaTutti() {
        for (Veicolo v : veicoli) {
            v.stop();
        }
    }

    public void mostraInformazioni() {
        for (Veicolo veicolo : veicoli) {
            System.out.println("Tipo: " + veicolo.getClass().getSimpleName());
            veicolo.visualizzaNumeroSerie();
            System.out.println("Prezzo base: €" + veicolo.getPrezzoBase());
            System.out.println("---------------------");
        }
    }
}
