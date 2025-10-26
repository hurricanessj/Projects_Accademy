public class Biglietto {
    private int numero;

    public Biglietto(int numero) {
        this.numero = numero;
    }

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    @Override
    public String toString() {
        return "Biglietto{" +
                "numero=" + numero +
                '}';
    }
}
