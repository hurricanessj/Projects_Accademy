import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Attrazione> attrazioni = new ArrayList<>();
        Attrazione giostra1 = new Giostra("5minuti", "tornado", 3.5);
        Attrazione spettacolo1 =new Spettacolo("spettacolo1", 5, 50);
        Attrazione giocoAcqua1 = new GiocoAcqua("gioco1", 5.3, "basso");


        attrazioni.add(giostra1);
        attrazioni.add(spettacolo1);
        attrazioni.add(giocoAcqua1);

        int numeroVisitatori = 60;
        double incassoTotale = 0.0;

        for (Attrazione attr : attrazioni) {
            String nome = attr.getNome();
            double prezzo = attr.getPrezzoIngresso();
            double incasso = attr.calcolaIncassoPrevisto(numeroVisitatori);

            System.out.println("Attrazione: " + nome);
            System.out.println("Prezzo ingresso: €" + prezzo);
            System.out.println("Incasso previsto per " + numeroVisitatori + " visitatori: €" + incasso);
            System.out.println();

            incassoTotale += incasso;
        }

        System.out.println("Incasso totale previsto: €" + incassoTotale);
    }
}