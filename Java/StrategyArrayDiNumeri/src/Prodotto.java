public class Prodotto implements OperazioniStrategy{
    @Override
    public double eseguiOperazioni(double[] numeri) {
        double prodotto= 1;
        for(double n: numeri){
            prodotto *=n;
        }
        System.out.println("la il prodotto è: "+prodotto);

        return 0;
    }
}
