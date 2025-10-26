public class MainTeatro {
    public static void main(String[] args) {
        Teatro teatro = new Teatro();

        try {
            teatro.prenotaPosto("P1");
            teatro.prenotaPosto("P2");
            teatro.prenotaPosto("P3");
            teatro.prenotaPosto("P4");
        } catch (PostiEsauritiExeption e) {
            System.out.println("Errore: " + e.getMessage());
        }

    }
}
