import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Rubrica {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Map<String, String> rubrica = new HashMap<>();

        System.out.println("Inserisci almeno 5 contatti nella rubrica:");

        int count = 0;
        while (count < 5) {
            System.out.print("Nome: ");
            String nome = scanner.nextLine().trim();
            System.out.print("Numero: ");
            String numero = scanner.nextLine().trim();

            if (!nome.isEmpty() && !numero.isEmpty()) {
                rubrica.put(nome, numero);
                count++;
            } else {
                System.out.println("Nome o numero non validi. Riprova.");
            }
        }

        System.out.print("\nCerca un nome nella rubrica: ");
        String ricerca = scanner.nextLine().trim();

        if (rubrica.containsKey(ricerca)) {
            System.out.println("Numero di " + ricerca + ": " + rubrica.get(ricerca));
        } else {
            System.out.println("Contatto non trovato.");
        }

        scanner.close();

    }
}
