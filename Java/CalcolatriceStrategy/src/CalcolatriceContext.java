public class CalcolatriceContext {
    OperazioneStrategy operazioneStrategy;

    public CalcolatriceContext(OperazioneStrategy operazioneStrategy) {
        this.operazioneStrategy = operazioneStrategy;
    }

    public void setOperazioneStrategy(OperazioneStrategy operazioneStrategy) {
        this.operazioneStrategy = operazioneStrategy;
    }

    public double showOperazione(double a, double b){
        return this.operazioneStrategy.eseguiOperazione(a, b);
    }
}
