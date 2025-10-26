public class Prodotto {
    private String nome;
    private double prezzo;
    private static int quantita;

    public Prodotto(String nome, double prezzo) {
        this.nome = nome;
        this.prezzo = prezzo;
        quantita++;
    }

    public void stampaInfo(){
        System.out.println("Prodotto: "+nome+" prezzo: "+ prezzo);
    }

    public static int getTotaleProdotti(){
        return quantita;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public static int getQuantita() {
        return quantita;
    }

    public static void setQuantita(int quantita) {
        Prodotto.quantita = quantita;
    }

    public double getPrezzo() {
        return prezzo;
    }

    public void setPrezzo(double prezzo) {
        this.prezzo = prezzo;
    }

    public static void cambiaPrezzo(double nuovoPrezzo){
        nuovoPrezzo +=10;
        System.out.println("cambia prezzo per valore "+nuovoPrezzo);
    }
    public static void cambiaPrezzoPerRif(Prodotto p, double newPrezzo){
        p.setPrezzo(newPrezzo);
    }
}
