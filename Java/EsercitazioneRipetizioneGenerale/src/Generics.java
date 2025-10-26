public class Generics<T> {
    private T contenuto;

    public Generics() {
        this.contenuto = contenuto;
    }

    public T getContenuto() {
        return contenuto;
    }

    public void setContenuto(T contenuto) {
        this.contenuto = contenuto;
    }

    @Override
    public String toString() {
        return "Generics{" +
                "contenuto=" + contenuto +
                '}';
    }
}
