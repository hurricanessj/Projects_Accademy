public class Giostra implements Attrazione{
    private String durata;
    private String nome;
    private double prezzoIngresso;

    public Giostra(){
    }

    public Giostra(String durata, String nome, double prezzoIngresso) {
        this.durata = durata;
        this.nome = nome;
        this.prezzoIngresso = prezzoIngresso;
    }

    public String getDurata() {
        return durata;
    }

    public void setDurata(String durata) {
        this.durata = durata;
    }

    @Override
    public String getNome() {
        return "il nome della giostra: "+this.nome;
    }

    @Override
    public double getPrezzoIngresso() {
        return this.prezzoIngresso;
    }

    @Override
    public double calcolaIncassoPrevisto(int numeroVisitatori) {
        return prezzoIngresso*numeroVisitatori;
    }
}
