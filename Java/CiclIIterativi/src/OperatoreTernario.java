public class OperatoreTernario {
    public static void main(String[] args) {
        for (int i = 1; i <= 10; i++) {
            System.out.println((i % 3 == 0) ? i + " è divisibile per 3 " : i + " non e divisibile per 3 ");
        }
    }
}
