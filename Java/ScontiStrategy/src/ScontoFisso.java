public class ScontoFisso implements ScontoStrategy {
    private double importo;

    public ScontoFisso(double importo) {
        this.importo = importo;
    }

    @Override
    public double applicaSconto(double prezzoBase) {
        return (prezzoBase * 30) / 100;
    }
}
