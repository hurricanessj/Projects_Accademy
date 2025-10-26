public class Aereo implements TransporStrategy{
    @Override
    public void calcolaTempo(String partenza, String destinazione) {
        System.out.println("il tempo di viaggio in aereo da: " + partenza + "\nè di un ora\n");
    }

    @Override
    public void calcolaCost(String partenza, String destinazione) {
        System.out.println("il costo di viaggio in aereo da: " + partenza +" a :"+destinazione+ "\nè 2000 euro\n");
    }
}
