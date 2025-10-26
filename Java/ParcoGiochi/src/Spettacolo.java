public class Spettacolo implements Attrazione{
    private String nome;
    private double prezzoIngresso;
    private int nPostiDisponibili;

    public Spettacolo(){

    }

    public Spettacolo(String nome, double prezzoIngresso, int nPostiDisponibili) {
        this.nome = nome;
        this.prezzoIngresso = prezzoIngresso;
        this.nPostiDisponibili = nPostiDisponibili;
    }

    public int getnPostiDisponibili() {
        return nPostiDisponibili;
    }

    public void setnPostiDisponibili(int nPostiDisponibili) {
        this.nPostiDisponibili = nPostiDisponibili;
    }

    @Override
    public String getNome() {
        return "il nome dello spettacolo è: "+this.nome;
    }

    @Override
    public double getPrezzoIngresso() {
        return this.prezzoIngresso;
    }

    @Override
    public double calcolaIncassoPrevisto(int numeroVisitatori) {
        return this.prezzoIngresso*numeroVisitatori;
    }
}
