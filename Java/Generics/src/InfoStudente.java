public class InfoStudente {
    private String universita;
    private double sconto;

    public InfoStudente(String universita, double sconto) {
        this.universita = universita;
        this.sconto = sconto;
    }

    @Override
    public String toString() {
        return "InfoStudente{" +
                "universita='" + universita + '\'' +
                ", sconto=" + sconto +
                '}';
    }

}
