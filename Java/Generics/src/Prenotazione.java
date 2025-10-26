public class Prenotazione<T> {
    private T elemento;

    public Prenotazione(T elemento) {
        this.elemento = elemento;
    }

    public T getElemento() {
        return elemento;
    }

    public void stampaDettagli() {
        System.out.println("Dettagli: " + elemento);
    }
}
