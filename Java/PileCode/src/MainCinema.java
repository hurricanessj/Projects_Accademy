import java.util.*;

public class MainCinema {
    public static void main(String[] args) {
        Random random = new Random();

        Queue<Cliente> codaClienti = new LinkedList<>();

        codaClienti.add(new Cliente("Gaetano"));
        codaClienti.add(new Cliente("Davide"));

        Stack<Biglietto> bigliettoClienti = new Stack<>();

        for (int i=20; i>=18; i--){
            bigliettoClienti.push(new Biglietto(i));
        }

        while (!codaClienti.isEmpty() && !bigliettoClienti.isEmpty()){
            Cliente cliente = codaClienti.poll();
            Biglietto biglietto = bigliettoClienti.pop();
            System.out.println(cliente.getNome()+" ha ricevuto il biglietto "+biglietto);
            boolean rimborso = random.nextDouble()<0.7;
            if(rimborso){
                System.out.println(cliente.getNome()+" il cliente ha ottenuto il rimborso");
                bigliettoClienti.push(biglietto);
            }

        }


        if (!bigliettoClienti.isEmpty()){
            System.out.println("ci sono biglietti avanzati");
            bigliettoClienti.forEach(System.out::println);
        }

        if(!codaClienti.isEmpty()){
            System.out.println("clienti in attesa senza biglietto");
            codaClienti.forEach(c -> System.out.println(" "+c.getNome()));
        }








    }
}
