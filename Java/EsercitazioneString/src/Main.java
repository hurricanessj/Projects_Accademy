public class Main {

    public static void main(String[] args) {

        String[] arrayDiPersone = {"Gaetano","Davide","Simone","Miriana",};

      for (int i=0; i<arrayDiPersone.length; i++){
          if(arrayDiPersone[i].endsWith("a")){
              System.out.println(arrayDiPersone[i]+" finisce con a");
          }else{
              System.out.println(arrayDiPersone[i]+" non finisce con a");
          }
      }

        System.out.println("2 )--------------------------------------------");

        Persona persona1 =new Persona("Gaetano", "Esposito", 20);
        Persona persona2 =new Persona("Giuseppe", "Verdi", 17);
        Persona persona3 =new Persona("Marco", "Rossi", 26);


        System.out.println(persona1.nome + " maggiorenne? " + persona1.verificaMaggiorenne());
        System.out.println(persona2.nome + " maggiorenne? " + persona2.verificaMaggiorenne());
        System.out.println(persona3.nome + " maggiorenne? " + persona3.verificaMaggiorenne());

        System.out.println(persona1.nome + " supera 21 anni? " + persona1.verificaMaggiorenne(21));
        System.out.println(persona2.nome + " supera 15 anni? " + persona2.verificaMaggiorenne(15));
        System.out.println(persona3.nome + " supera 25 anni? " + persona3.verificaMaggiorenne(25));
/*
        System.out.println("\n 3)-----------------------------------------------------");

        Film f1 = new Film("Il Padrino", "Francis Ford Coppola", 1972);
        Film f2 = new Film("Inception", "Christopher Nolan", 2010);

        System.out.println(f1.getTitolo() + " è un classico? " + f1.eClassico());
        System.out.println(f2.getTitolo() + " è un classico (15 anni)? " + f2.eClassico(15));

        System.out.println("\n 4)-----------------------------------------------------");

        String[] arrayDiNomi={"paolo","roberto","filipo","carlo"};

        for (int i=0; i<arrayDiNomi.length; i++){
            if(arrayDiNomi[i].contains("r")){
                System.out.println(arrayDiNomi[i]+" contiene r");
            }else{
                System.out.println(arrayDiNomi[i]+" non contiene r");
            }
        }

*/

        Persona numeri = new Persona();

        numeri.sommaNumeri(2,2,2);
        numeri.sommaNumeri(3,3);
        numeri.sommaNumeri(2,2);


        System.out.println("raddoppia------------------------------------");
        int num=4;
        Valore val = new Valore(num);

        RaddoppiaValore r = new RaddoppiaValore();
        r.raddoppia(val);
        r.raddoppia(num);

    }
}