public class ElseIf {
    public static void main(String[] args) {
        int etaSpettatore = 45;
        boolean abbonamentoSpettatore = true;
        float prezzoBiglietto = 7;
        float riduzionePercentuale = 20;

        if(abbonamentoSpettatore){
            System.out.println("utente abbonato");
            prezzoBiglietto = 0;

        } else if (etaSpettatore>=65 || etaSpettatore<18) {
            System.out.println("riduzione");
            prezzoBiglietto *= 1 - riduzionePercentuale/100;
        }else
            System.out.println("prezzo intero");


            System.out.println("prezzo da pagare = "+ prezzoBiglietto);
    }
}
