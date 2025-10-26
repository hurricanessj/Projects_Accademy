import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

class Ordinatore<T extends Comparable<T>> {
    public List<T> ordina(List<T> lista) {
        List<T> copia = new ArrayList<>(lista);
        Collections.sort(copia);
        return copia;
    }
}