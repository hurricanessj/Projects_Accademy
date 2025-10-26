public class Ordine {
    private int id;
    private double prezzoBase;
    private ScontoStrategy sconto;

    public Ordine(int id, double prezzoBase, ScontoStrategy sconto) {
        this.id = id;
        this.prezzoBase = prezzoBase;
        this.sconto = sconto;
    }

    public void setSconto(ScontoStrategy sconto) {
        this.sconto = sconto;
    }

    public double getPrezzoFinale() {
        return sconto.applicaSconto(prezzoBase);
    }
}