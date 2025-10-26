public class Media implements  OperazioniStrategy{

    @Override
    public double eseguiOperazioni(double[] numeri) {
            double somma =0;
            for(double n: numeri){
                somma+= n;
            }
            double media= (double)somma/numeri.length;

            System.out.println("la media è: "+media);
            return media;
    }
}
