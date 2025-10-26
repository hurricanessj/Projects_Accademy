public class EsempioEccezioni {


    public static void main(String[] args) {

        try{
            System.out.println("inizio blocco try");
            int valori[] = new int[8];
            valori[8] = 10;
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("posizione non valida\n");

        } finally {
            System.out.println("fine del programma");
        }

    }
}
