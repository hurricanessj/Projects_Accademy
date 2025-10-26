public class Biglietto <T>{
    private String film;
    private String orario;
    private T extra;

    public Biglietto(String film, String orario, T extra) {
        this.film = film;
        this.orario = orario;
        this.extra = extra;
    }

    public T getExtra() {
        return extra;
    }

    public void stampaDettagli(){
        System.out.println("dettagli biblietto: "+film);
        System.out.println("\n orario: "+orario);
        System.out.println("\n extra: "+extra.toString());
    }


}
