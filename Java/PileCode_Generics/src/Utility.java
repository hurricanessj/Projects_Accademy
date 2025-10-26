import java.util.Map;

public class Utility {

    public static <T> void stampaDueVolte(T elemento) {
        System.out.println(elemento);

    }

    public static <K, V> void stampaMappa(Map<K, V> mappa) {
        for (Map.Entry<K, V> entry : mappa.entrySet()) {                    // entry=coppia chiave valore
            System.out.println(entry.getKey() + " " + entry.getValue());

        }
    }
}