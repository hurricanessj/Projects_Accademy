public class PercorsoBreve implements Strategy {

    @Override
    public void calcolaPercorso(String start, String end) {
        System.out.println("Percorso piu breve da " + start + " a " + end);
    }
}
