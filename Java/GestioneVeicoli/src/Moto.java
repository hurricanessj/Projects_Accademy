public class Moto extends Veicolo{
    private int cilindrata;
    public Moto() {
    }

    public Moto(String numeroSerie, int prezzoBase, int cilindrata) {
        super(numeroSerie, prezzoBase);
        this.cilindrata= cilindrata;
    }

    @Override
    public void movimento() {
        System.out.println("La moto da " + cilindrata + "cc si sta muovendo agilmente su due ruote.");
    }
}
