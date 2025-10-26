public class Main {
    //10
    public static void stampa(int valore) {
        System.out.println("Hai passato un intero: " + valore);
    }


    public static void stampa(String testo) {
        System.out.println("Hai passato una stringa: " + testo);
    }


    public static void main(String[] args) {
        //1
        Persona p1 = new Persona("Gaetano", 20);
        p1.saluta();

        Persona p2 = new Persona("Davide", 22);
        p2.saluta();

        System.out.println("2)-----------------------------------------\n");

        //2
        int numero = 20;
        double n_double = 2.2;
        boolean bool = true;
        char carattere = 'c';

        System.out.println(numero + "\n" + n_double + "\n" + bool + "\n" + carattere);

        System.out.println("3)-----------------------------------------\n");

        //3
        int[] arrayDiNumeri = {5, 3, 2, 6, 4};
        int sommaArray = 0;

        for (int i = 0; i < arrayDiNumeri.length; i++) {
            System.out.println(arrayDiNumeri[i]);

            sommaArray += arrayDiNumeri[i];

        }

        int media = sommaArray / arrayDiNumeri.length;

        System.out.println("la somma è: " + sommaArray);
        System.out.println("\nLa media è:" + media);

        System.out.println("\n4)-----------------------------------------");
        int x = 2, y = 3;
        p1.somma(x, y);
        p1.stampaMessaggio();

        System.out.println("\n5)-----------------------------------------");
        Contatore c = new Contatore(3);
        System.out.println(c);
        c.incrementa(2);
        System.out.println(c);


        System.out.println("\n6)-----------------------------------------");
        Studente[] arrayDiStudenti = new Studente[3];
        Studente s1 = new Studente(10, "Gaetano");
        Studente s2 = new Studente(9, "Marco");
        Studente s3 = new Studente(8, "Giuseppe");

        arrayDiStudenti[0] = s1;
        arrayDiStudenti[1] = s2;
        arrayDiStudenti[2] = s3;

        for(int i=0; i<3; i++){
            System.out.println(arrayDiStudenti[i].nome+" "+arrayDiStudenti[i].voto);
        }

        System.out.println("\n7)-----------------------------------------");
        int[] numeri = {3, 7, 10, 21, 42};

        boolean trovato1 = c.cerca(numeri, 10);
        System.out.println("Il numero 10 è presente? " + trovato1);


        boolean trovato2 = c.cerca(numeri, 5);
        System.out.println("Il numero 5 è presente? " + trovato2);

        System.out.println("\n8)-----------------------------------------");
        System.out.println("Somma fino a 10 = " + c.sommaFinoAdn(10));

        System.out.println("\n9)-----------------------------------------");
        MathHelpler m = new MathHelpler();
        System.out.println("quadrato del numero:" + m.quadrato(4));

        System.out.println("\n10)-----------------------------------------");
        stampa(44);
        stampa("hello world");



        //esercitazione giornaliera 15/07/2024



    }
}