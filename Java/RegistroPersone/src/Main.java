//Registro di Persone
//Usa un HashMap<String, Integer> per memorizzare nomi e età.
//Aggiunge almeno 3 persone al registro.
//Stampa tutti i nomi registrati.
//Stampa tutte le età.
//Cerca e stampa l’età di una persona specifica (es. “Luca”).
//Calcola e stampa la media delle età.

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
     /*   HashMap<String, Integer> accademy = new HashMap<>();

        accademy.put("Gaetano", 20);
        accademy.put("Enzo", 21);
        accademy.put("Davide", 22);
        accademy.put("Miriana", 26);
        accademy.put("Giuseppe", 15);

        System.out.println("Nomi registrati:");
        for (String nome : accademy.keySet()) {
            System.out.println(nome);
        }

        System.out.println("\nEtà registrate:");
        for (Integer eta : accademy.values()) {
            System.out.println(eta);
        }

        if (accademy.containsKey("Luca")) {
            System.out.println("Luca ha un eta di: " + accademy.get("Luca"));
        } else System.out.println("Luca non esiste");

        double media = 0;

        for (Integer eta : accademy.values()) {
            media += eta;
        }
        System.out.println("la media dell'eta è: " + media / accademy.size());

        if (accademy.containsKey("Enzo")) {
            System.out.println("enzo eliminato" + accademy.remove("Enzo"));
        }

//piu giovane
        int piuGiovane = accademy.get("Gaetano");
        for (Integer etaPiuGiovane : accademy.values()) {

            if (piuGiovane > etaPiuGiovane) {
                piuGiovane = etaPiuGiovane;
            }

        }
        System.out.println("eta piu  giovane " + piuGiovane);


        int menoGiovane = accademy.get("Gaetano");
        for (Integer etamenoGiovane : accademy.values()) {

            if (menoGiovane < etamenoGiovane) {
                menoGiovane = etamenoGiovane;
            }

        }
        System.out.println("meno giovane  " + menoGiovane);
        
        int contatoreMaggiorenni = 0;
        for(Integer personeMagg: accademy.values()){
            if(personeMagg>18) {
                contatoreMaggiorenni++;
            }
        }
        System.out.println("persone maggiorenni "+ contatoreMaggiorenni);


        int contatoreMinorenni = 0;
        for(Integer personeMin: accademy.values()){
            if(personeMin<18) {
                contatoreMinorenni++;
            }
        }
        System.out.println("persone minorenni "+ contatoreMinorenni);


*/
        //seconda esercitazione--------------------------------------------

        ArrayList<Alimento> listaSpesa = new ArrayList<>();


        listaSpesa.add(new Alimento(1, "Pane", "2025-07-25", 2, 1.5));
        listaSpesa.add(new Alimento(2, "Latte", "2025-07-23", 1, 1.2));
        listaSpesa.add(new Alimento(3, "Pasta", "2025-08-10", 3, 0.9));
        listaSpesa.add(new Alimento(4, "Formaggio", "2025-07-30", 1, 2.8));
        listaSpesa.add(new Alimento(5, "Yogurt", "2025-07-26", 4, 0.6));


        System.out.println("Lista della spesa iniziale:");
        for (Alimento a : listaSpesa) {
            System.out.println(a);
        }

        for (int i = 0; i < listaSpesa.size(); i++) {
            if (listaSpesa.get(i).getNome().equalsIgnoreCase("Latte")) {
                listaSpesa.remove(i);
                break;
            }
        }

        boolean trovato = false;
        for (int i = 0; i < listaSpesa.size(); i++) {
            if (listaSpesa.get(i).getNome().equalsIgnoreCase("Uova")) {
                trovato = true;
                break;
            }
        }
        System.out.println("\nLa lista contiene 'Uova'? " + trovato);

        System.out.println("Numero totale di elementi nella lista: " + listaSpesa.size());

    }

}

    
