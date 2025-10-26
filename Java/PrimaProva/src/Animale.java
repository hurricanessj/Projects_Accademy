public class Animale {
    private String nome;
    private String verso;

    public Animale(String nome, String verso) {
        this.nome = nome;
        this.verso = verso;
    }

    public Animale() {
    }

    public String getNome() {
        return this.nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getVerso() {
        return verso;
    }

    public void setVerso(String verso) {
        this.verso = verso;
    }

    public void emettiVerso() {
        System.out.println("il " + this.nome + " fa: " + this.verso);
    }
}
