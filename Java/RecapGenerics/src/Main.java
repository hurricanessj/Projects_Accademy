public class Main {
    public static void main(String[] args) {

        Coppia<String, Integer> coppia1 = new Coppia<>("Età", 30);

        Coppia<String, String> coppia2 = new Coppia<>("Nome", "Luca");

        // Stampa
        System.out.println("Coppia 1: " + coppia1);
        System.out.println("Coppia 2: " + coppia2);
        System.out.println("--------------Magazzino---------------");

        //magazzino
        Magazzino<String> magazino1 = new Magazzino<>();

        magazino1.aggiungiElemento("sedia");
        magazino1.aggiungiElemento("tavolo");
        magazino1.aggiungiElemento("tovaglioli");
        magazino1.aggiungiElemento("bicchieri");
        magazino1.aggiungiElemento("lampada");
        magazino1.aggiungiElemento("lanterna");

        magazino1.rimuoviElemento("sedia");
        System.out.println("\n\nsedia rimossa\n\n");
        System.out.println("contiene sedia? " + magazino1.contiene("sedia"));

        System.out.println("\n\nTotale oggetti del magazzino: \n" + magazino1.quantita());
        System.out.println("\n Stampa degli elementi nel magazzino");
        magazino1.stampaTutti();


    }
}