public class ScontoPercentuale implements ScontoStrategy {
    private double percentuale;

    public ScontoPercentuale(double percentuale) {
        this.percentuale = percentuale;
    }

    public void setPercentuale(double percentuale) {
        this.percentuale = percentuale;
    }

    public double applicaSconto(double prezzoBase) {
        return prezzoBase * (1 - percentuale / 100);
    }
}
