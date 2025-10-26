public class Main {
    public static void main(String[] args) {

        double[] numeri ={2,3,4,5};
        OperazioniStrategy somma = new Somma();
        OperazioniStrategy prodotto = new Prodotto();
        OperazioniStrategy media = new Media();

        CalcoloContext calcoloContext = new CalcoloContext(somma);
        calcoloContext.calcola(numeri);

        calcoloContext.setStrategy(prodotto);
        calcoloContext.calcola(numeri);

        calcoloContext.setStrategy(media);
        calcoloContext.calcola(numeri);



    }
}