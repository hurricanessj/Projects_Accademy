public class Switch {
    public static void main(String[] args) {
        int votoScritto = 8;
        int votoOrale = 7;
        int livello = 0;

        if (votoScritto >= 8 && votoOrale >= 6) {
            livello = 2;
        } else if (votoScritto >= 6 && votoOrale >= 7) {
            livello = 1;
        }

        switch (livello) {
            case 1  -> System.out.println("idoneo non vincitore");
            case 2  -> System.out.println("idoneo vincitore");
            default -> System.out.println("respinto");
        }
    }
}
