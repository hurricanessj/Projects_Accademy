public class MainGenerics {
    public static void main(String[] args) {
        Generics<String> scatolaStringa = new Generics<>();
        scatolaStringa.setContenuto("ciao mondo");
        System.out.println("contenuto: "+ scatolaStringa.getContenuto());

        Generics<Integer> scatolaNumero = new Generics<>();
        scatolaNumero.setContenuto(42);
        System.out.println("contenuto: "+ scatolaNumero.getContenuto());


        //secondo esercizio

        Utility.scambia("ciao", "mondo");

        System.out.println("---");

        Utility.scambia(10, 20);

        //gaetano è il miglior pony del mondo
    }
}
