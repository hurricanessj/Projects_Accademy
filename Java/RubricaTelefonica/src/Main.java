import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {

        List<Integer> numeri = new ArrayList<Integer>();

        numeri.add(1);
        numeri.add(2);
        numeri.add(3);
        numeri.add(4);
        numeri.add(5);

        System.out.println(numeri);

        for (int i = 0; i < numeri.size(); i++) {
            if (numeri.get(i) % 2 != 0) {
                System.out.println();
            }
            System.out.println(i);
        }

    }
}