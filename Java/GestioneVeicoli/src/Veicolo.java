public abstract class Veicolo {
    private String numeroSerie;
    private double prezzoBase;

    public Veicolo(){};

    public Veicolo(String numeroSerie, int prezzoBase) {
        this.numeroSerie = numeroSerie;
        this.prezzoBase = prezzoBase;
    }


    public String getNumeroSerie() {
        return numeroSerie;
    }

    public void setNumeroSerie(String numeroSerie) {
        this.numeroSerie = numeroSerie;
    }

    public double getPrezzoBase() {
        return prezzoBase;
    }

    public void setPrezzoBase(int prezzoBase) {
        this.prezzoBase = prezzoBase;
    }

    public void start() {
        System.out.println(getClass().getSimpleName() + " con numero serie " + numeroSerie + " è partito.");
    }

    public void stop() {
        System.out.println(getClass().getSimpleName() + " con numero serie " + numeroSerie + " si è fermato.");
    }

    public void visualizzaNumeroSerie() {
        System.out.println("Numero di serie: " + numeroSerie);
    }

    abstract  void movimento();
}
