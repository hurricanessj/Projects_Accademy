public class MainBiglietto {
    public static void main(String[] args) {
        InfoStudente studente = new InfoStudente("Federico ll", 20);
        Biglietto<InfoStudente> bigliettoStudente= new Biglietto<>("film1", "18:00", studente);

        bigliettoStudente.stampaDettagli();

        InfoVip postoVip = new InfoVip(true, "regalo1");
        Biglietto<InfoVip> bigliettoVip= new Biglietto<>("film1", "20:00", postoVip);

        bigliettoVip.stampaDettagli();
    }
}
