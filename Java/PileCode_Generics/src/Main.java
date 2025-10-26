

import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Deque;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.PriorityQueue;
import java.util.Queue;
import java.util.Set;
import java.util.Stack;

public class Main {

    public static void main(String[] args) {

        List<Integer> numeri = new ArrayList<>();

        numeri.add(42);
        numeri.add(7);
        numeri.add(19);
        numeri.add(3);
        System.out.println(numeri);
        Collections.sort(numeri); // riordina la lista in ordine alfabetico e in ordine crescete

        System.out.println(numeri);

        List<String> nomi = new ArrayList<>();

        nomi.add("Miriana");
        nomi.add("DavideC");
        nomi.add("Enzo");
        nomi.add("DavideR");

        Collections.sort(nomi);
        System.out.println(nomi);

        nomi.remove("Enzo");
        System.out.println(nomi);

        HashSet<String> lista = new HashSet<>();

        lista.add("Ciao mondo");
        lista.add("Ciao");
        lista.add("Ciao mondo");

        System.out.println(lista);

        Set<Integer> numeriLista = new HashSet<>(List.of(1, 2, 3, 4, 5));
        if (numeriLista.contains(5))
            System.out.println("5 è presente nella lista");

        Map<String, Integer> persona = new HashMap<>();

        persona.put("Mario", 5);
        persona.put("Luigi", 4);
        persona.put("Peach", 6);

        System.out.println(persona.get("Peach"));

        Map<String, Integer> numParole = new HashMap<>();

        String[] parole = { "cane", "gatto", "criceto", "orso", "leone" };
        Queue<String> coda = new LinkedList<>();
        Deque<String> deque = new ArrayDeque<>();
        PriorityQueue<Integer> pCoda = new PriorityQueue<>();
        Stack<String> pila = new Stack<>();

        pila.push("uno");
        pila.push("due");
        pila.push("tre");
        System.out.println(pila.peek());

        pCoda.add(50);
        pCoda.add(20);
        pCoda.add(30);

        while (!pCoda.isEmpty())
            System.out.println(pCoda.poll());

        deque.addFirst("start");
        deque.add("elem");
        deque.addLast("end");

        System.out.println(deque);
        System.out.println(deque.removeLast());
        System.out.println(deque);

        coda.add("a");
        coda.add("b");
        coda.add("c");

        System.out.println(coda.peek()); // visualizza elemento dalla testa
        System.out.println(coda.poll()); // visualizza e rimuove l'elemento dalla testa
        System.out.println(coda);

        for (String parola : parole) {
            numParole.put(parola, parola.length());
        }
        System.out.println(numParole);

    }

}
 
 