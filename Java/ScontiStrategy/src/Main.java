import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        double prezzoIniziale = 100.0;

        Ordine ordine = new Ordine(1, prezzoIniziale, new NessunoSconto());
        System.out.println("Prezzo senza sconto: " + ordine.getPrezzoFinale());

        ordine.setSconto(new ScontoPercentuale(20));
        System.out.println("Prezzo con sconto del 20%: " + ordine.getPrezzoFinale());


        ordine.setSconto(new ScontoFisso(30));
        System.out.println("Prezzo con sconto fisso del 30%: " + ordine.getPrezzoFinale());

    }
    }
