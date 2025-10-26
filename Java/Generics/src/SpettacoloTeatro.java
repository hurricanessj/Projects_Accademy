public class SpettacoloTeatro {
    private String ora;
    private String titoloSpettacolo;

    public SpettacoloTeatro(String ora, String titoloSpettacolo) {
        this.ora = ora;
        this.titoloSpettacolo = titoloSpettacolo;
    }

    @Override
    public String toString() {
        return "SpettacoloTeatro{" +
                "ora='" + ora + '\'' +
                ", titoloSpettacolo='" + titoloSpettacolo + '\'' +
                '}';
    }
}
