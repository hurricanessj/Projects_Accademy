public class Alimento {
    private int id;
    private String nome;
    private String scadenza;
    private int quantita;
    private double prezzo;

    public Alimento() {
    }

    public Alimento(int id, String nome, String scadenza, int quantita, double prezzo) {
        this.id = id;
        this.nome = nome;
        this.scadenza = scadenza;
        this.quantita = quantita;
        this.prezzo = prezzo;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getScadenza() {
        return scadenza;
    }

    public void setScadenza(String scadenza) {
        this.scadenza = scadenza;
    }

    public int getQuantita() {
        return quantita;
    }

    public void setQuantita(int quantita) {
        this.quantita = quantita;
    }

    public double getPrezzo() {
        return prezzo;
    }

    public void setPrezzo(double prezzo) {
        this.prezzo = prezzo;
    }

    @Override
    public String toString() {
        return "Alimento \n id="+id+"\n nome= "+nome+"\n scadenza= "+scadenza+"\n quantita="+quantita+"\n prezzo= "+prezzo;
    }
}
