public class Main {
    public static void main(String[] args) {
        Persona persona0 = new Persona("Esposito","Gaetano",20);
        Persona persona1 = new Persona("Paolo","Rossi");
        Persona persona2 = new Persona("Verdi");


        System.out.println(persona1.getNomeCompleto());
        System.out.println(persona0.getNome());
        System.out.println(persona2.getCognome());


        Fattura f1 = new Fattura(300.3f);
        Fattura f2 = new Fattura(120.0f);
        Fattura f3 = new Fattura(1000.0f);

        System.out.println("\nTOTALE FATTURA:\n"+Fattura.getTotaleFatture());


        Prodotto p1 = new Prodotto("uova",3);

        p1.stampaInfo();
        Prodotto.cambiaPrezzo(p1.getPrezzo());
        p1.stampaInfo();
        Prodotto.cambiaPrezzoPerRif(p1, 30);


        Triangolo triangolo = new Triangolo(2,3);
        System.out.println(triangolo.calcolaArea());






    }
}