import javax.naming.Context;
import javax.naming.spi.DirObjectFactory;

public class Main {
    public static void main(String[] args) {
        OperazioneStrategy somma1 = new Somma();
        OperazioneStrategy diff1 = new Sottrazione();
        OperazioneStrategy molt = new Moltiplicazione();
        OperazioneStrategy diff = new Divisione();

        CalcolatriceContext context = new CalcolatriceContext(somma1);
        System.out.println(context.showOperazione(3,3));

        context.setOperazioneStrategy(diff1);
        System.out.println(context.showOperazione(3,1));



    }
}