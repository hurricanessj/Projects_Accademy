import java.util.HashSet;
import java.util.Set;

public class Magazzino <T>{
    private Set<T> oggetti = new HashSet<>();

    public void aggiungiElemento(T elemento){
        oggetti.add(elemento);
    }

    public boolean rimuoviElemento(T elemento) {
        return oggetti.remove(elemento) ? true : false;
    }

    public boolean contiene(T elemento){
        return oggetti.contains(elemento);
    }

    public int quantita() {
        return oggetti.size();
    }

    public void stampaTutti() {
        System.out.println("Contenuto del magazzino:");
        for (T obj : oggetti) {
            System.out.println("- " + obj);
        }
    }

}
