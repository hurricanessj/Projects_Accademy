public class Coppia <K, V>{
    private K chiave;
    private V valore;

    public Coppia(K chiave, V valore) {
        this.chiave = chiave;
        this.valore = valore;
    }

    public K getChiave() {
        return chiave;
    }

    public void setChiave(K chiave) {
        this.chiave = chiave;
    }

    public V getValore() {
        return valore;
    }

    public void setValore(V valore) {
        this.valore = valore;
    }

    @Override
    public String toString() {
        return "Coppia{" +
                "chiave=" + chiave +
                ", valore=" + valore +
                '}';
    }
}
