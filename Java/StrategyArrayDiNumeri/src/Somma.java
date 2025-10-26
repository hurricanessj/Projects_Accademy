public class Somma implements OperazioniStrategy{
    @Override
    public double eseguiOperazioni(double[] numeri) {
        int somma=0;
        for(double n: numeri) {
            somma += n;
        }
        System.out.println("la somma è: "+somma);
        return 0;
    }
}
