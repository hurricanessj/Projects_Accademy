public class Camion extends Veicolo{
    private int caricoMax;

    public Camion() {
    }

    public Camion(String numeroSerie, int prezzoBase, int caricoMax) {
        super(numeroSerie, prezzoBase);
        this.caricoMax= caricoMax;
    }

    public int getCaricoMax() {
        return caricoMax;
    }

    public void setCaricoMax(int caricoMax) {
        this.caricoMax = caricoMax;
    }

    @Override
    public void movimento() {
        System.out.println("Il camion si muove lentamente trasportando un carico massimo di " + caricoMax + " kg.");
    }
}
