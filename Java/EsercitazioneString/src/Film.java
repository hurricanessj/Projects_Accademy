public class Film {
    private String titolo;
    private String regista;
    private int annoUscita;

    public Film(String titolo, String regista, int annoUscita) {
        this.titolo = titolo;
        this.regista = regista;
        this.annoUscita = annoUscita;
    }

    public boolean eClassico() {
        return eClassico(25);
    }


    public boolean eClassico(int anniLimite) {
        int annoCorrente = java.time.Year.now().getValue();
        return (annoCorrente - annoUscita) > anniLimite;
    }


    public String getTitolo() {
        return titolo;
    }



}
