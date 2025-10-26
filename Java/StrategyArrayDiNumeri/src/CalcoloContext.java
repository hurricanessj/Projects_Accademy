public class CalcoloContext {
    OperazioniStrategy strategy;

    public CalcoloContext(OperazioniStrategy strategy) {
        this.strategy = strategy;
    }

    public void setStrategy(OperazioniStrategy strategy) {
        this.strategy = strategy;
    }

    public double calcola(double [] numeri){
        return strategy.eseguiOperazioni(numeri);
    }
}
