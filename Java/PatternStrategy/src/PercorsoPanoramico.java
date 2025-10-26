public class PercorsoPanoramico implements Strategy{
    @Override
    public void calcolaPercorso(String start, String end) {
        System.out.println("Percorso panoramico da: " + start + " a " + end);
    }
}
