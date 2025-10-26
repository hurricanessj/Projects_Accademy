public class Treno implements TransporStrategy{
    @Override
    public void calcolaTempo(String partenza, String destinazione) {
        System.out.println("il tempo di viaggio in Treno da: " + partenza + "\nè do mezzo ora\n");
    }

    @Override
    public void calcolaCost(String partenza, String destinazione) {
        System.out.println("il costo di viaggio in treno da: " + partenza +" a :"+destinazione+ "\nè 20 euro\n");
    }
}
