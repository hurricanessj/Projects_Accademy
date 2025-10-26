import java.util.HashMap;
import java.util.Map;
import java.util.function.Supplier;

class FiguraFactory {

    private static final Map<String, Supplier<Figura>> registry = new HashMap<>();


    public static void register(String key, Supplier<Figura> supplier) {
        registry.put(key, supplier);
    }


    public static Figura create(String key) {
        Supplier<Figura> supplier = registry.get(key);
        if (supplier != null) {
            return supplier.get();
        }
        throw new IllegalArgumentException("Figura non registrata: " + key);
    }
}
