public class GiocoAcqua implements Attrazione{
    private String nome;
    private double prezzoIngresso;
    private String livelloAdrenalina;

    public GiocoAcqua() {
    }

    public GiocoAcqua(String nome, double prezzoIngresso, String livelloAdrenalina) {
        this.nome = nome;
        this.prezzoIngresso = prezzoIngresso;
        this.livelloAdrenalina = livelloAdrenalina;
    }

    public String getLivelloAdrenalina() {
        return livelloAdrenalina;
    }

    public void setLivelloAdrenalina(String livelloAdrenalina) {
        this.livelloAdrenalina = livelloAdrenalina;
    }

    @Override
    public String getNome() {
        return "il nome del gioco ad acqua è: "+this.nome;
    }

    @Override
    public double getPrezzoIngresso() {
        return prezzoIngresso;
    }

    @Override
    public double calcolaIncassoPrevisto(int numeroVisitatori) {
        double moltiplicatore = switch (livelloAdrenalina.toLowerCase()) {
            case "basso" -> 1.0;
            case "medio" -> 1.1;
            case "alto" -> 1.25;
            default -> 1.0;
        };
        return prezzoIngresso * numeroVisitatori * moltiplicatore;
    }
}
