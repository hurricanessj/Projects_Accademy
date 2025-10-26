public class Persona {
    String nome;
    String cognome;
    int eta;

    public Persona() {
    }

    public Persona(String nome, String cognome, int eta) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
    }


    public boolean verificaMaggiorenne() {
        return this.eta >= 18;
    }


    public boolean verificaMaggiorenne(int limite) {
        return this.eta >= limite;
    }

    public static void sommaNumeri(int x, int y) {
        int somma = x + y;
        System.out.println(somma);
    }

    public static void sommaNumeri(int x, int y, int z) {
        int somma = x + y + z;
        System.out.println(somma);
    }

    public static void sommaNumeri(double x, double y) {
        double somma = x + y;
        System.out.println(somma);
    }


}
