import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class ListaDellaSpesa {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        List<String> listaSpesa = new ArrayList<>();

        System.out.println("Inserisci gli elementi nella lista della spesa (digita 'fine' per terminare):");

        while (true) {
            System.out.print("Elemento: ");
            String input = scanner.nextLine().trim();

            if (input.equalsIgnoreCase("fine")) {
                break;
            }

            if (!input.isEmpty()) {
                listaSpesa.add(input);
            } else {
                System.out.println("Elemento non valido, riprova.");
            }
        }

        System.out.println("\nLista della spesa:");
        for (String elemento : listaSpesa) {
            System.out.println("- " + elemento);
        }

        scanner.close();
    }
}
