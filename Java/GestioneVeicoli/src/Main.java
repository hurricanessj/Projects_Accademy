public class Main {
    public static void main(String[] args) {
        Garage garage = new Garage();

        Auto auto = new Auto("A123", 15000, 5);
        Moto moto = new Moto("M456", 8000, 600);
        Camion camion = new Camion("C789", 30000, 12000);

        garage.aggiungiVeicolo(auto);
        garage.aggiungiVeicolo(moto);
        garage.aggiungiVeicolo(camion);

        garage.mostraInformazioni();
        garage.avviaTutti();
        garage.fermaTutti();
    }
}