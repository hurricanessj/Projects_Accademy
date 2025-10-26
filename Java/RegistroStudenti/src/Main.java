import java.util.*;

public class Main {
    public static void main(String[] args) {
        Studente s1 = new Studente("Alice", 1);
        Studente s2 = new Studente("Bob", 2);
        Studente s3 = new Studente("Charlie", 3);
        Studente s4 = new Studente("Alice", 1);


        Map<String, List<Studente>> corsi = new HashMap<>();

        corsi.put("Matematica", Arrays.asList(s1, s2));
        corsi.put("Fisica", Arrays.asList(s2, s3));
        corsi.put("Informatica", Arrays.asList(s1, s4));

        Set<Studente> studentiUnici = new HashSet<>();
        for (List<Studente> lista : corsi.values()) {
            studentiUnici.addAll(lista);
        }

        System.out.println("Studenti univoci iscritti a qualche corso:");
        for (Studente studente : studentiUnici) {
            System.out.println("- " + studente);
        }

        final int N = 1;
        System.out.println("\nCorsi con più di " + N + " studenti univoci:");
        for (Map.Entry<String, List<Studente>> entry : corsi.entrySet()) {
            Set<Studente> uniciNelCorso = new HashSet<>(entry.getValue());
            if (uniciNelCorso.size() > N) {
                System.out.println("- " + entry.getKey());
            }
        }


        Map<Studente, Integer> iscrizioni = new HashMap<>();
        for (Map.Entry<String, List<Studente>> entry : corsi.entrySet()) {
            for (Studente studente : entry.getValue()) {
                iscrizioni.put(studente, iscrizioni.getOrDefault(studente, 0) + 1);
            }
        }

        System.out.println("\nNumero di corsi per ogni studente:");
        for (Map.Entry<Studente, Integer> entry : iscrizioni.entrySet()) {
            System.out.println("- " + entry.getKey() + ": " + entry.getValue() + " corsi");
        }


        //secondo esercizio


        Ordinatore<Integer> ordinatoreInteri = new Ordinatore<>();
        Ordinatore<String> ordinatoreStringhe = new Ordinatore<>();
        Ordinatore<Persona> ordinatorePersone = new Ordinatore<>();

        List<Integer> numeri = Arrays.asList(5, 3, 8, 1);
        List<String> parole = Arrays.asList("banana", "mela", "arancia");
        List<Persona> persone = Arrays.asList(
                new Persona("Alice", 30),
                new Persona("Bob", 25),
                new Persona("Charlie", 35)
        );

        System.out.println("Interi ordinati: " + ordinatoreInteri.ordina(numeri));
        System.out.println("Stringhe ordinate: " + ordinatoreStringhe.ordina(parole));
        System.out.println("Persone ordinate per età: " + ordinatorePersone.ordina(persone));

    }
}