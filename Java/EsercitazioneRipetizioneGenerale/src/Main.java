import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<String> listaElementi = new ArrayList<>();

        listaElementi.add("elem1");
        listaElementi.add("elem2");
        listaElementi.add("elem3");
        listaElementi.add("elem4");
        listaElementi.add("elem1");
        System.out.println(listaElementi.get(0));

        listaElementi.remove("elem1");

        Set<String> setSenzaDuplicati = new LinkedHashSet<>(listaElementi);


        System.out.println("lista senza duplicati: " + setSenzaDuplicati);

        List<String> listaNuova = new ArrayList<>();

        listaElementi.add("Mario");
        listaElementi.add("Luigi");
        listaElementi.add("Wario");
        listaElementi.add("Waluigi");

        if (listaElementi.contains("Mario")) {
            System.out.println("Mario è presente nella lista");
        } else {
            System.out.println("Mario non è presente nella lista");
        }

        Map<String, Integer> mapLista = new HashMap();

        mapLista.put("Gaetano", 1);
        mapLista.put("Davide", 2);
        mapLista.put("Vincenzo", 3);
        mapLista.put("Francesco", 4);

        mapLista.forEach((nome, numero) -> {
            System.out.println(nome + ": " + numero);
        });

        List<Integer> numeri = new ArrayList<>();
        numeri.add(1);
        numeri.add(2);
        numeri.add(2);
        numeri.add(3);
        numeri.add(-2);
        numeri.add(-1);
        System.out.println(numeri.stream().mapToInt(n -> n).max());


        List<Integer> positivi = numeri.stream().filter(n -> n > 0).toList();
        System.out.println(positivi);



    }


}
