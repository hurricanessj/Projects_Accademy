public class Main {
    public static void main(String[] args) {
        PostoCinema c1 = new PostoCinema(1,2);
        Prenotazione<PostoCinema> p1= new Prenotazione<>(c1);
        p1.stampaDettagli();

        SpettacoloTeatro s1 = new SpettacoloTeatro("18:00", "spettacolo1");
        Prenotazione<SpettacoloTeatro> sp1 = new Prenotazione<>(s1);

        sp1.stampaDettagli();

    }
}