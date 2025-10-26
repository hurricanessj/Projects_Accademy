package secondoEsercizio;

public abstract class Dipendente {
    private String nome;
    private String cognome;
    private double stipendio;
    private String dataAssunzione;

    public Dipendente() {
    }

    public Dipendente(String nome, double stipendio, String cognome, String dataAssunzione) {
        this.nome = nome;
        this.stipendio = stipendio;
        this.cognome = cognome;
        this.dataAssunzione = dataAssunzione;
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

    public double getStipendio() {
        return stipendio;
    }

    public void setStipendio(double stipendio) {
        this.stipendio = stipendio;
    }

    public String getDataAssunzione() {
        return dataAssunzione;
    }

    public void setDataAssunzione(String dataAssunzione) {
        this.dataAssunzione = dataAssunzione;
    }

    public void riceviBonus(double bonus) {
        stipendio += bonus;
        System.out.println(nome + " " + cognome + " ha ricevuto un bonus di €" + bonus);
    }


    @Override
    public String toString() {
        return  nome + " " + cognome + " - Stipendio: €" + stipendio + " - Assunto il: " + dataAssunzione;
    }

}
