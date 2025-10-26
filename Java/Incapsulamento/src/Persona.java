public class Persona {
    private String nome;
    private String cognome;
    private int eta;



    public Persona(String c) {
        this.cognome = c;
    }

    public Persona(String cognome, String nome, int eta) {
        this.cognome = cognome;
        this.nome = nome;
        this.eta = eta;
    }

    public Persona(String nome, String cognome) {
        this.nome = nome;
        this.cognome = cognome;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCognome() {
        return cognome;
    }

    public void setCognome(String cognome) {
        this.cognome = cognome;
    }

    public int getEta() {
        return eta;
    }

    public void setEta(int eta) {
        this.eta = eta;
    }

    public String getNomeCompleto() {
        return this.nome + this.cognome;
    }

}
