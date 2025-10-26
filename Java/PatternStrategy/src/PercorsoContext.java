public class PercorsoContext {
    private Strategy strategy;

    public PercorsoContext(Strategy strategy) {
        this.strategy = strategy;
    }

    public void calcolaPercorso(String start, String end){
        strategy.calcolaPercorso(start, end);
    }

    public void setStrategy(Strategy strategy) {
        this.strategy = strategy;
    }

}
