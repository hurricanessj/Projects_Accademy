public class PostoCinema {
    private int fila;
    private int numero;

    public PostoCinema(int fila, int numero) {
        this.fila = fila;
        this.numero = numero;
    }

    @Override
    public String toString() {
        return "PostoCinema{" +
                "fila=" + fila +
                ", numero=" + numero +
                '}';
    }
}
