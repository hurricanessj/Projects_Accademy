public class Contatore {
    int x = 0;

    public Contatore(int x) {
        this.x = x;
    }

    public void incrementa(int x) {
        this.x += x;

    }

    public static boolean cerca(int[] array, int valore) {
        for (int i = 0; i < array.length; i++) {
            if (array[i] == valore) {
                return true;
            }
        }
        return false;
    }

    public int sommaFinoAdn(int n) {
        return n == 0 ? n : n + sommaFinoAdn(n - 1);
    }


    @Override
    public String toString() {
        return "contatore: x = " + this.x;
    }
}
