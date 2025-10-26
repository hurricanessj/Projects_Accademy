public interface TransporStrategy {
    void calcolaTempo(String partenza, String destinazione);

    void calcolaCost(String partenza, String destinazione);
}
