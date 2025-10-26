import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        /*List<Integer> listaNumeri = new ArrayList<>();

        listaNumeri.add(1);
        listaNumeri.add(12);
        listaNumeri.add(44);
        listaNumeri.add(22);

        int sommaPari = listaNumeri.stream().filter(n -> n % 2 == 0).mapToInt(n -> n).sum();
        int numeriUno = listaNumeri.stream().map(n -> n + 1).mapToInt(n -> n).sum();
        System.out.println(sommaPari);
        System.out.println(numeriUno);

        List<Integer> moltiplicati = listaNumeri.stream().map(n -> n * 2).collect(Collectors.toList());

        boolean tuttiMaggiori = listaNumeri.stream().allMatch(n -> n > 10);
        System.out.println("sono tutti maggiori di 10? " + (tuttiMaggiori));*/

        List<Integer> numeri = Arrays.asList(2, 15, 54, 87, 23);

        System.out.println("Tutti i numeri:");
        numeri.stream().forEach(System.out::println);

        System.out.println("\nnumeri maggiori di dieci");
        numeri.stream().filter(n->n >10).forEach(System.out::println);

        List<Integer> moltiplicati = numeri.stream()
                .map(n -> n * 3)
                .collect(Collectors.toList());
        System.out.println("\nNumeri moltiplicati per 3:");
        System.out.println(moltiplicati);

        int sommaDispari = numeri.stream().filter(n->n % 2 !=0).mapToInt(Integer::intValue).sum();
        System.out.println("\nsomma di tutti i numeri dispari: "+sommaDispari);

        double media = numeri.stream().mapToInt(Integer:: intValue).sum();
        System.out.println(media/numeri.size());

        int massimo= numeri.stream().max(Integer::compare).orElseThrow();
        int max= numeri.stream().max((a,b)-> Integer.compare(a,b)).orElseThrow();

        int min = numeri.stream().min((a,b)-> Integer.compare(a,b)).orElseThrow();

    }
}
