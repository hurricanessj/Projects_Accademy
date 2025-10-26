class Persona implements Comparable<Persona> {
    private String nome;
    private int eta;

    public Persona(String nome, int eta) {
        this.nome = nome;
        this.eta = eta;
    }

    public String getNome() {
        return nome;
    }

    public int getEta() {
        return eta;
    }

    @Override
    public int compareTo(Persona altra) {
        return Integer.compare(this.eta, altra.eta);
    }

    @Override
    public String toString() {
        return nome + " (" + eta + " anni)";
    }
}