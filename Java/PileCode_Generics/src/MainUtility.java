import java.util.HashMap;
import java.util.Map;

public class MainUtility {

    public static void main(String[] args) {

        Utility.stampaDueVolte("Ciao");
        Utility.stampaDueVolte(660);

        Map<String, Integer> rubrica = new HashMap<>();
        Map<String, String> caniPadroni = new HashMap<>();

        rubrica.put("Miriana", 5151546);
        rubrica.put("Davide", 5151546);
        rubrica.put("Enzo", 5151546);

        caniPadroni.put("Marco", "Pippo");

        Utility.stampaMappa(rubrica);
        Utility.stampaMappa(caniPadroni);
    }

}
 