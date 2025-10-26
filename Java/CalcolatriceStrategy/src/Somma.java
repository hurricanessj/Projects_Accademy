public class Somma implements  OperazioneStrategy{
    @Override
    public double eseguiOperazione(double a, double b) {
        double risultato;
        risultato = a+b;

        return risultato;
    }
}
