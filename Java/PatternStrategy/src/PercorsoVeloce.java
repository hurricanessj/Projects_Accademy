public class PercorsoVeloce implements Strategy {
    @Override
    public void calcolaPercorso(String start, String end) {
        System.out.println("Percorso veloce da:" + start + "a" + end);
    }
}
