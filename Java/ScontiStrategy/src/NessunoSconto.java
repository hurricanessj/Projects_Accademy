public class NessunoSconto implements ScontoStrategy{
    @Override
    public double applicaSconto(double prezzoBase) {
        return prezzoBase;
    }
}
