public class TransportContext {
    TransporStrategy transporStrategy;

    public TransportContext(TransporStrategy transporStrategy) {
        this.transporStrategy = transporStrategy;
    }

    public void calcolaCosto(String partenza, String destinazione){
        transporStrategy.calcolaCost(partenza, destinazione);
    }

    public void calcolaPercorso(String partenza, String destinazione){
        transporStrategy.calcolaTempo(partenza, destinazione);
    }

    public void setTransporStrategy(TransporStrategy transporStrategy) {
        this.transporStrategy = transporStrategy;
    }
}
