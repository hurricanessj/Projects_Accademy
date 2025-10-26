public class Auto implements  TransporStrategy{
    @Override
    public void calcolaTempo(String partenza, String destinazione) {
        System.out.println("il tempo di viaggio in auto da: " + partenza + "\nè di tre ore\n");
    }

    @Override
    public void calcolaCost(String partenza, String destinazione) {
        System.out.println("il costo di viaggio in auto da: " + partenza +" a :"+destinazione+ "\nè 500 euro\n");
    }
}
