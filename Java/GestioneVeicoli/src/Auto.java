public class Auto extends Veicolo{
    private int numeroPorte;

    public Auto() {
    }

    public Auto(String numeroSerie, int prezzoBase, int numeroPorte) {
        super(numeroSerie, prezzoBase);
        this.numeroPorte=numeroPorte;
    }


    @Override
    public void movimento() {
        System.out.println("L'auto si sta muovendo su quattro ruote con " + numeroPorte + " porte.");
    }
}
